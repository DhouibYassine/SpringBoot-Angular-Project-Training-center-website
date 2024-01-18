package com.example.centerdeformation.model;

import com.example.centerdeformation.model.formateur.Formateur;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class Modules {

    private Long idModule;

    private String NomModule;

    private String formateur;

    private Long horaire;

    private Long nombreDeSeance;

}
