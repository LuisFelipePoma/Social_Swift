package com.socialswift.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialswift.api.model.dto.AdmissionProcessCreateRequestDTO;
import com.socialswift.api.model.dto.AdmissionProcessResponseDTO;
import com.socialswift.api.service.AdmissionProcessService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/admissions")
@AllArgsConstructor
public class AdmissionProcessController {
    private final AdmissionProcessService admissionProcessService;

    @GetMapping("/{id}")
    public ResponseEntity<AdmissionProcessResponseDTO> getById(@PathVariable Long id) {
        AdmissionProcessResponseDTO admission = admissionProcessService.getById(id);
        return new ResponseEntity<>(admission, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<AdmissionProcessResponseDTO>> getAll() {
        List<AdmissionProcessResponseDTO> admissions = admissionProcessService.getAll();
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }

    @GetMapping("/needs/{needsId}")
    public ResponseEntity<List<AdmissionProcessResponseDTO>> getAllByHiringNeed(@PathVariable Long needsId) {
        List<AdmissionProcessResponseDTO> admissions = admissionProcessService.getAllByHiringNeed(needsId);
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AdmissionProcessResponseDTO> createAdmission(@Validated @RequestBody AdmissionProcessCreateRequestDTO admissionProcessCreateRequestDTO) {
        AdmissionProcessResponseDTO admission = admissionProcessService.createAdmission(admissionProcessCreateRequestDTO);
        return new ResponseEntity<>(admission, HttpStatus.CREATED);
    }

    @GetMapping("/people/{personId}")
    public ResponseEntity<List<AdmissionProcessResponseDTO>> getAllByPerson(@PathVariable Long personId) {
        List<AdmissionProcessResponseDTO> admissions = admissionProcessService.getAllByPerson(personId);
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }


}
