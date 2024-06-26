package com.socialswift.api.model.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HiringCreateRequestDTO {
    private LocalDate startDate;
    private LocalDate endDate;
    private String position;
    private BigDecimal salary;
    private Long company;
    private Long person;
}
