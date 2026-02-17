param(
  [string]$RepoRoot = "."
)

$ErrorActionPreference = "Stop"

function Test-CommandExists {
  param([string]$Name)
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

Write-Host "== 3PlugPOS bootstrap =="
Set-Location $RepoRoot

if (-not (Test-CommandExists "winget")) {
  throw "winget is required but not found."
}

if (Test-CommandExists "git") {
  git --version
} else {
  winget install --id Git.Git -e --source winget --accept-source-agreements --accept-package-agreements
}

if (Test-CommandExists "node") {
  node --version
} else {
  winget install --id OpenJS.NodeJS.LTS -e --source winget --accept-source-agreements --accept-package-agreements
}

cmd /c npm --version

$rustupExe = Join-Path $env:USERPROFILE ".cargo\bin\rustup.exe"
if (Test-Path $rustupExe) {
  & $rustupExe --version
} else {
  winget install --id Rustlang.Rustup -e --source winget --accept-source-agreements --accept-package-agreements
}
& $rustupExe default stable
& $rustupExe update

$pgBin = "C:\Program Files\PostgreSQL\17\bin\psql.exe"
if (Test-Path $pgBin) {
  & $pgBin --version
} else {
  winget install --id PostgreSQL.PostgreSQL.17 -e --source winget --accept-source-agreements --accept-package-agreements
}

if (-not (Test-Path "package.json")) {
  throw "package.json not found. Run this script from project root."
}

if (Test-Path "package-lock.json") {
  cmd /c npm ci
} else {
  cmd /c npm install
}

if (-not (Test-Path "src-tauri")) {
  cmd /c npx tauri init --ci
}

Write-Host "Bootstrap complete."
Write-Host "If DB is not initialized yet, run:"
Write-Host '"C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -h 127.0.0.1 -p 5432 -c "CREATE DATABASE threeplugpos;"'
