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
    private Long personId;

    @NotNull(message = "Hiring Need ID is required")
    private Long hiringNeedId;

    private LocalDate applicationDate;

    private LocalDate interviewDate;
}
