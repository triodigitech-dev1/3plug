\set ON_ERROR_STOP on

\echo === 3PlugPOS DB First-Time Init (Interactive) ===
\prompt 'Superuser name: ' super_name
\prompt 'Superuser password: ' super_pass
\prompt 'Standard user name: ' app_name
\prompt 'Standard user password: ' app_pass
\prompt 'Database name: ' db_name

-- Superuser create/update
SELECT format(
  'CREATE ROLE %I WITH LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION BYPASSRLS PASSWORD %L',
  :'super_name', :'super_pass'
)
WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'super_name')
\gexec

SELECT format(
  'ALTER ROLE %I WITH SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION BYPASSRLS PASSWORD %L',
  :'super_name', :'super_pass'
)
WHERE EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'super_name')
\gexec

-- Standard app user create/update
SELECT format(
  'CREATE ROLE %I WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT NOREPLICATION NOBYPASSRLS PASSWORD %L',
  :'app_name', :'app_pass'
)
WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'app_name')
\gexec

SELECT format(
  'ALTER ROLE %I WITH NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT NOREPLICATION NOBYPASSRLS PASSWORD %L',
  :'app_name', :'app_pass'
)
WHERE EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'app_name')
\gexec

-- Database create and ownership
SELECT format('CREATE DATABASE %I OWNER %I', :'db_name', :'super_name')
WHERE NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = :'db_name')
\gexec

-- Runtime grants
SELECT format('GRANT CONNECT ON DATABASE %I TO %I', :'db_name', :'app_name') \gexec
SELECT format('\connect %I', :'db_name') \gexec
SELECT format('GRANT USAGE ON SCHEMA public TO %I', :'app_name') \gexec
SELECT format('GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO %I', :'app_name') \gexec
SELECT format('GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO %I', :'app_name') \gexec
SELECT format('ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO %I', :'app_name') \gexec
SELECT format('ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT, UPDATE ON SEQUENCES TO %I', :'app_name') \gexec

\echo Done.
