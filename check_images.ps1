$urls = New-Object System.Collections.Specialized.OrderedDictionary
$urls['Ajanta']     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Ajanta_cave9.jpg/480px-Ajanta_cave9.jpg'
$urls['Ellora']     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ellora_Kailash_temple_overview,_2007.jpg/480px-Ellora_Kailash_temple_overview,_2007.jpg'
$urls['Thanjavur']  = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tanjore_Brihadeeswarar_temple.jpg/480px-Tanjore_Brihadeeswarar_temple.jpg'
$urls['Khajuraho']  = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kandariya_Mahadev_Temple,_Khajuraho.jpg/480px-Kandariya_Mahadev_Temple,_Khajuraho.jpg'
$urls['Madhubani']  = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Madhubani_painting,_Bihar.jpg/480px-Madhubani_painting,_Bihar.jpg'
$urls['Warli']      = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Warli_Painting_Maharashtra.jpg/480px-Warli_Painting_Maharashtra.jpg'
$urls['Puri']       = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pattachitra_-_Odisha_State_Museum.jpg/480px-Pattachitra_-_Odisha_State_Museum.jpg'
$urls['Jaipur']     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Jaipur_Blue_Pottery.jpg/480px-Jaipur_Blue_Pottery.jpg'
$urls['Hampi']      = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hampi_Vittala_temple07.jpg/480px-Hampi_Vittala_temple07.jpg'
$urls['Kalamkari']  = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kalamkari_Andhra_Pradesh.jpg/480px-Kalamkari_Andhra_Pradesh.jpg'
$urls['Kangra']     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kangra_style_Painting.jpg/480px-Kangra_style_Painting.jpg'
$urls['Kishangarh'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bani_Thani.jpg/480px-Bani_Thani.jpg'
$urls['Konark']     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Konarka_Temple.jpg/480px-Konarka_Temple.jpg'

foreach ($k in $urls.Keys) {
    try {
        $resp = Invoke-WebRequest -Uri $urls[$k] -Method Head -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
        Write-Host "$k : $($resp.StatusCode)"
    } catch {
        Write-Host "$k : FAIL - $($_.Exception.Response.StatusCode.value__)"
    }
}
