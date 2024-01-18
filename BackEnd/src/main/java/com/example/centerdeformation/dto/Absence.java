package com.example.centerdeformation.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "Absence")
@Data
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private SeanceDto seanceDto;

    @ManyToOne
    private EtudiantDto etudiantDto;

    /*@Column(name = "nb_absece")
    private Long nb_absece;*/

}
