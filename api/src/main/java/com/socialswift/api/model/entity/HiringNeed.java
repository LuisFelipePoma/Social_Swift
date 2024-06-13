package com.socialswift.api.model.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hiring_need")
public class HiringNeed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "position", nullable = false)
    private String position;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @Column(name = "amount_people", nullable = false)
    private Integer amountPeople;

    @Column(name = "certification", nullable = false)
    private Boolean certification;

    @Column(name = "experience", nullable = false)
    private Boolean experience;

    @Column(name = "salary", nullable = false)
    private BigDecimal salary;

    @Column(name = "education_level", nullable = false)
    private String educationLevel;

    @Column(name = "contract_type", nullable = false)
    private String contractType;

    @Column(name = "state", nullable = false)
    private String state;

}
