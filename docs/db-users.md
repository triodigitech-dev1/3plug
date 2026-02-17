# db-users.md

## 3PlugPOS PostgreSQL Users (Interactive Setup)

No default passwords are stored in the repository.

Create users and database interactively:

```powershell
cd c:\Users\Hope\dev-isaac\triotek\3plugsystem
powershell -ExecutionPolicy Bypass -File scripts\init-db-users.ps1
```

The script prompts you for:
- Superuser name/password
- Standard app user name/password
- Database name

Then set `.env` values manually:
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
