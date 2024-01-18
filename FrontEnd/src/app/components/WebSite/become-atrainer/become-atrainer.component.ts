import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { Formation } from 'src/app/models/Formation';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { DFormateurService } from 'src/app/services/DashBoard/Formateur/dformateur.service';

@Component({
  selector: 'app-become-atrainer',
  templateUrl: './become-atrainer.component.html',
  styleUrls: ['./become-atrainer.component.css']
})
export class BecomeATrainerComponent {
  data!: any[];
  dataSource!:any;
//-----Modal----- 
myForm!: FormGroup;
  fileName!: string;
  fileNameCV!: string;
  selectedFile!: File;
  selectedFileCV!: File;

  // this.dataSource = new MatTableDataSource(this.data);
  displayedColumns:any[]=['id','photo', 'Nom','Prenom', 'Numero de cin','Téléphone','Sexe', 'Email','niveauEtude', 'Date de naissance','Lieu de naissance','Adresse','Civilite','cv','icon'];
 
  constructor(private http:HttpClient,private formateurService: DFormateurService,private dashGeneralService:DashGeneralService , private router:Router) {}

  ngOnInit() {
    this.dashGeneralService.getFormateurData().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      console.log(this.data);
    });


    this.myForm = new FormGroup({                              
      nomFormateur: new FormControl(''),
      prenomFormateur: new FormControl(''),
      cinFormateur: new FormControl(''),
      emailFormateur: new FormControl(''),
      sexeFormateur: new FormControl(''),
      dateDeNaissanceFormateur: new FormControl(''),
      lieuDeNaissanceFormateur: new FormControl(''),
      numTelFormateur: new FormControl(''),
      adresseFormateur: new FormControl(''),
      civiliteFormateur: new FormControl(''),
      niveauEtudeFormateur: new FormControl(''),
      photoFormateur: new FormControl(''),
      CVFormateur: new FormControl(''),
    });
  }


  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //--------------------------------------------------------------
  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    if (this.selectedFileCV) {
      const formDataCV = new FormData();
      formDataCV.append('CV', this.selectedFileCV, this.selectedFileCV.name);
    }

    const newFormateur : Formateur={
      cv: this.fileNameCV,
      id: 0,
      nom: this.myForm.value.nomFormateur,
      prenom: this.myForm.value.prenomFormateur,
      cin: this.myForm.value.cinFormateur,
      email: this.myForm.value.emailFormateur,
      password: '',
      photo: this.fileName,
      sexe: this.myForm.value.sexeFormateur,
      dateDeNaissance: this.myForm.value.dateDeNaissanceFormateur,
      lieuDeNaissance: this.myForm.value.lieuDeNaissanceFormateur,
      niveauEtude: this.myForm.value.niveauEtudeFormateur,
      numTel: this.myForm.value.numTelFormateur,
      adresse: this.myForm.value.adresseFormateur,
      civilite: this.myForm.value.civiliteFormateur,
      etat: 'WAITING',
      listModules: []
    }
    console.log(newFormateur)

    this.dashGeneralService.saveFormateurData(newFormateur).subscribe(response => {
      console.log(response);
      window.location.reload();

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

onFileSelectedCV(event: any) {
  const file: File = event.target.files[0];

  if (file) {
    this.fileNameCV = file.name;

    const formDataCV = new FormData();
    formDataCV.append("CVFile", file);

    const upload$ = this.http.post("http://localhost:8080/api/Formateur/uploadCv", formDataCV);

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
