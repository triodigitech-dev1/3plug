param(
  [string]$AdminUser = "postgres",
  [string]$DbHost = "127.0.0.1",
  [int]$Port = 5432
)

$ErrorActionPreference = "Stop"
$psql = "C:\Program Files\PostgreSQL\17\bin\psql.exe"

if (-not (Test-Path $psql)) {
  throw "psql not found at $psql. Install PostgreSQL 17 first."
}

Write-Host "Running first-time DB init as admin user '$AdminUser'..."
& $psql -U $AdminUser -h $DbHost -p $Port -d postgres -f "sql/000_first_time_db_init.sql"
Write-Host "DB user initialization script completed."
Write-Host "Set your own DB_USER/DB_PASSWORD in .env after this step."
