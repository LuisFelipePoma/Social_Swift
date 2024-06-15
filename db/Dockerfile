# Use Microsoft SQL Server as base image
FROM mcr.microsoft.com/mssql/server:2019-latest

# Create app directory
WORKDIR /usr/src/app

# Copy initialization scripts
COPY script.sql .

# Set environment variables
ENV SA_PASSWORD=admin_123_admin
ENV ACCEPT_EULA=Y

# Expose SQL Server port (not mandatory unless you want to map it externally)
EXPOSE 1433

# Define a volume
VOLUME /var/opt/mssql

# Run initialization script using sqlcmd
RUN /opt/mssql/bin/sqlservr & sleep 60s && /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD} -i script.sql
