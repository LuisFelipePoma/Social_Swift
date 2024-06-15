package com.socialswift.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialswift.api.model.dto.WorkingInformationCreateRequestDTO;
import com.socialswift.api.model.dto.WorkingInformationResponseDTO;
import com.socialswift.api.model.dto.WorkingInformationUpdateRequestDTO;
import com.socialswift.api.service.WorkingInformationService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/informations")
@AllArgsConstructor
public class WorkingInformationController {
    private final WorkingInformationService workingInformationService;

    @GetMapping("/people/{personId}")
    public ResponseEntity<WorkingInformationResponseDTO> getByPerson(@PathVariable Long personId) {
        WorkingInformationResponseDTO information = workingInformationService.getByPerson(personId);
        return new ResponseEntity<>(information, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkingInformationResponseDTO> getById(@PathVariable Long id) {
        WorkingInformationResponseDTO information = workingInformationService.getById(id);
        return new ResponseEntity<>(information, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<WorkingInformationResponseDTO> createWorkingInformation(@Validated @RequestBody WorkingInformationCreateRequestDTO workingInformationCreateRequestDTO) {
        WorkingInformationResponseDTO information = workingInformationService.createWorkingInformation(workingInformationCreateRequestDTO);
        return new ResponseEntity<>(information, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<WorkingInformationResponseDTO> updateWorkingInformation(@Validated @RequestBody WorkingInformationUpdateRequestDTO workingInformationUpdateRequestDTO) {
        WorkingInformationResponseDTO information = workingInformationService.updateWorkingInformation(workingInformationUpdateRequestDTO);
        return new ResponseEntity<>(information, HttpStatus.OK);
    }
}
