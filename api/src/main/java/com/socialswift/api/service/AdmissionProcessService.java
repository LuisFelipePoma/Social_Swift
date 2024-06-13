package com.socialswift.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.socialswift.api.exception.ResourceDuplicateException;
import com.socialswift.api.exception.ResourceNotFoundException;
import com.socialswift.api.mapper.AdmissionProcessMapper;
import com.socialswift.api.model.dto.AdmissionProcessCreateRequestDTO;
import com.socialswift.api.model.dto.AdmissionProcessResponseDTO;
import com.socialswift.api.model.entity.AdmissionProcess;
import com.socialswift.api.model.entity.HiringNeed;
import com.socialswift.api.model.entity.Person;
import com.socialswift.api.repository.AdmissionProcessRepository;
import com.socialswift.api.repository.HiringNeedRepository;
import com.socialswift.api.repository.PersonRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdmissionProcessService {
	private final AdmissionProcessMapper admissionProcessMapper;

	private final AdmissionProcessRepository admissionProcessRepository;
	private final PersonRepository personRepository;
	private final HiringNeedRepository hiringNeedRepository;

	public AdmissionProcessResponseDTO getById(Long id) {
		AdmissionProcess admission = admissionProcessRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Admission process not found"));

		return admissionProcessMapper.convertEntityToResponseDTO(admission);
	}

	public List<AdmissionProcessResponseDTO> getAll() {
		List<AdmissionProcess> admissions = admissionProcessRepository.findAllByOrderByStateAscApplicationDateAsc();

		return admissionProcessMapper.convertToListDTO(admissions);
	}

	public List<AdmissionProcessResponseDTO> getAllByHiringNeed(Long id) {
		HiringNeed hiringNeed = hiringNeedRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hiring need not found"));
		List<AdmissionProcess> admissions = admissionProcessRepository
				.findAllByHiringNeedOrderByStateAscApplicationDateAsc(hiringNeed);

		return admissionProcessMapper.convertToListDTO(admissions);
	}

	public AdmissionProcessResponseDTO createAdmission(
			AdmissionProcessCreateRequestDTO admissionProcessCreateRequestDTO) {
		AdmissionProcess admissionProcess = admissionProcessMapper
				.convertCreateRequestToEntity(admissionProcessCreateRequestDTO);

		Person person = personRepository.findById(admissionProcessCreateRequestDTO.getPersonId())
				.orElseThrow(() -> new ResourceNotFoundException("Person not found"));

		HiringNeed hiringNeed = hiringNeedRepository.findById(admissionProcessCreateRequestDTO.getHiringNeedId())
				.orElseThrow(() -> new ResourceNotFoundException("Hiring Need not found"));

		if (admissionProcessRepository.findByHiringNeedAndPerson(hiringNeed, person).isPresent())
			throw new ResourceDuplicateException("Admission Process related to this user already exists");

		// admissionProcess.setId(null);
		admissionProcess.setPerson(person);
		admissionProcess.setHiringNeed(hiringNeed);
		admissionProcess.setState("Pending");
		admissionProcess = admissionProcessRepository.save(admissionProcess);

		return admissionProcessMapper.convertEntityToResponseDTO(admissionProcess);
	}

	public List<AdmissionProcessResponseDTO> getAllByPerson(Long id) {
		Person person = personRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Person not found"));

		List<AdmissionProcess> admissions = admissionProcessRepository.findAllByPersonOrderByApplicationDate(person);

		return admissionProcessMapper.convertToListDTO(admissions);
	}

	public AdmissionProcessResponseDTO admitAdmissionProcess(Long id) {
		AdmissionProcess admission = admissionProcessRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Admission Process not found"));

		admission.setState("Admitted");
		admission = admissionProcessRepository.save(admission);
		// Implement the addition to hirings

		return admissionProcessMapper.convertEntityToResponseDTO(admission);
	}

	public AdmissionProcessResponseDTO rejectAdmissionProcess(Long id) {
		AdmissionProcess admission = admissionProcessRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Admission Process not found"));

		admission.setState("Rejected");
		admission = admissionProcessRepository.save(admission);

		return admissionProcessMapper.convertEntityToResponseDTO(admission);
	}
}
