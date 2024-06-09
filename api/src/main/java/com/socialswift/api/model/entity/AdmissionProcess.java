package com.socialswift.api.model.entity;

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
@Table(name = "admission_process")
public class AdmissionProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "hiring_need_id", nullable = false)
    private HiringNeed hiringNeed;

    @Column(name = "application_date", nullable = false)
    private LocalDate applicationDate;

    @Column(name = "interview_date")
    private LocalDate interviewDate;

    @Column(name = "evaluation_result")
    private String evaluationResult;

    @Column(name = "state", nullable = false)
    private String state;

}
