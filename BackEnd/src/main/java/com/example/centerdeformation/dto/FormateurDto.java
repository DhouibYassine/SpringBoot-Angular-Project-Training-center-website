package com.example.centerdeformation.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "formateur")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class FormateurDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "cin")
    private Long cin;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "photo")
    private String photo;

    @Column(name = "sexe")
    private String sexe;

    @Column(name = "dateDeNaissance")
    private Date dateDeNaissance;

    @Column(name = "lieuDeNaissance")
    private String lieuDeNaissance;

    @Column(name = "niveauEtude")
    private String niveauEtude;

    @Column(name = "NumTel")
    private Long NumTel;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "civilite")
    private String civilite;

    @Column(name = "etat")
    private String etat;

    @Column(name = "cv")
    private String cv;


   // @JsonIgnore
    @OneToMany(mappedBy = "formateur",fetch = FetchType.EAGER)
    private List<ModulesDto> listModules;



}
