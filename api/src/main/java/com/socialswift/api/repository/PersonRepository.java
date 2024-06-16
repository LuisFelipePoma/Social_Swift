package com.socialswift.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialswift.api.model.entity.Person;


public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findById(Optional<Long> id);
    Optional<Person> findByDni(String dni);
    Optional<Person> findByPhoneNumber(String phoneNumber);
    List<Person> findAllByBlackList(Boolean blacklist);
}
