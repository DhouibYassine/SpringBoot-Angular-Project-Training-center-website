package com.example.centerdeformation.service;
import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormateurDto;
import com.example.centerdeformation.repository.FormateurRepository;
import com.example.centerdeformation.tools.ResourceNotFoundException;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class FormateurService {

    @Autowired
    private final FormateurRepository formateurRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public FormateurService(FormateurRepository formateurRepository, JavaMailSender javaMailSender) {
        this.formateurRepository = formateurRepository;
    }

    public List<FormateurDto> getAllFormateur()
    {

        return formateurRepository.findAll();
    }



    public Optional<FormateurDto> getFormateurById(Long id) { return formateurRepository.findById(id);}

    public void deleteUser(Long id) {formateurRepository.deleteById(id);}

    public Optional<FormateurDto> findByEmailFormateur(String emailFormateur) {
        return formateurRepository.findByEmail(emailFormateur);
    }
    public static void saveImage(MultipartFile imageFile) throws IOException {
        String folder ="C:/Users/USER/Desktop/Angular Project/Angular/src/assets/UploadImages/";
        byte[] bytes= imageFile.getBytes();
        Path path = Paths.get(folder + imageFile.getOriginalFilename());
        Files.write(path, bytes);
    }
    public static void saveCVFile(MultipartFile CVFile) throws IOException {
        String folder ="C:/Users/USER/Desktop/Angular Project/PFA/src/assets/UploadFiles/";
        byte[] bytes= CVFile.getBytes();
        Path path = Paths.get(folder + CVFile.getOriginalFilename());
        Files.write(path, bytes);
    }
    public FormateurDto saveFormateurForce(FormateurDto formateurDto) {
        return  formateurRepository .save(formateurDto);

    }
        public FormateurDto saveFormateur(FormateurDto formateurDto){

        formateurDto.setNom(formateurDto.getNom());
        formateurDto.setPrenom(formateurDto.getPrenom());
        formateurDto.setCin(formateurDto.getCin());
        formateurDto.setEmail(formateurDto.getEmail());
        formateurDto.setSexe(formateurDto.getSexe());
        formateurDto.setDateDeNaissance(formateurDto.getDateDeNaissance());
        formateurDto.setLieuDeNaissance(formateurDto.getLieuDeNaissance());
        formateurDto.setNiveauEtude(formateurDto.getNiveauEtude());
        formateurDto.setAdresse(formateurDto.getAdresse());
        formateurDto.setCivilite(formateurDto.getCivilite());
        formateurDto.setNumTel(formateurDto.getNumTel());
        formateurDto.setCv(formateurDto.getCv());
        formateurDto.setPhoto(formateurDto.getPhoto());


        // Save the updated module back to the database
       return  formateurRepository .save(formateurDto);
    }
    public void editFormateur(Long id, FormateurDto formateurDto) {
        // Retrieve the existing module from the database based on the provided ID
        FormateurDto formateur = formateurRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));
        // Update the module properties with the data from the moduleDTO
        formateur.setNom(formateurDto.getNom());
        formateur.setPrenom(formateurDto.getPrenom());
        formateur.setCin(formateurDto.getCin());
        formateur.setEmail(formateurDto.getEmail());
        formateur.setSexe(formateurDto.getSexe());
        formateur.setDateDeNaissance(formateurDto.getDateDeNaissance());
        formateur.setLieuDeNaissance(formateurDto.getLieuDeNaissance());
        formateur.setNiveauEtude(formateurDto.getNiveauEtude());
        formateur.setAdresse(formateurDto.getAdresse());
        formateur.setCivilite(formateurDto.getCivilite());
        formateur.setNumTel(formateurDto.getNumTel());
        // Save the updated module back to the database
        formateurRepository .save(formateur);
    }


    public void accepterFormateur(Long id, FormateurDto formateurDto) {
        // Retrieve the existing module from the database based on the provided ID
        FormateurDto formateur = formateurRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("error"));

        String encodedPassword = passwordEncoder.encode(formateurDto.getPassword());

        // Update the module properties with the data from the moduleDTO
        formateur.setPassword(encodedPassword);
        formateur.setEtat(formateurDto.getEtat());
        // Save the updated module back to the database
        formateurRepository .save(formateur);
    }



}
