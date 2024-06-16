package com.socialswift.api.model.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonCreateResponseDTO {
    private Long id;
    private String dni;
    private String name;
    private String lastname;
    private LocalDate birthDate;
    private String address;
    private String phoneNumber;
    private String email;
    private byte[] picture;
    private Boolean blackList;
}
