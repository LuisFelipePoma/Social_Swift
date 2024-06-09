package com.socialswift.api.config;


import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;


//http://localhost:8080/api/v1/swagger-ui/index.html
//https://www.bezkoder.com/spring-boot-swagger-3/
@Configuration
public class OpenApiConfig {

    @Value("${codelace.openapi.dev-url}")
    private String devUrl;

    @Bean
    public OpenAPI myOpenAPI() {
        // Definir el servidor de desarrollo
        Server devServer = new Server();
        devServer.setUrl(devUrl);
        devServer.setDescription("Server URL in Development environment");

        // Información de contacto
        Contact contact = new Contact();
        contact.setEmail("u202110764@upc.edu.pe");
        contact.setName("CodeLace");
        contact.setUrl("https://codelaceco.netlify.app/");
        

        // Licencia
        License mitLicense = new License().name("MIT License").url("https://choosealicense.com/licenses/mit/");

        // Información general de la API
        Info info = new Info()
                .title("CodeLace API")
                .version("1.0")
                .contact(contact)
                .description("This API exposes endpoints.")
                .termsOfService("https://www.codelace.com/terms")
                .license(mitLicense);



        return new OpenAPI()
                .info(info)
                .servers(List.of(devServer));
    }
}