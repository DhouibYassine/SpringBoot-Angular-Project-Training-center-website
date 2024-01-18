package com.example.centerdeformation.controller;
import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormationDto;
import com.example.centerdeformation.repository.FormationRepository;
import com.example.centerdeformation.service.EtudiantService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.centerdeformation.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@CrossOrigin()
@RestController
@RequestMapping("/api/Etudiant")
public class EtudiantController {

    @Autowired
    private final EtudiantRepository etudiantRepository;
    private final FormationRepository formationRepository;
    private final EtudiantService etudiantService;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public EtudiantController(EtudiantRepository etudiantRepository, FormationRepository formationRepository,EtudiantService etudiantService) {
        this.etudiantRepository = etudiantRepository;
        this.formationRepository = formationRepository;
        this.etudiantService = etudiantService;

    }


    @GetMapping("/Get")
    public List<EtudiantDto> getAllEtudiant(){

        return etudiantRepository.findAll();
    }

    @GetMapping("/GetNew")
    public ResponseEntity<List<EtudiantDto>> getAllFormations() {
        List<EtudiantDto> etudiant = etudiantRepository.findAll();
        List<EtudiantDto> dtos = etudiant.stream()
                .map(EtudiantDto::toDto)
                .collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{idEtudiant}/GetById")
    public Optional<EtudiantDto> getEtudiantById(@PathVariable long idEtudiant){
        return etudiantRepository.findById(idEtudiant);
    }

    @GetMapping("/GetFormationDto/{id}")
    public List<FormationDto> getEtudiantFormations(@PathVariable("id") Long etudiantId) {
        Optional<EtudiantDto> etudiantDto = etudiantService.getEtudiantById(etudiantId); // Retrieve the EtudiantDto by ID
        if (etudiantDto != null) {
            return etudiantDto.get().getFormationDtos(); // Return the list of FormationDtos
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Etudiant not found"); // Handle the case when EtudiantDto is not found
        }
    }

   /* @GetMapping("/GetFormationDto")
    public ResponseEntity<List<EtudiantDto>> getFormationDtoByIdEtudiant(){
        List<EtudiantDto> etudiant = etudiantRepository.findAll();
        List<EtudiantDto> dtos = etudiant.stream()
                .map(EtudiantDto::toDto1)
                .collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }*/





    @PostMapping("/Post")
    public EtudiantDto createEtudiant(@RequestBody EtudiantDto etudiant){
        String encodedPassword = passwordEncoder.encode(etudiant.getPassword());
        etudiant.setPassword(encodedPassword);
        return etudiantRepository.save(etudiant);
    }

    @DeleteMapping("/Delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        etudiantService.deleteUser(id);
    }

    @PostMapping("/etudiants/{etudiantId}/{formationsId}")
    public void addFormationToEtudiant(@PathVariable Long etudiantId, @PathVariable Long formationsId) {
        // Retrieve the etudiant from the database using etudiantId
        Optional<EtudiantDto> optionalEtudiant = etudiantRepository.findById(etudiantId);

        Optional<FormationDto> optionalFormationDto = formationRepository.findById(formationsId);

        if (optionalEtudiant.isPresent()) {
            EtudiantDto etudiant = optionalEtudiant.get();

            // Add the formation to the etudiant
            etudiant.getFormationDtos().add(optionalFormationDto.get());

            // Save or update the etudiant object in the database
            etudiantRepository.save(etudiant);
        } else {
            // Handle the case when etudiantId does not exist
            throw new EntityNotFoundException("Etudiant not found with id: " + etudiantId);
        }
    }

    @PutMapping("/Edit/{id}")
    public void editUser(@PathVariable Long id, @RequestBody EtudiantDto etudiantDto) {
        etudiantService.editEtudiant(id, etudiantDto);
    }


    @PostMapping("/upload")
    public String uploadImage(@RequestParam("imageFile") MultipartFile imageFile)  {
        String returnValue = "start";
        try {
            etudiantService.saveImage(imageFile);
            return returnValue;
        } catch (Exception e) {
            e.printStackTrace();
            returnValue = "error";
        }
        return returnValue;
    }


}
