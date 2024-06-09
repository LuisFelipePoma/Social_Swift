package com.socialswift.api.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "business_name", nullable = false)
    private String businessName;

    @Column(name = "ruc", nullable = false)
    private String ruc;

    @Column(name = "position", nullable = false)
    private String position;

    @Column(name = "sector", nullable = false)
    private String sector;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "web_url", nullable = false)
    private String webUrl;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "contact_name", nullable = false)
    private String contactName;

    @Column(name = "city", nullable = false)
    private String city;
}
