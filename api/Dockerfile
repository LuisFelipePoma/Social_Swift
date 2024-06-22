FROM openjdk:21
ENV SPRING_DATASOURCE_URL "jdbc:sqlserver://social-db:1433;databaseName=socialswiftdb;encrypt=true;trustServerCertificate=true;"
ADD target/api-0.0.1-SNAPSHOT.jar app1.jar
ENTRYPOINT [ "java", "-jar","app1.jar" ]
