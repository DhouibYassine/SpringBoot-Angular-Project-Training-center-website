package com.example.centerdeformation.service;

import com.example.centerdeformation.dto.ModulesDto;
import com.example.centerdeformation.model.Modules;
import com.example.centerdeformation.repository.ModuleRepository;
import com.example.centerdeformation.tools.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;

    public List<ModulesDto> getAllModule(){
        return moduleRepository.findAll();
    }

    public ModulesDto saveModule(ModulesDto ModulesDto){
        return moduleRepository.save(ModulesDto);
    }

    public Optional<ModulesDto> getModuleById(Long id) { return moduleRepository.findById(id);}

    public void deleteModule(Long id) {moduleRepository.deleteById(id);}

    public void editModule(Long id,ModulesDto moduleDTO) {
        // Retrieve the existing module from the database based on the provided ID
        ModulesDto module = moduleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));

        // Update the module properties with the data from the moduleDTO
        module.setNomModule(moduleDTO.getNomModule());
        module.setHoraire(moduleDTO.getHoraire());
        module.setSeanceDto(moduleDTO.getSeanceDto());
        module.setNombreDeSeance(moduleDTO.getNombreDeSeance());
        //module.setFormateur(moduleDTO.getFormateur());
       // module.setDescription(moduleDTO.getDescription());

        // Save the updated module back to the database
        moduleRepository.save(module);
    }

}
