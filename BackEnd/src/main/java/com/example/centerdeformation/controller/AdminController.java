package com.example.centerdeformation.controller;

import com.example.centerdeformation.dto.AdminDto;
import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormateurDto;
import com.example.centerdeformation.dto.ModulesDto;
import com.example.centerdeformation.repository.AdminRepository;
import com.example.centerdeformation.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin()
@RestController
@RequestMapping("/api/Admin")
public class AdminController {

    @Autowired
    private final AdminService adminService;
    private AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/Get")
    public List<AdminDto> getAllAdmin() {
        return adminService.getAllAdmin();
    }
    @GetMapping("/Getone")
    public List<AdminDto> getAdmin(){
        return adminRepository.findAll();
    }


    @PostMapping("/Post")
    public AdminDto createAdmin(@RequestBody AdminDto adminDto){
        String encodedPassword = passwordEncoder.encode(adminDto.getPassword());
        adminDto.setPassword(encodedPassword);
        return adminService.saveAdmin(adminDto);
    }

    @GetMapping("/{id}/GetById")
    public Optional<AdminDto> getAdminById(@PathVariable long id){
        return adminService.findById(id);
    }
}
