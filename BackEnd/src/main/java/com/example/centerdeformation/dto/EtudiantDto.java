package com.example.centerdeformation.dto;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "etudiant")
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class EtudiantDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "cin")
    private Long cin;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "photo")
    private String photo;

    @Column(name = "sexe")
    private String sexe;

    @Column(name = "dateDeNaissance")
    private Date dateDeNaissance;

    @Column(name = "lieuDeNaissance")
    private String lieuDeNaissance;

    @Column(name = "niveauEtude")
    private String niveauEtude;

    @Column(name = "NumTel")
    private Long NumTel;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "civilite")
    private String civilite;

    //@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
   /* @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "etudiant_formation",
            joinColumns = @JoinColumn(name = "etudiant_id"),
            inverseJoinColumns = @JoinColumn(name = "formation_id"))
    private List<FormationDto> formationDtos;
*/
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "etudiant_formation",
            joinColumns = @JoinColumn(name = "etudiant_id"),
            inverseJoinColumns = @JoinColumn(name = "formation_id"))
    @JsonIdentityReference(alwaysAsId = true) // Include only IDs in the JSON
    private List<FormationDto> formationDtos;




    @JsonIgnore
    @OneToMany(mappedBy = "etudiantDto")
    private List<Absence> custom;

/*
    public List<FormationDto> getFormationDtoByIdEtudiant(Long id) {
        if (getId().equals(id)) {
            return this.formationDtos;
        }
        return null; // Return null if the EtudiantDto with the specified ID is not found
    }
*/
  /*  public EtudiantDto toDto1() {
        EtudiantDto dto = new EtudiantDto();
        dto.setId(id);
        dto.setNom(nom);
        dto.setPrenom(prenom);
        dto.setFormationDtos(formationDtos);
        return dto;
    }*/




    public EtudiantDto toDto() {
        EtudiantDto dto = new EtudiantDto();
        dto.setId(id);
        dto.setNom(nom);
        dto.setPrenom(prenom);
        dto.setCin(cin);
        dto.setEmail(email);
        dto.setPhoto(photo);
        dto.setPassword(password);
        dto.setSexe(sexe);
        dto.setDateDeNaissance(dateDeNaissance);
        dto.setLieuDeNaissance(lieuDeNaissance);
        dto.setNiveauEtude(niveauEtude);
        dto.setNumTel(NumTel);
        dto.setAdresse(adresse);
        dto.setCivilite(civilite);
        return dto;
    }

}
