package com.socialswift.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.socialswift.api.model.dto.HiringNeedCreateRequestDTO;
import com.socialswift.api.model.dto.HiringNeedResponseDTO;
import com.socialswift.api.model.entity.HiringNeed;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class HiringNeedMapper {
    private final ModelMapper modelMapper;

    public HiringNeed convertCreateRequestToEntity(HiringNeedCreateRequestDTO hiringNeedCreateRequestDTO) {
        return modelMapper.map(hiringNeedCreateRequestDTO, HiringNeed.class);
    }

    public HiringNeedResponseDTO convertEntityToResponseDTO(HiringNeed hiringNeed) {
        return modelMapper.map(hiringNeed, HiringNeedResponseDTO.class);
    }

    public List<HiringNeedResponseDTO> convertToListDTO (List<HiringNeed> hiringNeeds) {
        return hiringNeeds.stream()
            .map(this::convertEntityToResponseDTO)
            .toList();
    }
}
