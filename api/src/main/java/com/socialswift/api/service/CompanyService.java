package com.socialswift.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.socialswift.api.exception.ResourceDuplicateException;
import com.socialswift.api.exception.ResourceNotFoundException;
import com.socialswift.api.mapper.CompanyMapper;
import com.socialswift.api.model.dto.CompanyCreateRequestDTO;
import com.socialswift.api.model.dto.CompanyResponseDTO;
import com.socialswift.api.model.entity.Company;
import com.socialswift.api.repository.CompanyRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CompanyService {
    private final CompanyMapper companyMapper;

    private final CompanyRepository companyRepository;

    public List<CompanyResponseDTO> getAllCompanies() {
        List<Company> companies = companyRepository.findAll();
        return companyMapper.convertToListDTO(companies);
    }

    public CompanyResponseDTO getById(Long id) {
        Company company = companyRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Company not found"));

        return companyMapper.convertCompanyToResponse(company);
    }

    public CompanyResponseDTO createCompany(CompanyCreateRequestDTO companyCreateRequestDTO) {
        if(companyRepository.findByBusinessName(companyCreateRequestDTO.getBusinessName()).isPresent())
            throw new ResourceDuplicateException("Business name already registered");

        if(companyRepository.findByRuc(companyCreateRequestDTO.getRuc()).isPresent())
            throw new ResourceDuplicateException("RUC already registered");

        Company company = companyMapper.convertCreateRequestToEntity(companyCreateRequestDTO);

        company = companyRepository.save(company);

        return companyMapper.convertCompanyToResponse(company);
    }
}
