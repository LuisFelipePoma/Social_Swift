package com.socialswift.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialswift.api.model.dto.HiringResponseDTO;
import com.socialswift.api.service.HiringService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/hirings")
@AllArgsConstructor
public class HiringController {
    private final HiringService hiringService;

    @GetMapping
    public ResponseEntity<List<HiringResponseDTO>> getAll() {
        List<HiringResponseDTO> hirings = hiringService.getAll();
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    @GetMapping("/companies/{companyId}/canceled")
    public ResponseEntity<List<HiringResponseDTO>> getAllByCompanyAndStateCanceled(@PathVariable Long companyId) {
        List<HiringResponseDTO> hirings = hiringService.getAllByCompanyAndState(companyId, "canceled");
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    @GetMapping("/companies/{companyId}/OK")
    public ResponseEntity<List<HiringResponseDTO>> getAllByCompanyAndStateOK(@PathVariable Long companyId) {
        List<HiringResponseDTO> hirings = hiringService.getAllByCompanyAndState(companyId, "OK");
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    @GetMapping("/companies/{companyId}/finished")
    public ResponseEntity<List<HiringResponseDTO>> getAllByCompanyAndStateFinished(@PathVariable Long companyId) {
        List<HiringResponseDTO> hirings = hiringService.getAllByCompanyAndState(companyId, "finished");
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    @GetMapping("/people/{personId}")
    public ResponseEntity<List<HiringResponseDTO>> getAllByPerson(@PathVariable Long personId){
        List<HiringResponseDTO> hirings = hiringService.getAllByPerson(personId);
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HiringResponseDTO> getById(@PathVariable Long id) {
        HiringResponseDTO hiring = hiringService.getById(id);
        return new ResponseEntity<>(hiring, HttpStatus.OK);
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<HiringResponseDTO> cancelHiring(@PathVariable Long id){
        HiringResponseDTO hiring = hiringService.cancelHiring(id);
        return new ResponseEntity<>(hiring, HttpStatus.OK);
    }

    @PutMapping("/finish/{id}")
    public ResponseEntity<HiringResponseDTO> finishHiring(@PathVariable Long id){
        HiringResponseDTO hiring = hiringService.finishHiring(id);
        return new ResponseEntity<>(hiring, HttpStatus.OK);
    }
}
