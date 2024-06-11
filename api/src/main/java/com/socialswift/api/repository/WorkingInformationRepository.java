package com.socialswift.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialswift.api.model.entity.Person;
import com.socialswift.api.model.entity.WorkingInformation;

public interface WorkingInformationRepository extends JpaRepository<WorkingInformation, Long> {
    Optional<WorkingInformation> findById(Optional<Long> id);
    Optional<WorkingInformation> findByPerson(Person person);
    
}
