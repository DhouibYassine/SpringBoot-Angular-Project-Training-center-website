package com.example.centerdeformation.dto;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table (name = "Module_Formation")
@Data
public class Module_Formation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*@ManyToOne
    private ModulesDto module;

    @ManyToOne
    private FormationDto formation;

    @ManyToOne
    private SeanceDto seanceDto;
    */

}
