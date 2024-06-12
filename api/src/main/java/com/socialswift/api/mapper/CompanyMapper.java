package com.socialswift.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.socialswift.api.model.dto.CompanyCreateRequestDTO;
import com.socialswift.api.model.dto.CompanyResponseDTO;
import com.socialswift.api.model.entity.Company;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class CompanyMapper {
    private final ModelMapper modelMapper;

    public Company convertCreateRequestToEntity(CompanyCreateRequestDTO companyCreateRequestDTO) {
        return modelMapper.map(companyCreateRequestDTO, Company.class);
    }

    public CompanyResponseDTO convertCompanyToResponse(Company company){
        return modelMapper.map(company, CompanyResponseDTO.class);
    }

    public List<CompanyResponseDTO> convertToListDTO(List<Company> companies){
        return companies.stream()
                .map(this::convertCompanyToResponse)
                .toList();
    }
}
