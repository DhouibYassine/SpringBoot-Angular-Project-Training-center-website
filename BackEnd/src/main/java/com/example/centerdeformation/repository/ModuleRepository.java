package com.example.centerdeformation.repository;

import com.example.centerdeformation.dto.ModulesDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.Optional;

@RepositoryRestResource
public interface ModuleRepository  extends JpaRepository<ModulesDto, Long> {
    Optional<ModulesDto> findById(Long id);

}
