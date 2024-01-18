import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { DFormateurService } from 'src/app/services/DashBoard/Formateur/dformateur.service';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete/confirm-dialog-delete.component';
import { Formation } from 'src/app/models/Formation';

@Component({
  selector: 'app-dash-formateur',
  templateUrl: './dash-formateur.component.html',
  styleUrls: ['./dash-formateur.component.css']
})
export class DashFormateurComponent implements OnInit {
  data!: any[];
  dataSource!:any;
//-----Modal----- 
  myForm!: FormGroup;
  myNewForm!: FormGroup;
  myAcceptForm!:FormGroup;

  fileName!: string;
  selectedFile!: File;
  selectedFileCV!: File;
  formateur!:any;

  fileNameCV!: string;
  buttonDisabled = false;
  _ID_FORMATEUR!:number;
  // this.dataSource = new MatTableDataSource(this.data);
  displayedColumns:any[]=['photo', 'Nom','Prenom', 'Numero de cin','Téléphone','Sexe', 'Email','niveauEtude', 'Date de naissance','Lieu de naissance','Adresse','Civilite','etat','cv','icon'];
 
  constructor( private dialog:MatDialog,private http:HttpClient,private formateurService: DFormateurService,private dashGeneralService:DashGeneralService , private router:Router) {}

  ngOnInit() {
    this.dashGeneralService.getFormateurData().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
    });
    this.dataSource = new MatTableDataSource(this.data);
    
    this.initForm();
    this.initNewForm();
    this.initAcceptForm();
  }

  initNewForm():void{
  this.myNewForm = new FormGroup({                              
        newnom: new FormControl(''),
        newprenom: new FormControl(''),
        newcin: new FormControl(''),
        newemail: new FormControl(''),
        newsexe: new FormControl(''),
        newdateDeNaissance: new FormControl(''),
        newlieuDeNaissance: new FormControl(''),
        newnumTel: new FormControl(''),
        newadresse: new FormControl(''),
        newcivilite: new FormControl(''),
        newpassword: new FormControl(''),
        newniveauEtude: new FormControl(''),
        newphoto: new FormControl(''),
        newEtat: new FormControl(''),
        newCV: new FormControl(''),
      });
  }

  initForm():void{
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
      passwordFormateur: new FormControl(''),
      niveauEtudeFormateur: new FormControl(''),
      photoFormateur: new FormControl(''),
      etatFormateur: new FormControl(''),
      CVFormateur: new FormControl(''),
    });
  }

  initAcceptForm():void{
    this.myAcceptForm = new FormGroup({   
      passwordFormateur :new FormControl(''),                     
      etatFormateur: new FormControl(''),   
    });
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newOnSubmit(){
    this.buttonDisabled = true;
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    if (this.selectedFileCV) {
      const formDataCV = new FormData();
      formDataCV.append('CV', this.selectedFileCV, this.selectedFileCV.name);
    }

    const newnom = (document.getElementById('newnom') as HTMLInputElement).value;
    const newprenom = (document.getElementById('newprenom') as HTMLInputElement).value;
    const newcin = parseInt((document.getElementById('newcin') as HTMLInputElement).value, 10);
    const newsexe = (document.getElementById('newsexe') as HTMLInputElement).value;
    const newemail = (document.getElementById('newemail') as HTMLInputElement).value;
    const newnumTel = parseInt((document.getElementById('newnumTel') as HTMLInputElement).value, 10);
    const newdateDeNaissance = new Date((document.getElementById('newdateDeNaissance') as HTMLInputElement).value);
    const newlieuDeNaissance = (document.getElementById('newlieuDeNaissance') as HTMLInputElement).value;
    const newadresse = (document.getElementById('newadresse') as HTMLInputElement).value;
    const newcivilite = (document.getElementById('newcivilite') as HTMLInputElement).value;
    const newniveauEtude= (document.getElementById('newniveauEtude') as HTMLInputElement).value;
    const newEtat= (document.getElementById('newEtat') as HTMLInputElement).value;


    const newFormatuer:Formateur = {
      cv: this.fileNameCV,
      id: 0,
      nom: newnom,
      prenom: newprenom,
      cin: newcin,
      email: newemail,
      password: '',
      photo: this.fileName,
      sexe: newsexe,
      dateDeNaissance: newdateDeNaissance,
      lieuDeNaissance: newlieuDeNaissance,
      niveauEtude: newniveauEtude,
      numTel: newnumTel,
      adresse: newadresse,
      civilite: newcivilite,
      etat: newEtat,
      listModules: []
    }
    console.log(newFormatuer)
    this.dashGeneralService.saveFormateurData(newFormatuer).subscribe(response => {
      console.log(response);
      window.location.reload();
    })

  }
  //--------------------------------------------------------------
  onSubmit() {
    this.buttonDisabled = true;
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
      etat: this.myForm.value.etatFormateur,
      listModules: []
    }

    this.formateurService.updateFormateurById(this._ID_FORMATEUR,newFormateur).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
    
  }  

  AcceptOnSubmit(){
    const newFormateur : Formateur={
      cv: '',
      id: 0,
      nom: '',
      prenom: '',
      cin: 0,
      email: '',
      password: this.myAcceptForm.value.passwordFormateur,
      photo: '',
      sexe: '',
      dateDeNaissance: new Date,
      lieuDeNaissance: '',
      niveauEtude: '',
      numTel: 0,
      adresse: '',
      civilite: '',
      etat: this.myAcceptForm.value.etatFormateur,
      listModules: []
    }
    console.log(newFormateur)
    console.log(this._ID_FORMATEUR)
    this.formateurService.AccepteFormateurById(this._ID_FORMATEUR,newFormateur).subscribe(response => {
     
      console.log(response);
      window.location.reload();
    });
    
  }

  openModal(id: number) {
    this._ID_FORMATEUR=id;
    // console.log(this._ID_FORMATEUR);
    this.formateurService.getFormateurDataById(id)
      .subscribe(
        (module) => {
          this.formateur = module;
          this.myForm.patchValue({
            nomFormateur: this.formateur.nom,
            prenomFormateur: this.formateur.prenom,
            cinFormateur: this.formateur.cin,
            emailFormateur: this.formateur.email,
            sexeFormateur: this.formateur.sexe,
            dateDeNaissanceFormateur: this.formateur.dateDeNaissance,
            lieuDeNaissanceFormateur: this.formateur.lieuDeNaissance,
            numTelFormateur: this.formateur.numTel,
            adresseFormateur: this.formateur.adresse,
            civiliteFormateur: this.formateur.civilite,
            passwordFormateur: this.formateur.password,
            niveauEtudeFormateur: this.formateur.niveauEtude,
            photoFormateur: this.formateur.photo,
            CVFormateur: this.formateur.CV,
          });

      },
        (error) => {
          console.error('Failed openModal:', error);
        }
      );
  } 

  openAcceptedModal(id: number){
    this._ID_FORMATEUR=id;
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

  delete(id:number):void{
    //1 ouvrir  la boite
    const dialogRef = this.dialog.open(ConfirmDialogDeleteComponent, {
      height: '200px',
      width: '500px',
    });
    
    //2 attendre le retour de l'utilisateur
    dialogRef.afterClosed().subscribe((x)=>{
      if(x){
          this.formateurService.deleteFormateurById(id)
            .subscribe(
              () => {
                console.log('User deleted successfully');
                window.location.reload();
              },
              (error) => {
                console.error('Failed to delete user:', error);
              }
            );
      }})
  }

}