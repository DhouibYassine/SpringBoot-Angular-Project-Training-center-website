package com.example.centerdeformation.repository;

import com.example.centerdeformation.dto.AdminDto;
import com.example.centerdeformation.dto.SeanceDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface SeanceRepository extends JpaRepository<SeanceDto, Long> {

    Optional<SeanceDto> findById(Long id);
}
