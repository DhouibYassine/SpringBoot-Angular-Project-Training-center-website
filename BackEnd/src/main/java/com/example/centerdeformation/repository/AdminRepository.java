package com.example.centerdeformation.repository;

import com.example.centerdeformation.dto.AdminDto;
import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormateurDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@RepositoryRestResource
public interface AdminRepository extends JpaRepository<AdminDto, Long> {
    Optional<AdminDto> findByEmail(String email);
    Optional<AdminDto> findById(Long id);

}
