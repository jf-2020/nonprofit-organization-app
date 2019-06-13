
--/Users/Liz/Desktop/Development/April2019DC/Unit5/PostgreSQLPractice/practiceMay/sponsoredChildren/nonprofit-organization-app-sql

--Reset Database script
--REMOVES
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sponsors;
DROP TABLE IF EXISTS children;
DROP TABLE IF EXISTS families;
DROP TABLE IF EXISTS stores;
DROP TABLE IF EXISTS schools;
DROP TABLE IF EXISTS supplies;
DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS items;

DROP DATABASE nonprofit_organization_app;

CREATE DATABASE nonprofit_organization_app;
\c nonprofit_organization_app;
\i schema.sql;
\i seed.sql;
