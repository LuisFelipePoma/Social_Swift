package com.socialswift.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialswift.api.model.entity.Company;


public interface CompanyRepository extends JpaRepository<Company, Long>{
    Optional<Company> findById(Optional<Long> id);
    Optional<Company> findByBusinessName(String businessName);
    Optional<Company> findByRuc(String ruc);
}
