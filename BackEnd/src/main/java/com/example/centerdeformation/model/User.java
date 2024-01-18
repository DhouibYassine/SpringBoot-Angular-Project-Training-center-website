package com.example.centerdeformation.model;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.Date;

@Data
@Builder
@Jacksonized
public class User {
    private Long id;

    private String nom;

    private String prenom;

    private Long cin;

    private String photo;

    private String sexe;

    private Date dateDeNaissance;

    private String lieuDeNaissance;

    private String niveauEtude;

    private Long NumTel;

    private String adresse;

    private String civilite;
}
