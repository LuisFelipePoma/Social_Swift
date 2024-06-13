package com.socialswift.api.model.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdmissionProcessCreateRequestDTO {
    @NotNull(message = "Person ID is required")
    private Long person;

    @NotNull(message = "Hiring Need ID is required")
    private Long hiringNeed;

    private LocalDate applicationDate;

    private LocalDate interviewDate;
}
