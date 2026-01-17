$destDir = "F:\linkcode app\src\assets\companies"
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
    Write-Host "Created directory: $destDir"
} else {
    Write-Host "Directory exists: $destDir"
}

$companies = @(
    @{Name="Microsoft"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png"},
    @{Name="LinkedIn"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"},
    @{Name="Infosys"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"},
    @{Name="Accenture"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png"},
    @{Name="Barclays"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Barclays_Logo.svg/1280px-Barclays_Logo.svg.png"},
    @{Name="Brillio"; Url="https://mma.prnewswire.com/media/268968/brillio_logo.jpg"},
    @{Name="PublicisSapient"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Publicis_Sapient_Logo_01.png/800px-Publicis_Sapient_Logo_01.png"},
    @{Name="BNYMellon"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BNY_Mellon_logo.svg/1280px-BNY_Mellon_logo.svg.png"},
    @{Name="Bajaj"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bajaj_Auto_Logo.svg/1280px-Bajaj_Auto_Logo.svg.png"},
    @{Name="Cognizant"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/1280px-Cognizant_logo_2022.svg.png"},
    @{Name="SAP"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1280px-SAP_2011_logo.svg.png"},
    @{Name="Avaya"; Url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Avaya_Logo.svg/1280px-Avaya_Logo.svg.png"}
)

foreach ($company in $companies) {
    $path = "$destDir\$($company.Name).png"
    Write-Host "Downloading $($company.Name)..."
    try {
        Invoke-WebRequest -Uri $company.Url -OutFile $path -UseBasicParsing
    } catch {
        Write-Host "Failed to download $($company.Name): $_"
    }
}
