package com.socialswift.api.model.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdmissionProcessAdmitResponseDTO {
    private Long id;
    private PersonResponseDTO person;
    private HiringNeedResponseDTO hiringNeed;
    private LocalDate applicationDate;
    private LocalDate interviewDate;
    private String evaluationResult;
    private String state;
    private HiringResponseDTO hiring;
}
