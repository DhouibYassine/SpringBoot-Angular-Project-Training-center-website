package com.example.centerdeformation.controller;

import com.example.centerdeformation.dto.AdminDto;
import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormateurDto;
import com.example.centerdeformation.exception.InvalidPasswordException;
import com.example.centerdeformation.model.Admin;
import com.example.centerdeformation.model.etudiant.Etudiant;
import com.example.centerdeformation.model.formateur.Formateur;
import com.example.centerdeformation.repository.EtudiantRepository;
import com.example.centerdeformation.repository.FormateurRepository;
import com.example.centerdeformation.service.AdminService;
import com.example.centerdeformation.service.FormateurService;
import com.example.centerdeformation.tools.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin()
@RestController
@RequestMapping("/api/Authentification")
public class AuthentificationController {

    @Autowired
    private final EtudiantRepository etudiantRepository;
    private final FormateurService formateurService;
    private final FormateurRepository formateurRepository;

    private final AdminService adminService;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthentificationController(EtudiantRepository etudiantRepository, FormateurService formateurService, FormateurRepository formateurRepository, AdminService adminService) {
        this.etudiantRepository = etudiantRepository;
        this.formateurService = formateurService;
        this.formateurRepository = formateurRepository;
        this.adminService = adminService;
    }

    @PostMapping("/loginEtudiant")
    public long loginEtudiant(@RequestBody Etudiant etudiant ) {

            EtudiantDto etudiantDto = etudiantRepository.findByEmail(etudiant.getEmail())
                    .orElseThrow(() -> new ResourceNotFoundException("Email Etudiant not found"));
            String encodedPassword = etudiantDto.getPassword();
            boolean isPwdRight = passwordEncoder.matches(etudiant.getPassword(), encodedPassword);
            if (!isPwdRight) {
                throw new InvalidPasswordException("Password does not match");
            }
            return etudiantDto.getId();
    }

    @PostMapping("/loginFormateur")
    public long loginFormateur(@RequestBody Formateur formateur ) {
        FormateurDto formateurDto = formateurRepository.findByEmail(formateur.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Email Formateur not found"));
        String encodedPassword = formateurDto.getPassword();
        boolean isPwdRight = passwordEncoder.matches(formateur.getPassword(), encodedPassword);
        if (!isPwdRight) {
            throw new InvalidPasswordException("Password does not match");
        }
        return formateurDto.getId();
    }

    @PostMapping("/loginAdmin")
    public long loginAdmin(@RequestBody Admin admin) {
        AdminDto adminDto = adminService.findByEmailAdmin(admin.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Email Formateur not found"));
        String encodedPassword = adminDto.getPassword();
        boolean isPwdRight = passwordEncoder.matches(admin.getPassword(), encodedPassword);
        if (!isPwdRight) {
            throw new InvalidPasswordException("Password does not match");
        }
        return adminDto.getId();
    }




}
