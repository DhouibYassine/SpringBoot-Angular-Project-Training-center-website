package com.example.centerdeformation.model.formateur;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class LoginFormateur {
    private String emailFormateur;
    private String passwordFormateur;
}

