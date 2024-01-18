package com.example.centerdeformation.service;

import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormateurDto;
import com.example.centerdeformation.dto.FormationDto;
import com.example.centerdeformation.repository.EtudiantRepository;
import com.example.centerdeformation.repository.FormateurRepository;
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
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    public Optional<EtudiantDto> getEtudiantById(Long id) {
        return etudiantRepository.findById(id);}

    public static void saveImage(MultipartFile imageFile) throws IOException {
        String folder ="C:/Users/USER/Desktop/Angular Project/PFA/src/assets/UploadImages/";
        byte[] bytes= imageFile.getBytes();
        Path path = Paths.get(folder + imageFile.getOriginalFilename());
        Files.write(path, bytes);
    }




    public void AffectFormation(EtudiantDto etudiant, FormationDto formationDto) {
        etudiant.getFormationDtos().add(formationDto);
        // Save or update the etudiant object in the database
    }
    public void deleteUser(Long id) {
        etudiantRepository.deleteById(id);
    }
    public void editEtudiant(Long id, EtudiantDto etudiantDto) {
        // Retrieve the existing module from the database based on the provided ID
        EtudiantDto etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));

        // Update the module properties with the data from the moduleDTO
        etudiant.setNom(etudiantDto.getNom());
        etudiant.setPrenom(etudiantDto.getPrenom());
        etudiant.setCin(etudiantDto.getCin());
        //etudiant.setEmail(etudiantDto.getEmail());
        //etudiant.setPassword(etudiantDto.getPassword());
       // etudiant.setPhoto(etudiantDto.getPhoto());
        etudiant.setSexe(etudiantDto.getSexe());
        etudiant.setDateDeNaissance(etudiantDto.getDateDeNaissance());
        etudiant.setLieuDeNaissance(etudiantDto.getLieuDeNaissance());
        etudiant.setNiveauEtude(etudiantDto.getNiveauEtude());
        etudiant.setAdresse(etudiantDto.getAdresse());
        etudiant.setCivilite(etudiantDto.getCivilite());
        etudiant.setNumTel(etudiantDto.getNumTel());
        //etudiant.setFormationDtos(etudiantDto.getFormationDtos());

        // Save the updated module back to the database
        etudiantRepository.save(etudiant);
    }
    public void UnaffectedFormation(EtudiantDto etudiant, int formationIndex) {
        etudiant.getFormationDtos().remove(formationIndex);
        // Save or update the etudiant object in the database
    }

}
