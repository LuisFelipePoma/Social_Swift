package com.socialswift.api.model.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HiringNeedResponseDTO {
    private Long id;
    private String position;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long companyId;
    private Integer amountPeople;
    private Boolean certification;
    private Boolean experience;
    private String educationLevel;
    private String contractType;
    private String state;
    private CompanyResponseDTO company;
}
