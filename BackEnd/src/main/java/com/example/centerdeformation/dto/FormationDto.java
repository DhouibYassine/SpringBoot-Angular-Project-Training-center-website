package com.example.centerdeformation.dto;

import com.example.centerdeformation.model.EtatFormation;
import com.example.centerdeformation.model.Modules;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "formation")
@Data
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idFormation")
public class FormationDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFormation;

    @Column(name = "nomFormation")
    private  String nomFormation;

    @Column(name = "prix")
    private float prix;

    @Column(name = "dateDebutFormation")
    private Date dateDebutFormation;

    @Column(name = "dateFinFormation")
    private Date dateFinFormation;

    @Column(name = "Horaire")
    private Long Horaire;



    @Column(name = "photo")
    private String photo;

    @Column(name = "etat")
    private EtatFormation etat;

    @Column(name = "nombre des etudiants")
    private Long NbEtudiant;


    @ManyToMany(fetch = FetchType.EAGER,mappedBy = "formationDtos")
    private List<EtudiantDto> listeEtudiants;

   /*@JsonIgnore
    @Column(name = "listModules")
    @OneToMany(mappedBy = "formationDto")
    private List<ModulesDto> listModules;
*/

    @ManyToMany(fetch = FetchType.EAGER)
    private List<ModulesDto> listeModules;


   /* @JsonIgnore
    @OneToMany(mappedBy = "formation")
    private List<Module_Formation> Module_Formation;
    */



    public FormationDto toDto() {
        FormationDto dto = new FormationDto();
        dto.setIdFormation(idFormation);
        dto.setNomFormation(nomFormation);
        dto.setPrix(prix);
        dto.setDateDebutFormation(dateDebutFormation);
        dto.setDateFinFormation(dateFinFormation);
        dto.setPhoto(photo);
        dto.setEtat(etat);
        dto.setListeEtudiants(listeEtudiants);
        dto.setListeModules(listeModules);
        return dto;
    }





}
