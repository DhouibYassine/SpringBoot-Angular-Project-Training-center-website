package com.example.centerdeformation.model;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class Admin {
    private Long id;

    private String email;

    private String password;
}
