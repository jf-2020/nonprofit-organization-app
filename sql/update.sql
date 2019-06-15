--RESET DATABASE SCRIPT

--/Users/Liz/Desktop/Development/April2019DC/Unit5/PostgreSQLPractice/practiceMay/sponsoredChildren/nonprofit-organization-app-sql
--local directory: c:/Users/jcf12/dc/development/april2019dc/project_2/nonprofit-organization-app/sql

--REMOVES
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sponsors;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS families;
DROP TABLE IF EXISTS stores;
DROP TABLE IF EXISTS schools;
DROP TABLE IF EXISTS supplies;
DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS links;
DROP DATABASE nonprofit_organization_app;

--CREATE & CONNECT
CREATE DATABASE nonprofit_organization_app;
\c nonprofit_organization_app;
\i schema.sql;
\i seed.sql

