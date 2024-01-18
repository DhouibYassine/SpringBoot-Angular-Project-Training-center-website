import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { EtudiantSimple } from 'src/app/models/Etudiant/EtudiantSimple';
import { Formation } from 'src/app/models/Formation';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';

@Component({
  selector: 'app-site-sign-up-etudiant',
  templateUrl: './site-sign-up-etudiant.component.html',
  styleUrls: ['./site-sign-up-etudiant.component.css']
})
export class SiteSignUpEtudiantComponent {
  myForm!: FormGroup;
  fileName!: string;
  selectedFile!: File;
  constructor(private http: HttpClient,private etudiantService:SEtudiantService , private router:Router){}

  onSubmit() {
    if (this.selectedFile) 
    {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    const newEtudiant : EtudiantSimple={
      id: 0,
      nom: this.myForm.value.nomEtudiant,
      prenom: this.myForm.value.prenomEtudiant,
      cin: this.myForm.value.cinEtudiant,
      email: this.myForm.value.emailEtudiant,
      password: this.myForm.value.passwordEtudiant,
      photo: this.fileName,
      sexe: this.myForm.value.sexeEtudiant,
      dateDeNaissance: this.myForm.value.dateDeNaissanceEtudiant,
      lieuDeNaissance: this.myForm.value.lieuDeNaissance,
      niveauEtude: this.myForm.value.niveauEtudeEtudiant,
      numTel: this.myForm.value.numTelEtudiant,
      adresse: this.myForm.value.adresseEtudiant,
      civilite: this.myForm.value.civilite,
      
    }

    this.etudiantService.saveDataE(newEtudiant).subscribe(response => {
      console.log(response);
      this.router.navigate(['/Login']);
      
    });
 
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      nomEtudiant: new FormControl(''),
      prenomEtudiant: new FormControl(''),
      cinEtudiant: new FormControl(''),
      emailEtudiant: new FormControl('',[Validators.required, Validators.email]),
      sexeEtudiant: new FormControl(''),
      dateDeNaissanceEtudiant: new FormControl(''),
      lieuDeNaissance: new FormControl(''),
      niveauEtudeEtudiant: new FormControl(''),
      numTelEtudiant: new FormControl(''),
      photoEtudiant: new FormControl(''),
      adresseEtudiant: new FormControl(''),
      passwordEtudiant: new FormControl('',Validators.required),
    });
  }
  


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  
    if (file) {
      this.fileName = file.name;
  
      const formData = new FormData();
      formData.append("imageFile", file);
  
      const upload$ = this.http.post("http://localhost:8080/api/Etudiant/upload", formData);
  
      upload$.subscribe(
        (response) => {
          console.log("Image uploaded successfully.", response);
          // Handle the response from the server if needed
        },
        (error) => {
          console.log("Error uploading image.", error);
          // Handle the error if needed
        }
      );
    }
  }
}
