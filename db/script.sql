CREATE DATABASE [socialswiftdb];
GO

CREATE LOGIN dev WITH PASSWORD = 'admin_123_admin';
GO


USE [socialswiftdb];
GO

CREATE USER dev FOR LOGIN dev;
GO

ALTER ROLE db_owner ADD MEMBER dev;
GO
-- Generate tables with SpringBoot