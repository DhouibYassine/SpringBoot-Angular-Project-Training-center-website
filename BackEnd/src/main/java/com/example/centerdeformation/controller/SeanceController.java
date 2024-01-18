package com.example.centerdeformation.controller;

import com.example.centerdeformation.dto.EtudiantDto;
import com.example.centerdeformation.dto.ModulesDto;
import com.example.centerdeformation.dto.SeanceDto;
import com.example.centerdeformation.repository.SeanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/api/Seance")
public class SeanceController {
    @Autowired
    private final SeanceRepository seanceRepository;

    public SeanceController(SeanceRepository seanceRepository) {
        this.seanceRepository = seanceRepository;
    }


    @GetMapping("/Get")
    public List<SeanceDto> getAllSeance(){
        return seanceRepository.findAll();
    }

    @PostMapping("/Post")
    public ResponseEntity<SeanceDto> saveSeance(@RequestBody SeanceDto seanceDto){
        SeanceDto savedModule = seanceRepository.save(seanceDto);
        return new ResponseEntity<>(savedModule, HttpStatus.CREATED);
    }
}
