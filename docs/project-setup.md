# project-setup.md

## 3PlugPOS Project Setup Commands (Pre-Development)

```powershell
# 0) One-command setup for new PCs (recommended after clone)
powershell -ExecutionPolicy Bypass -File scripts\bootstrap.ps1
```

```powershell
# 1) Verify package manager
winget --version
```

```powershell
# 2) Check/Install Git
if (Get-Command git -ErrorAction SilentlyContinue) {
  git --version
} else {
  winget install --id Git.Git -e --source winget
}
```

```powershell
# 3) Check/Install Node.js LTS (skip install if already present)
if (Get-Command node -ErrorAction SilentlyContinue) {
  node --version
  cmd /c npm --version
} else {
  winget install --id OpenJS.NodeJS.LTS -e --source winget
}
```

```powershell
# 4) Check/Install Rust toolchain (required for Tauri)
if (Get-Command rustup -ErrorAction SilentlyContinue) {
  rustup --version
} else {
  winget install --id Rustlang.Rustup -e --source winget
}
rustup default stable
rustup update
```

```powershell
# 5) Check/Install PostgreSQL client/server
if (Get-Command psql -ErrorAction SilentlyContinue) {
  psql --version
} else {
  winget install --id PostgreSQL.PostgreSQL.17 -e --source winget --accept-source-agreements --accept-package-agreements
}
```

```powershell
# 6) Git setup with remote (main) and upstream sync first
# Remote: https://github.com/Triotek-Ltd/3plug.git
if (-not (Test-Path 3plugsystem)) {
  git clone https://github.com/Triotek-Ltd/3plug.git 3plugsystem
}
cd 3plugsystem

# Ensure origin points to the required remote
$originUrl = git remote get-url origin 2>$null
if (-not $originUrl) {
  git remote add origin https://github.com/Triotek-Ltd/3plug.git
} elseif ($originUrl -ne "https://github.com/Triotek-Ltd/3plug.git") {
  git remote set-url origin https://github.com/Triotek-Ltd/3plug.git
}

# Fetch upstream first to avoid conflicts, then track/pull main
git fetch origin --prune
git checkout -B main origin/main
git branch --set-upstream-to=origin/main main
git pull --ff-only origin main

# Verify we are aligned to latest origin/main
git rev-parse --abbrev-ref HEAD
git log -1 --oneline HEAD
git log -1 --oneline origin/main

# Confirm license file presence (Apache-2.0 should remain untouched)
if (Test-Path LICENSE) { Write-Host "LICENSE present" }
if (Test-Path LICENSE.txt) { Write-Host "LICENSE.txt present" }
```

```powershell
# 7) Initialize frontend shell with Vite (React + JavaScript)
if (Test-Path package.json) {
  Write-Host "Existing Node project detected; skipping Vite scaffold."
} elseif ((Get-ChildItem -Force | Where-Object { $_.Name -notin @('.git', '.github', 'LICENSE', 'LICENSE.txt', 'README.md') }).Count -gt 0) {
  Write-Host "Repository already has files; skipping Vite scaffold to avoid overwrite."
} else {
  cmd /c npx --yes create-vite@latest . --template react
}
```

```powershell
# 8) Install base dependencies
cmd /c npm install
```

```powershell
# 9) Add backend and shared baseline dependencies
cmd /c npm install express cors helmet compression morgan zod dotenv pg pino pino-pretty jsonwebtoken bcrypt
```

```powershell
# 10) Add developer dependencies
cmd /c npm install -D concurrently nodemon eslint prettier
```

```powershell
# 11) Initialize Tauri in existing project
cmd /c npm install @tauri-apps/cli @tauri-apps/api
cmd /c npx tauri init --ci
```

```powershell
# 12) Create initial backend/core folders
$dirs = @(
  "backend",
  "backend\core",
  "backend\plugs",
  "backend\shared",
  "backend\core\auth",
  "backend\core\rbac",
  "backend\core\audit",
  "backend\core\logging",
  "backend\core\validation",
  "backend\core\migrations",
  "backend\core\backup-restore",
  "backend\core\jobs",
  "backend\core\analytics",
  "backend\core\reporting",
  "backend\core\module-registry",
  "backend\core\security-events",
  "backend\core\config",
  "backend\core\diagnostics",
  "backend\core\installer-hooks",
  "backend\plugs\operations",
  "backend\plugs\management",
  "backend\plugs\administration",
  "backend\shared\helpers",
  "scripts",
  "sql",
  "logs",
  "backups",
  "exports"
)
foreach ($d in $dirs) {
  if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d | Out-Null }
}
```

```powershell
# 13) Create environment template
@"
NODE_ENV=development
APP_NAME=3PlugPOS
APP_BIND_HOST=127.0.0.1
APP_PORT=3000
API_PREFIX=/api/v1

DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=threeplugpos
DB_USER=postgres
DB_PASSWORD=change_me
DB_SSL=false

JWT_ACCESS_SECRET=change_me_access
JWT_REFRESH_SECRET=change_me_refresh
JWT_ACCESS_TTL=15m
JWT_REFRESH_TTL=7d

AUDIT_HASH_ALGO=sha256
LOG_LEVEL=info
BACKUP_PATH=./backups
EXPORT_PATH=./exports
LOG_PATH=./logs
"@ | Set-Content .env.example
```

```powershell
# 14) Initialize PostgreSQL database
psql -U postgres -h 127.0.0.1 -p 5432 -tc "SELECT 1 FROM pg_database WHERE datname='threeplugpos'" | Select-String 1
if (-not $?) {
  psql -U postgres -h 127.0.0.1 -p 5432 -c "CREATE DATABASE threeplugpos;"
}
```

```powershell
# 15) Initialize .gitignore
@"
node_modules/
dist/
target/
src-tauri/target/
.env
.env.local
logs/
backups/
exports/
coverage/
"@ | Set-Content .gitignore
```

```powershell
# 16) Validate installed toolchain versions
git --version
node --version
cmd /c npm --version
rustc --version
cargo --version
psql --version
cmd /c npx tauri --version
```

```powershell
# 17) First run check (frontend + tauri shell)
cmd /c npm run dev
cmd /c npx tauri dev
```
