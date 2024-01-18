import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { SessionService } from 'src/app/services/Session/session.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent {
  myForm!: FormGroup;
  fileName!: string;
  selectedFile!: File;
  _CURRENT_ID!:number;
  _CURRENT_USER!:Etudiant;
  
  constructor(private sessionService:SessionService,private http: HttpClient,private etudiantService:SEtudiantService , private router:Router){}


  ngOnInit() {
    this.initForm();
    this._CURRENT_ID = this.sessionService.get("_CURRENT_ID");
    console.log("THE _CURRENT_ID: ", this._CURRENT_ID);
    this.etudiantService.getDataEtudiant(this._CURRENT_ID).toPromise().then(data => {
      this.sessionService.set('_DATA_ETUDIANT',data);
      this._CURRENT_USER=this.sessionService.get('_DATA_ETUDIANT')
    });
  }



  initForm(){
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

  onSubmit(){
    
  }

}
