-- Template for non-superuser application roles.
-- Copy/adjust role names and database names per environment.

-- Example standard app role (no superuser, no createdb, no createrole)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_standard') THEN
    CREATE ROLE app_standard WITH
      LOGIN
      NOSUPERUSER
      NOCREATEDB
      NOCREATEROLE
      INHERIT
      NOREPLICATION
      NOBYPASSRLS
      PASSWORD 'change_me_now';
  END IF;
END
$$;

-- Replace threeplugpos with your target DB if different.
GRANT CONNECT ON DATABASE threeplugpos TO app_standard;
