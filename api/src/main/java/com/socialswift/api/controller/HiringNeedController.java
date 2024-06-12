package com.socialswift.api.controller;

import java.util.List;

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

import com.socialswift.api.model.dto.HiringNeedCreateRequestDTO;
import com.socialswift.api.model.dto.HiringNeedResponseDTO;
import com.socialswift.api.service.HiringNeedService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/needs")
@AllArgsConstructor
public class HiringNeedController {
    private final HiringNeedService hiringNeedService;

    @GetMapping("/{id}")
    public ResponseEntity<HiringNeedResponseDTO> getById(@PathVariable Long id) {
        HiringNeedResponseDTO hiringNeed = hiringNeedService.getById(id);
        return new ResponseEntity<>(hiringNeed, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<HiringNeedResponseDTO>> getAllNeeds() {
        List<HiringNeedResponseDTO> needs = hiringNeedService.getAllNeeds();
        return new ResponseEntity<>(needs, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<HiringNeedResponseDTO> createHiringNeed(@Validated @RequestBody HiringNeedCreateRequestDTO hiringNeedCreateRequestDTO) {
        HiringNeedResponseDTO hiringNeed = hiringNeedService.createHiringNeed(hiringNeedCreateRequestDTO);
        return new ResponseEntity<>(hiringNeed, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HiringNeedResponseDTO> closeHiringNeed(@PathVariable Long id) {
        HiringNeedResponseDTO hiringNeed = hiringNeedService.closeHiringNeed(id);
        return new ResponseEntity<>(hiringNeed, HttpStatus.OK);
    }

    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<HiringNeedResponseDTO>> getAllByCompany(@PathVariable Long companyId) {
        List<HiringNeedResponseDTO> needs = hiringNeedService.getAllByCompany(companyId);
        return new ResponseEntity<>(needs, HttpStatus.OK);
    }

    // @GetMapping("/company/{companyId}/state/{state}")
    // public ResponseEntity<List<HiringNeedResponseDTO>> getAllByCompanyAndState(@PathVariable Long companyId, @PathVariable String state) {
    //     List<HiringNeedResponseDTO> needs = hiringNeedService.getAllByCompanyAndState(companyId, state);
    //     return new ResponseEntity<>(needs, HttpStatus.OK);
    // }

    @GetMapping("/state/{state}")
    public ResponseEntity<List<HiringNeedResponseDTO>> getAllByState(@PathVariable String state) {
        List<HiringNeedResponseDTO> needs = hiringNeedService.getAllByState(state);
        return new ResponseEntity<>(needs, HttpStatus.OK);
    }
}
