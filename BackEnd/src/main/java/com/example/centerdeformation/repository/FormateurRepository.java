package com.example.centerdeformation.repository;


import com.example.centerdeformation.dto.FormateurDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface FormateurRepository extends JpaRepository<FormateurDto, Long> {
    Optional<FormateurDto>  findByEmail(String email);

}
