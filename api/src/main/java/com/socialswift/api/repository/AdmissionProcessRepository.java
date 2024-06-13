package com.socialswift.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialswift.api.model.entity.AdmissionProcess;
import com.socialswift.api.model.entity.HiringNeed;
import com.socialswift.api.model.entity.Person;

public interface AdmissionProcessRepository extends JpaRepository<AdmissionProcess, Long>{
    Optional<AdmissionProcess> findById(Optional<Long> id);
    List<AdmissionProcess> findAllByOrderByStateAscApplicationDateAsc();
    List<AdmissionProcess> findAllByHiringNeedOrderByStateAscApplicationDateAsc(HiringNeed hiringNeed);
    Optional<AdmissionProcess> findByHiringNeedAndPerson(HiringNeed hiringNeed, Person person);
    List<AdmissionProcess> findAllByPersonOrderByApplicationDate(Person person);
}
