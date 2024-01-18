package com.example.centerdeformation.repository;

import com.example.centerdeformation.dto.EtudiantDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface EtudiantRepository extends JpaRepository<EtudiantDto, Long> {
    Optional<EtudiantDto> findByEmail(String email);
    Optional<EtudiantDto> findById(Long id);

}
