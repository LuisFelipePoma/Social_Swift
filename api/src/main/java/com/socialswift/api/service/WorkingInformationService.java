package com.socialswift.api.service;

import org.springframework.stereotype.Service;

import com.socialswift.api.exception.ResourceNotFoundException;
import com.socialswift.api.mapper.WorkingInformationMapper;
import com.socialswift.api.model.dto.WorkingInformationCreateRequestDTO;
import com.socialswift.api.model.dto.WorkingInformationResponseDTO;
import com.socialswift.api.model.dto.WorkingInformationUpdateRequestDTO;
import com.socialswift.api.model.entity.Person;
import com.socialswift.api.model.entity.WorkingInformation;
import com.socialswift.api.repository.PersonRepository;
import com.socialswift.api.repository.WorkingInformationRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WorkingInformationService {
    private final WorkingInformationMapper workingInformationMapper;

    private final WorkingInformationRepository workingInformationRepository;

    private final PersonRepository personRepository;

    public WorkingInformationResponseDTO getByPerson(Long id) {
        Person person = personRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Person not found"));

        WorkingInformation workingInformation = workingInformationRepository.findByPerson(person)
                    .orElseThrow(() -> new ResourceNotFoundException("Working information not found"));

        return workingInformationMapper.convertWorkingInformationToDTO(workingInformation);
    }

    public WorkingInformationResponseDTO getById(Long id) {
        WorkingInformation workingInformation = workingInformationRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Working information not found"));

        return workingInformationMapper.convertWorkingInformationToDTO(workingInformation);
    }

    public WorkingInformationResponseDTO createWorkingInformation(WorkingInformationCreateRequestDTO workingInformationCreateRequestDTO) {
        Person person = personRepository.findById(workingInformationCreateRequestDTO.getPerson())
                    .orElseThrow(() -> new ResourceNotFoundException("Person not found"));

        if (workingInformationRepository.findByPerson(person).isPresent())
            throw new ResourceNotFoundException("Working information related to the person already exists");

        WorkingInformation workingInformation = workingInformationMapper.convertCreateRequestToEntity(workingInformationCreateRequestDTO);

        workingInformation.setPerson(person);
        workingInformation = workingInformationRepository.save(workingInformation);

        return workingInformationMapper.convertWorkingInformationToDTO(workingInformation);
    }

    public WorkingInformationResponseDTO updateWorkingInformation(WorkingInformationUpdateRequestDTO workingInformationUpdateRequestDTO) {
        Person person = personRepository.findById(workingInformationUpdateRequestDTO.getPerson())
                    .orElseThrow(() -> new ResourceNotFoundException("Person not found"));

        WorkingInformation workingInformation = workingInformationRepository.findByPerson(person)
                    .orElseThrow(() -> new ResourceNotFoundException("Working information not found"));

        workingInformation.setPosition(workingInformationUpdateRequestDTO.getPosition());
        workingInformation.setEducationLevel(workingInformationUpdateRequestDTO.getEducationLevel());
        workingInformation.setCertification(workingInformationUpdateRequestDTO.getCertification());
        workingInformation.setExperience(workingInformationUpdateRequestDTO.getExperience());
        workingInformation.setContactPhoneReference(workingInformationUpdateRequestDTO.getContactPhoneReference());
        workingInformation.setContactInformation(workingInformationUpdateRequestDTO.getContactInformation());
        workingInformation.setCvUrl(workingInformationUpdateRequestDTO.getCvUrl());
        workingInformation = workingInformationRepository.save(workingInformation);

        return workingInformationMapper.convertWorkingInformationToDTO(workingInformation);
    }
}
