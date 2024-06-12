package com.socialswift.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialswift.api.model.dto.CompanyCreateRequestDTO;
import com.socialswift.api.model.dto.CompanyResponseDTO;
import com.socialswift.api.service.CompanyService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/companies")
@AllArgsConstructor
public class CompanyController {
    private final CompanyService companyService;

    @GetMapping
    public ResponseEntity<List<CompanyResponseDTO>> getCompanies() {
        List<CompanyResponseDTO> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompanyResponseDTO> getCompanyById(@PathVariable Long id) {
        CompanyResponseDTO company = companyService.getById(id);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CompanyResponseDTO> createCompany(@Validated @RequestBody CompanyCreateRequestDTO companyCreateRequestDTO) {
        CompanyResponseDTO company = companyService.createCompany(companyCreateRequestDTO);
        return new ResponseEntity<>(company, HttpStatus.CREATED);
    }
    
}
