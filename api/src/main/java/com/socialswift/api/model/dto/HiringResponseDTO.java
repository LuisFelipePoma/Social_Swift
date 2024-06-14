package com.socialswift.api.model.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HiringResponseDTO {
    private Long id;
    private LocalDate startDate;
    private LocalDate endDate;
    private String position;
    private BigDecimal salary;
    private String state;
    private CompanyResponseDTO company;
    private PersonResponseDTO person;
}
