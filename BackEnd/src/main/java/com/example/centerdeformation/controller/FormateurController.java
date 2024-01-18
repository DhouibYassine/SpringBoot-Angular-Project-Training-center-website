package com.example.centerdeformation.controller;

import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.FormateurDto;
import com.example.centerdeformation.dto.FormationDto;
import com.example.centerdeformation.service.FormateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@CrossOrigin()
@RestController
@RequestMapping("/api/Formateur")
public class FormateurController {

    @Autowired
    private final FormateurService formateurService;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public FormateurController(FormateurService formateurService) {
        this.formateurService = formateurService;
    }


    @GetMapping("/Get")
    public List<FormateurDto> getAllFormateur() {
        return formateurService.getAllFormateur();
    }

    @GetMapping("/{idFormateur}/GetById")
    public Optional<FormateurDto> getFormateurById(@PathVariable long idFormateur){
        return formateurService.getFormateurById(idFormateur);
    }

    @PostMapping("/Post")
    public FormateurDto createFormateur(@RequestBody FormateurDto formateurDto){
        //String encodedPassword = passwordEncoder.encode(formateurDto.getPassword());
        //formateurDto.setPassword(encodedPassword);
        return formateurService.saveFormateur(formateurDto);
    }
    @PostMapping("/PostForce")
    public FormateurDto createFormateurForce(@RequestBody FormateurDto formateurDto){
        String encodedPassword = passwordEncoder.encode(formateurDto.getPassword());
        formateurDto.setPassword(encodedPassword);
        return formateurService.saveFormateurForce(formateurDto);
    }

    @DeleteMapping("/Delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        formateurService.deleteUser(id);
    }


    @PostMapping("/upload")
    public String uploadImage(@RequestParam("imageFile") MultipartFile imageFile)  {
        String returnValue = "start";
        try {
            formateurService.saveImage(imageFile);
            return returnValue;
        } catch (Exception e) {
            e.printStackTrace();
            returnValue = "error";
        }
        return returnValue;
    }

    @PutMapping("/Edit/{id}")
    public void editFormateur(@PathVariable Long id, @RequestBody FormateurDto formateurDto) {
        formateurService.editFormateur(id, formateurDto);
    }

    @PutMapping("/AccepteFormateur/{id}")
    public void accepteFormateur(@PathVariable Long id, @RequestBody FormateurDto formateurDto) {
        formateurService.accepterFormateur(id, formateurDto);
    }




    @PostMapping("/uploadCv")
    public String uploadCv(@RequestParam("CVFile") MultipartFile CVFile)  {
        String returnValue = "start";
        try {
            formateurService.saveCVFile(CVFile);
            return returnValue;
        } catch (Exception e) {
            e.printStackTrace();
            returnValue = "error";
        }
        return returnValue;
    }
}
