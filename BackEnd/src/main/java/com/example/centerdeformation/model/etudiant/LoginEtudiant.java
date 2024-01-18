package com.example.centerdeformation.model.etudiant;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class LoginEtudiant {
    private String emailEtudiant;
    private String passwordEtudiant;
}
