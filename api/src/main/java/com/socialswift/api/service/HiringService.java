package com.socialswift.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.socialswift.api.exception.ResourceNotFoundException;
import com.socialswift.api.mapper.HiringMapper;
import com.socialswift.api.model.dto.HiringCreateRequestDTO;
import com.socialswift.api.model.dto.HiringResponseDTO;
import com.socialswift.api.model.entity.Company;
import com.socialswift.api.model.entity.Hiring;
import com.socialswift.api.model.entity.Person;
import com.socialswift.api.repository.CompanyRepository;
import com.socialswift.api.repository.HiringRepository;
import com.socialswift.api.repository.PersonRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HiringService {
    private final HiringMapper hiringMapper;

    private final HiringRepository hiringRepository;
    private final CompanyRepository companyRepository;
    private final PersonRepository personRepository;

    public List<HiringResponseDTO> getAll() {
        List<Hiring> hirings = hiringRepository.findAll();

        return hiringMapper.convertToListDTO(hirings);
    }

    public List<HiringResponseDTO> getAllByCompanyAndState(Long id, String state) {
        Company company = companyRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
        List<Hiring> hirings = hiringRepository.findAllByCompanyAndStateOrderByStartDateAsc(company, state);
        return hiringMapper.convertToListDTO(hirings);
    }

    public List<HiringResponseDTO> getAllByPerson(Long id) {
        Person person = personRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException());

        List<Hiring> hirings = hiringRepository.findAllByPersonOrderByStartDateAsc(person);
        return hiringMapper.convertToListDTO(hirings);
    }

    public HiringResponseDTO getById(Long id) {
        Hiring hiring = hiringRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Hiring not found"));
        
        return hiringMapper.convertHiringToResponseDTO(hiring);
    }

    public HiringResponseDTO createHiring(HiringCreateRequestDTO hiringCreateRequestDTO) {
        Person person = personRepository.findById(hiringCreateRequestDTO.getPerson())
                    .orElseThrow(() -> new ResourceNotFoundException("Person not found"));
        Company company = companyRepository.findById(hiringCreateRequestDTO.getCompany())
                    .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
        Hiring hiring = hiringMapper.convertCreateRequestToEntity(hiringCreateRequestDTO);
        hiring.setState("OK");
        hiring.setCompany(company);
        hiring.setPerson(person);
        hiring = hiringRepository.save(hiring);
        return hiringMapper.convertHiringToResponseDTO(hiring);
    }

    public HiringResponseDTO cancelHiring(Long id) {
        Hiring hiring = hiringRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Hiring not found"));

        hiring.setState("Canceled");
        hiring = hiringRepository.save(hiring);
        return hiringMapper.convertHiringToResponseDTO(hiring);
    }
}
