package com.socialswift.api.model.dto;

import org.hibernate.validator.constraints.URL;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkingInformationUpdateRequestDTO {
    @NotNull(message = "Person is required")
    private Long person;

    @NotBlank(message = "Position is required")
    private String position;

    @NotBlank(message = "Education level is required")
    private String educationLevel;

    @NotNull(message = "Certification is required")
    private Boolean certification;

    @NotNull(message = "Experience is required")
    private Boolean experience;

    @NotBlank(message = "Phone reference is required")
    @Size(min = 9, message = "Phone number must have at least 9 characters.")
    private String contactPhoneReference;

    @NotBlank(message = "Contact information is required")
    private String contactInformation;

    @NotBlank(message = "CV URL is required")
    @URL
    private String cvUrl;
}
