package com.example.centerdeformation.controller;

import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.ModulesDto;
import com.example.centerdeformation.model.Modules;
import com.example.centerdeformation.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin()
@RestController
@RequestMapping("/api/Module")
public class ModuleController {

    @Autowired
    private ModuleService moduleService;

    @GetMapping("/Get")
    public List<ModulesDto> getAllModule(){
        return moduleService.getAllModule();
    }

    @PostMapping("/Post")
    public ResponseEntity<ModulesDto> saveModule(@RequestBody ModulesDto ModulesDto){
        ModulesDto savedModule = moduleService.saveModule(ModulesDto);
        return new ResponseEntity<>(savedModule, HttpStatus.CREATED);
    }
    @DeleteMapping("/Delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        moduleService.deleteModule(id);
    }

    @PutMapping("/Edit/{id}")
    public void editModule(@PathVariable Long id, @RequestBody ModulesDto moduleDTO) {
        moduleService.editModule(id, moduleDTO);
    }


    @GetMapping("/{idEtudiant}/GetById")
    public Optional<ModulesDto> getModuleById(@PathVariable long idEtudiant){
        return moduleService.getModuleById(idEtudiant);
    }
}
