package com.socialswift.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialswift.api.model.entity.Company;
import com.socialswift.api.model.entity.Hiring;
import com.socialswift.api.model.entity.Person;

public interface HiringRepository extends JpaRepository<Hiring, Long>{
    Optional<Hiring> findById(Optional<Long> id);
    List<Hiring> findAllByCompanyAndStateOrderByStartDateAsc(Company company, String state);
    List<Hiring> findAllByPersonOrderByStartDateAsc(Person person);
}
