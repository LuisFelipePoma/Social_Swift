package com.socialswift.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.socialswift.api.model.dto.PersonResponseDTO;
import com.socialswift.api.model.entity.Person;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class PersonMapper {
    
    private final ModelMapper modelMapper;

    public PersonResponseDTO convertPersonToResponseDTO (Person person) {
        return modelMapper.map(person, PersonResponseDTO.class);
    }

    public List<PersonResponseDTO> convertToListResponseDTO (List<Person> people) {
        return people.stream()
            .map(this::convertPersonToResponseDTO)
            .toList();
    }
}
