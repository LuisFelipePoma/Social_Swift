package com.socialswift.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialswift.api.model.dto.PersonCreateRequestDTO;
import com.socialswift.api.model.dto.PersonCreateResponseDTO;
import com.socialswift.api.model.dto.PersonResponseDTO;
import com.socialswift.api.model.dto.PersonUpdateRequestDTO;
import com.socialswift.api.service.PersonService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/people")
@AllArgsConstructor
public class PersonController {
    private final PersonService personService;

    @GetMapping
    public ResponseEntity<List<PersonResponseDTO>> getPeople () {
        List<PersonResponseDTO> people = personService.getPeople();
        return new ResponseEntity<>(people, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonResponseDTO> getPersonById (@PathVariable Long id) {
        PersonResponseDTO person = personService.getById(id);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PersonCreateResponseDTO> createPerson (@Validated @RequestBody PersonCreateRequestDTO personCreateRequestDTO) {
        PersonCreateResponseDTO person = personService.createPerson(personCreateRequestDTO);
        return new ResponseEntity<>(person, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PersonCreateResponseDTO> updatePerson (@PathVariable Long id, @Validated @RequestBody PersonUpdateRequestDTO personUpdateRequestDTO) {
        PersonCreateResponseDTO person = personService.updatePerson(id, personUpdateRequestDTO);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
        personService.deletePerson(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
