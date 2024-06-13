package com.socialswift.api.model.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HiringNeedCreateRequestDTO {
    @NotBlank(message = "Position is required")
    private String position;

    @NotBlank(message = "Description is required")
    private String description;

    private LocalDate startDate;

    private LocalDate endDate;

    @NotNull(message = "Company ID is required")
    private Long company;

    @Min(value = 1, message = "Amount of people must be greater than 0")
    private Integer amountPeople;

    private Boolean certification;

    private BigDecimal salary;

    private Boolean experience;

    @NotBlank(message = "Education level is required")
    private String educationLevel;

    @NotBlank(message = "Position is required")
    private String contractType;
}
