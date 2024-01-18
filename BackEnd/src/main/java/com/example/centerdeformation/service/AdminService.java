package com.example.centerdeformation.service;

import com.example.centerdeformation.dto.AdminDto;
import com.example.centerdeformation.dto.FormateurDto;
import com.example.centerdeformation.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    public List<AdminDto> getAllAdmin() { return adminRepository.findAll();}

    public AdminDto saveAdmin(AdminDto adminDto){
        return adminRepository.save(adminDto);
    }

    public Optional<AdminDto> findByEmailAdmin(String email) {
        return adminRepository.findByEmail(email);
    }
    public Optional<AdminDto> findById(Long id) {
        return adminRepository.findById(id);
    }

}
