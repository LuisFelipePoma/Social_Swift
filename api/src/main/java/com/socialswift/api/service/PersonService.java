package com.socialswift.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.socialswift.api.exception.ResourceNotFoundException;
import com.socialswift.api.mapper.PersonMapper;
import com.socialswift.api.mapper.WorkingInformationMapper;
import com.socialswift.api.model.dto.PersonResponseDTO;
import com.socialswift.api.model.dto.WorkingInformationResponseDTO;
import com.socialswift.api.model.entity.Person;
import com.socialswift.api.model.entity.WorkingInformation;
import com.socialswift.api.repository.PersonRepository;
import com.socialswift.api.repository.WorkingInformationRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PersonService {
    // Instace of mappers
    private final PersonMapper personMapper;
    private final WorkingInformationMapper workingInformationMapper;

    // Instance of repositories
    private final PersonRepository personRepository;
    private final WorkingInformationRepository workingInformationRepository;

    public List<PersonResponseDTO> getAllStudents() {
        List<Person> people = personRepository.findAll();
        
        List<PersonResponseDTO> peopleResponseDTOList = 
            people.stream()
                    .map(person -> getInformationByPerson(person))
                    .toList();
        return peopleResponseDTOList;
    }

    public PersonResponseDTO getInformationByPerson (Person person) {
        WorkingInformation information = workingInformationRepository.findByPerson(person)
                    .orElseThrow(() -> new ResourceNotFoundException("Information not found"));
        
        WorkingInformationResponseDTO informationResponseDTO = workingInformationMapper.convertWorkingInformationToDTO(information);
        PersonResponseDTO personResponseDTO = personMapper.convertPersonToResponseDTO(person);

        personResponseDTO.setWorkingInformation(informationResponseDTO);
        return personResponseDTO;
    }

    public PersonResponseDTO getById(Long id) {
        Person person = personRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Person not found"));
        
        return personMapper.convertPersonToResponseDTO(person);
    }
}
