package com.socialswift.api.model.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "working_information")
public class WorkingInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    @Column(name = "position", nullable = false)
    private String position;

    @Column(name = "education_level", nullable = false)
    private String educationLevel;

    @Column(name = "contract_type", nullable = false)
    private String contractType;

    @Column(name = "certification", nullable = false)
    private Boolean certification;

    @Column(name = "experience", nullable = false)
    private Boolean experience;

    @Column(name = "contact_phone_reference")
    private String contactPhoneReference;

    @Column(name = "contact_information")
    private String contactInformation;

    @Column(name = "registration_date", nullable = false)
    private LocalDate registrationDate;

    @Column(name = "cv_url", nullable = false)
    private String cvUrl;
}
