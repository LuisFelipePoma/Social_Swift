package com.socialswift.api.model.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkingInformationResponseDTO {
    private Long id;
    private String position;
    private String educationLevel;
    private Boolean certification;
    private Boolean experience;
    private String contactPhoneReference;
    private String contactInformation;
    private LocalDate registrationDate;
    private String cvUrl;
}
