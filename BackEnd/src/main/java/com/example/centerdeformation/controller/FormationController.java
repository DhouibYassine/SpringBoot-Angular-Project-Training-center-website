package com.example.centerdeformation.controller;

import com.example.centerdeformation.dto.FormationDto;
import com.example.centerdeformation.dto.ModulesDto;
import com.example.centerdeformation.model.Formation;
import com.example.centerdeformation.model.Modules;
import com.example.centerdeformation.service.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin()
@RestController
@RequestMapping("/api/Formation")
public class FormationController {

    @Autowired
    private FormationService formationService;

    @GetMapping("/Get")
    public List<FormationDto> getAllFormation(){
        return formationService.getAllFormation();
    }

    @GetMapping("/GetNew")
    public ResponseEntity<List<FormationDto>> getAllFormations() {
        List<FormationDto> formations = formationService.getAllFormation();
        List<FormationDto> dtos = formations.stream()
                .map(FormationDto::toDto)
                .collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }


    @GetMapping("/{idFormation}/GetById")
    public Optional<FormationDto> getEtudiantById(@PathVariable long idFormation){
        return formationService.getFormationById(idFormation);
    }

    @PostMapping("/Post")
    public ResponseEntity<FormationDto> saveFormation(@RequestBody FormationDto FormationDto){
        FormationDto savedFormation = formationService.saveFormation(FormationDto);
        return new ResponseEntity<>(savedFormation, HttpStatus.CREATED);
    }

    @DeleteMapping("/Delete/{id}")
    public void deleteFormation(@PathVariable Long id) {
        formationService.deleteFormation(id);
    }

    @PutMapping("/Edit/{id}")
    public void editUser(@PathVariable Long id, @RequestBody FormationDto formationDto) {
        formationService.editFormation(id, formationDto);
    }


    @PutMapping("/AjouterModuleàFormation/{id}")
    public void AjouterModuleàFormation(@PathVariable Long id, @RequestBody FormationDto formationDto) {
        formationService.AjouterModuleàFormation(id, formationDto);
    }

    @PutMapping("/AjouterEtudiantàFormation/{id}")
    public void AjouterEtudiantàFormation(@PathVariable Long id, @RequestBody FormationDto formationDto) {
        formationService.AjouterEtudiantàFormation(id, formationDto);
    }
    @PostMapping("/upload")
    public String uploadImage(@RequestParam("imageFile") MultipartFile imageFile)  {
        String returnValue = "start";
        try {
            formationService.saveImage(imageFile);
            return returnValue;
        } catch (Exception e) {
            e.printStackTrace();
            returnValue = "error";
        }
        return returnValue;
    }



}
