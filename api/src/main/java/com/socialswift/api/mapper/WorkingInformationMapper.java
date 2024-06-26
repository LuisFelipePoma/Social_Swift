package com.socialswift.api.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.socialswift.api.model.dto.WorkingInformationCreateRequestDTO;
import com.socialswift.api.model.dto.WorkingInformationResponseDTO;
import com.socialswift.api.model.entity.WorkingInformation;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class WorkingInformationMapper {
    private final ModelMapper modelMapper;
    
    public WorkingInformation convertCreateRequestToEntity(WorkingInformationCreateRequestDTO workingInformationCreateRequestDTO) {
        return modelMapper.map(workingInformationCreateRequestDTO, WorkingInformation.class);
    }

    public WorkingInformationResponseDTO convertWorkingInformationToDTO(
            WorkingInformation workingInformation
        ) {
            return modelMapper.map(
                workingInformation, 
                WorkingInformationResponseDTO.class);
    }
}
