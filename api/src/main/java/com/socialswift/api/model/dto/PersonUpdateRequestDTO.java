package com.socialswift.api.model.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonUpdateRequestDTO {
    @NotBlank(message = "Address can not be empty.")
    private String address;

    @NotBlank(message = "Phone number can not be empty.")
    @Size(min = 9, message = "Phone number must have at least 9 characters.")
    private String phoneNumber;

    @NotBlank(message = "Email can not be empty.")
    @Email
    private String email;
}
