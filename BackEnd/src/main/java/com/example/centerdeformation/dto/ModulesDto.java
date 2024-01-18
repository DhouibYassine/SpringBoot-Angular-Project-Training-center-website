package com.example.centerdeformation.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "module")
@Data
public class ModulesDto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idModule;

    @Column(name = "NomModule")
    private String NomModule;

    @Column(name = "horaireModule")
    private Long horaire;

    @Column(name = "nombreDeSeance")
    private Long nombreDeSeance;



    //@JsonManagedReference
    @ManyToOne
    private FormateurDto formateur;
/*
    @JsonIgnore
    @OneToMany(mappedBy = "module")
    private List<Module_Formation> Module_Formation;
*/
    /*@ManyToOne
    private FormationDto formationDto;
*/
    @ManyToMany(fetch = FetchType.EAGER)
    private List<SeanceDto> seanceDto;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<FormationDto> formationDtos;


}

