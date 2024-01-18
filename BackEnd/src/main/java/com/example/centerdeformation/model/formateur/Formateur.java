package com.example.centerdeformation.model.formateur;

import com.example.centerdeformation.model.EtatFormateur;
import com.example.centerdeformation.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class Formateur {

    private User formateur;

    private String cv;

    private EtatFormateur etat;

    private String email;

    private String password;


}
