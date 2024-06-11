package com.socialswift.api.model.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonCreateRequestDTO {
    @NotBlank(message = "DNI can not be empty.")
    @Size(min = 8, message = "DNI must have at least 8 characters.")
    @Pattern(regexp = "^[0-9]*$", message = "DNI must have only numbers.")
    private String dni;

    @NotBlank(message = "Name can not be empty.")
    @Pattern(regexp = "^[a-zA-Z]*$", message = "Name must have only letters.")
    private String name;

    @NotBlank(message = "Lastname can not be empty.")
    @Pattern(regexp = "^[a-zA-Z]*$", message = "Lastname must have only letters.")
    private String lastname;

    @NotBlank(message = "Birth date can not be empty.")
    private LocalDate birthDate;

    @NotBlank(message = "Address can not be empty.")
    private String address;

    @NotBlank(message = "Phone number can not be empty.")
    @Size(min = 9, message = "Phone number must have at least 9 characters.")
    private String phoneNumber;

    @NotBlank(message = "Email can not be empty.")
    @Email
    private String email;

    @NotBlank(message = "Picture can not be empty.")
    private byte[] picture;
}
