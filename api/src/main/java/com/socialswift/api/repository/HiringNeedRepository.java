package com.socialswift.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialswift.api.model.entity.Company;
import com.socialswift.api.model.entity.HiringNeed;

public interface HiringNeedRepository extends JpaRepository<HiringNeed, Long>{
    Optional<HiringNeed> findById(Optional<Long> id);
    List<HiringNeed> findAllByOrderByStartDateAsc();
    List<HiringNeed> findAllByCompanyOrderByStateDescStartDateAsc(Company company);
    List<HiringNeed> findAllByStateOrderByStateDescStartDateAsc(String state);
    // List<HiringNeed> findAllByCompanyAndStateOrderByStartDateAsc(Company company, String state);
}
