[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$SourceDirectory = Join-Path $ProjectRoot 'src'
$ManifestPath = Join-Path $SourceDirectory 'manifest.json'
$OutputDirectory = $PSScriptRoot

if (-not (Test-Path -LiteralPath $ManifestPath -PathType Leaf)) {
  throw "Manifest not found: $ManifestPath"
}

$Manifest = Get-Content -LiteralPath $ManifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
if (-not $Manifest.version) {
  throw 'manifest.json does not contain a version.'
}

$PackageName = "orange-translator-$($Manifest.version).zip"
$PackagePath = Join-Path $OutputDirectory $PackageName
$StagingDirectory = Join-Path $env:TEMP "orange-translator-build-$([guid]::NewGuid().ToString('N'))"

New-Item -ItemType Directory -Path $StagingDirectory -Force | Out-Null

try {
  Copy-Item -Path (Join-Path $SourceDirectory '*') -Destination $StagingDirectory -Recurse -Force

  if (-not (Test-Path -LiteralPath (Join-Path $StagingDirectory 'manifest.json') -PathType Leaf)) {
    throw 'Staging failed: manifest.json is not at the package root.'
  }

  if (Test-Path -LiteralPath $PackagePath) {
    Remove-Item -LiteralPath $PackagePath -Force
  }

  Compress-Archive -Path (Join-Path $StagingDirectory '*') -DestinationPath $PackagePath -CompressionLevel Optimal

  $Size = (Get-Item -LiteralPath $PackagePath).Length
  Write-Host "Built: $PackagePath"
  Write-Host "Version: $($Manifest.version)"
  Write-Host "Size: $Size bytes"
}
finally {
  if (Test-Path -LiteralPath $StagingDirectory) {
    Remove-Item -LiteralPath $StagingDirectory -Recurse -Force
  }
}
