package com.example.centerdeformation.model;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.Date;

@Data
@Builder
@Jacksonized
public class Seance {
    private Long idSeance;

    private Date date;

    private String salle;

    private String time;

}
