package com.example.centerdeformation.model;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import java.util.Date;

@Data
@Builder
@Jacksonized
public class Formation {

    private Long idFormation;

    private  String nomFormation;

    private float prix;

    private Date dateDebutFormation;

    private Date dateFinFormation;

    private String Horaire;

    private Modules listModules;

    private String photo;

    private EtatFormation etat;

}
