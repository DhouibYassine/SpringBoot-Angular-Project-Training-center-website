package com.example.centerdeformation.dto;

import com.example.centerdeformation.repository.ModuleRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "SeanceDto")
@Data
public class SeanceDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idModule;

    @Column(name = "date")
    private Date date;

    @Column(name = "time")
    private String time;

    @Column(name = "salle")
    private String salle;

  /*  @JsonIgnore
    @OneToMany(mappedBy = "seanceDto")
    private List<Module_Formation> Seance;
*/
    @JsonIgnore
    @OneToMany(mappedBy = "seanceDto")
    private List<Absence> custom;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    private List<ModulesDto> modulesDto;

}
