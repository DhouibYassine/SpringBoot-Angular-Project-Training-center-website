package com.example.centerdeformation.model.etudiant;

import com.example.centerdeformation.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class Etudiant {

    private User etudiant;

    private String email;

    private String password;
}
