package com.socialswift.api.model.dto;

import org.hibernate.validator.constraints.URL;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyCreateRequestDTO {
    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "BusinessName is required")
    private String businessName;

    @NotBlank(message = "RUC is required")
    @Size(min = 11, max = 11, message = "RUC must have 11 characters")
    private String ruc;

    @NotBlank(message = "Sector is required")
    private String sector;

    @NotBlank(message = "Address can not be empty.")
    private String address;

    @NotBlank(message = "Phone number can not be empty.")
    @Size(min = 9, message = "Phone number must have at least 9 characters.")
    private String phoneNumber;

    @NotBlank(message = "Email can not be empty.")
    @Email
    private String email;

    @NotBlank(message = "Web cannot be empty")
    @URL
    private String webUrl;

    @NotBlank(message = "Description cannot be empty")
    private String description;

    @NotBlank(message = "Contact name cannot be empty")
    private String contactName;

    @NotBlank(message = "City cannot be empty")
    private String city;
}
