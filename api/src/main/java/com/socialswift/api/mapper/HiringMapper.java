package com.socialswift.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.socialswift.api.model.dto.HiringCreateRequestDTO;
import com.socialswift.api.model.dto.HiringResponseDTO;
import com.socialswift.api.model.entity.Hiring;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class HiringMapper {
    private final ModelMapper modelMapper;

    public Hiring convertCreateRequestToEntity(HiringCreateRequestDTO hiringCreateRequestDTO) {
        return modelMapper.map(hiringCreateRequestDTO, Hiring.class);
    }

    public HiringResponseDTO convertHiringToResponseDTO(Hiring hiring) {
        return modelMapper.map(hiring, HiringResponseDTO.class);
    }

    public List<HiringResponseDTO> convertToListDTO(List<Hiring> hirings) {
        return hirings.stream()
            .map(this::convertHiringToResponseDTO)
            .toList();
    }
}
