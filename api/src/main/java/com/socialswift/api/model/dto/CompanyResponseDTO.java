package com.socialswift.api.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyResponseDTO {
    private Long id;
    private String name;
    private String businessName;
    private String ruc;
    private String sector;
    private String address;
    private String phoneNumber;
    private String email;
    private String webUrl;
    private String description;
    private String contactName;
    private String city;
}
