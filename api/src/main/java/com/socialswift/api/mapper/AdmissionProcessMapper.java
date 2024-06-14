package com.socialswift.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.socialswift.api.model.dto.AdmissionProcessAdmitResponseDTO;
import com.socialswift.api.model.dto.AdmissionProcessCreateRequestDTO;
import com.socialswift.api.model.dto.AdmissionProcessResponseDTO;
import com.socialswift.api.model.entity.AdmissionProcess;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class AdmissionProcessMapper {
    private final ModelMapper modelMapper;

    public AdmissionProcess convertCreateRequestToEntity(AdmissionProcessCreateRequestDTO admissionProcessCreateRequestDTO){
        return modelMapper.map(admissionProcessCreateRequestDTO, AdmissionProcess.class);
    }

    public AdmissionProcessResponseDTO convertEntityToResponseDTO(AdmissionProcess admissionProcess) {
        return modelMapper.map(admissionProcess, AdmissionProcessResponseDTO.class);
    }

    public AdmissionProcessAdmitResponseDTO convertEntityToAdmitResponseDTO(AdmissionProcess admissionProcess) {
        return modelMapper.map(admissionProcess, AdmissionProcessAdmitResponseDTO.class);
    }

    public List<AdmissionProcessResponseDTO> convertToListDTO(List<AdmissionProcess> admissions) {
        return admissions.stream()
                .map(this::convertEntityToResponseDTO)
                .toList();
    }
}
