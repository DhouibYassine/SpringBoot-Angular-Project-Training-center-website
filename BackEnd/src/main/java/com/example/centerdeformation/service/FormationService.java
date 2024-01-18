package com.example.centerdeformation.service;

import com.example.centerdeformation.dto.FormationDto;
import com.example.centerdeformation.dto.ModulesDto;
import com.example.centerdeformation.model.Formation;
import com.example.centerdeformation.repository.FormationRepository;
import com.example.centerdeformation.tools.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class FormationService {

    @Autowired
    private FormationRepository formationRepository;

    public List<FormationDto> getAllFormation()
    {
        return formationRepository.findAll();
    }

    public FormationDto saveFormation(FormationDto FormationDto){
        return formationRepository.save(FormationDto);
    }

    public Optional<FormationDto> getFormationById(Long id) { return formationRepository.findById(id);}

    public void deleteFormation(Long id) {formationRepository.deleteById(id);}

    public void editFormation(Long id, FormationDto formationDto) {
        // Retrieve the existing module from the database based on the provided ID
        FormationDto formation = formationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));

        // Update the module properties with the data from the moduleDTO
        formation.setNomFormation(formationDto.getNomFormation());
        formation.setPrix(formationDto.getPrix());
        formation.setDateDebutFormation(formationDto.getDateDebutFormation());
        formation.setDateFinFormation(formationDto.getDateFinFormation());
        formation.setHoraire(formationDto.getHoraire());
        //formation.setPhoto(formationDto.getPhoto());
        formation.setEtat(formationDto.getEtat());
        formation.setNbEtudiant(formationDto.getNbEtudiant());
        formationRepository.save(formation);
    }

    public void AjouterModuleàFormation(Long id, FormationDto formationDto) {
        // Retrieve the existing module from the database based on the provided ID
        FormationDto formation = formationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));

        formation.setListeModules(formationDto.getListeModules());
        formation.setHoraire(formationDto.getHoraire());
        //formation.setListeEtudiants(formationDto.getListeEtudiants());
        // Save the updated module back to the database
        formationRepository.save(formation);
    }
    public void AjouterEtudiantàFormation(Long id, FormationDto formationDto) {
        FormationDto formation = formationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));
        formation.setListeEtudiants(formationDto.getListeEtudiants());

        formationRepository.save(formation);
    }


    public static void saveImage(MultipartFile imageFile) throws IOException {
        String folder ="C:/Users/USER/Desktop/Angular Project/PFA/src/assets/UploadImages/FormationImages/";
        byte[] bytes= imageFile.getBytes();
        Path path = Paths.get(folder + imageFile.getOriginalFilename());
        Files.write(path, bytes);
    }

}
