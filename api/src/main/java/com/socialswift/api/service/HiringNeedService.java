package com.socialswift.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.socialswift.api.exception.ResourceNotFoundException;
import com.socialswift.api.mapper.CompanyMapper;
import com.socialswift.api.mapper.HiringNeedMapper;
import com.socialswift.api.model.dto.CompanyResponseDTO;
import com.socialswift.api.model.dto.HiringNeedCreateRequestDTO;
import com.socialswift.api.model.dto.HiringNeedResponseDTO;
import com.socialswift.api.model.entity.Company;
import com.socialswift.api.model.entity.HiringNeed;
import com.socialswift.api.repository.CompanyRepository;
import com.socialswift.api.repository.HiringNeedRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HiringNeedService {
    private final HiringNeedMapper hiringNeedMapper;
    private final CompanyMapper companyMapper;

    private final HiringNeedRepository hiringNeedRepository;
    private final CompanyRepository companyRepository;

    public HiringNeedResponseDTO getById(Long id) {
        HiringNeed hiringNeed = hiringNeedRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Hiring need not found"));
        
        return hiringNeedMapper.convertEntityToResponseDTO(hiringNeed);
    }

    public List<HiringNeedResponseDTO> getAllNeeds() {
        List<HiringNeed> needs = hiringNeedRepository.findAllByOrderByStartDateAsc();
        return hiringNeedMapper.convertToListDTO(needs);
    }

    @Transactional
    public HiringNeedResponseDTO createHiringNeed(HiringNeedCreateRequestDTO hiringNeedCreateRequestDTO) {
        Company company = companyRepository.findById(hiringNeedCreateRequestDTO.getCompanyId())
                    .orElseThrow(() -> new ResourceNotFoundException("Company not found"));

        if(hiringNeedCreateRequestDTO.getCertification() == null){
            hiringNeedCreateRequestDTO.setCertification(false);
        }
        if(hiringNeedCreateRequestDTO.getExperience() == null){
            hiringNeedCreateRequestDTO.setExperience(false);
        }
        HiringNeed hiringNeed = new HiringNeed();
        hiringNeed.setPosition(hiringNeedCreateRequestDTO.getPosition());
        hiringNeed.setDescription(hiringNeedCreateRequestDTO.getDescription());
        hiringNeed.setStartDate(hiringNeedCreateRequestDTO.getStartDate());
        hiringNeed.setEndDate(hiringNeedCreateRequestDTO.getEndDate());
        hiringNeed.setAmountPeople(hiringNeedCreateRequestDTO.getAmountPeople());
        hiringNeed.setCertification(hiringNeedCreateRequestDTO.getCertification());
        hiringNeed.setExperience(hiringNeedCreateRequestDTO.getExperience());
        hiringNeed.setEducationLevel(hiringNeedCreateRequestDTO.getEducationLevel());
        hiringNeed.setContractType(hiringNeedCreateRequestDTO.getContractType());
        hiringNeed.setState("Ongoing");
        hiringNeed.setCompany(company);

        hiringNeed = hiringNeedRepository.save(hiringNeed);

        CompanyResponseDTO companyDTO = companyMapper.convertCompanyToResponse(company);
        HiringNeedResponseDTO hiringNeedResponseDTO = hiringNeedMapper.convertEntityToResponseDTO(hiringNeed);
        hiringNeedResponseDTO.setCompany(companyDTO);

        return hiringNeedResponseDTO;
    }

    public HiringNeedResponseDTO closeHiringNeed(Long id) {
        HiringNeed hiringNeed = hiringNeedRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Hiring need not found"));

        hiringNeed.setState("Closed");
        hiringNeed = hiringNeedRepository.save(hiringNeed);
        return hiringNeedMapper.convertEntityToResponseDTO(hiringNeed);
    }

    public List<HiringNeedResponseDTO> getAllByCompany(Long companyId) {
        Company company = companyRepository.findById(companyId)
                    .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
        List<HiringNeed> needs = hiringNeedRepository.findAllByCompanyOrderByStateDescStartDateAsc(company);

        return hiringNeedMapper.convertToListDTO(needs);
    }

    // public List<HiringNeedResponseDTO> getAllByCompanyAndState(Long companyId, String state) {
    //     Company company = companyRepository.findById(companyId)
    //                 .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
    //     List<HiringNeed> needs = hiringNeedRepository.findAllByCompanyAndStateOrderByStartDateAsc(company, state);

    //     return hiringNeedMapper.convertToListDTO(needs);
    // }

    public List<HiringNeedResponseDTO> getAllByState(String state) {
        List<HiringNeed> needs = hiringNeedRepository.findAllByStateOrderByStateDescStartDateAsc(state);

        return hiringNeedMapper.convertToListDTO(needs);
    }
}
