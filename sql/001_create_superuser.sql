\set ON_ERROR_STOP on

\echo === Create/Update Superuser (Interactive) ===
\prompt 'Superuser name: ' super_name
\prompt 'Superuser password: ' super_pass

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

\echo Done.
