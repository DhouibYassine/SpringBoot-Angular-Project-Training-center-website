import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { DEtudiantService } from 'src/app/services/DashBoard/Etudiant/detudiant.service';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete/confirm-dialog-delete.component';
import { DFormateurService } from 'src/app/services/DashBoard/Formateur/dformateur.service';
import { HttpClient } from '@angular/common/http';
import { EtudiantSimple } from 'src/app/models/Etudiant/EtudiantSimple';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { SessionService } from 'src/app/services/Session/session.service';

@Component({
  selector: 'app-dash-etudiant',
  templateUrl: './dash-etudiant.component.html',
  styleUrls: ['./dash-etudiant.component.css']
})
export class DashEtudiantComponent {
  
  data!: any[];
  dataSource!:any;
  myForm!: FormGroup;
  myNewForm!: FormGroup;
  fileName!: string;
  _ID_ETUDIANT!:number;
  etudiantById!:any;
  selectedFile!: File;
  DATA_ETUDIANTS!:any;
  selectedFileName!: string;
  loadingData: boolean = false;
  currentItemId!:any;

  idList: number[] = [];
  idList1: number[] = [];

  studentList: any[] = [];

  displayedColumns:any[]=['photo', 'Nom','Prenom', 'Numero de cin','Téléphone','Sexe', 'Email',
                  'niveauEtude', 'Date de naissance','Lieu de naissance','Adresse','Civilite','icon'];

  constructor(private changeDetectorRef: ChangeDetectorRef,private activatedRoute:ActivatedRoute,
              private formBuilder: FormBuilder,private sessionService: SessionService,private router:Router,
              private setudiantService:SEtudiantService,private http: HttpClient,private dialog:MatDialog,
              private etudiantService: DEtudiantService,private dashGeneralService:DashGeneralService) {}

  initForm():void{
    this.myForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      cin: new FormControl(''),
      sexe: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      numTel: new FormControl(''),
      dateDeNaissance: new FormControl(''),
      lieuDeNaissance: new FormControl(''),
      adresse : new FormControl(''),
      civilite : new FormControl(''),
      niveauEtude: new FormControl(''),
      password: new FormControl('',Validators.required),
    });
  }

  initNewForm():void{
  this.myNewForm =  new FormGroup({
    newnom: new FormControl(null,[Validators.required]),
    newprenom: new FormControl(null,[Validators.required]),
    newcin: new FormControl(null,[Validators.required]),
    newsexe: new FormControl(null,[Validators.required]),
    newemail: new FormControl(null,[Validators.required, Validators.email]),
    newnumTel: new FormControl(null,[Validators.required]),
    newdateDeNaissance: new FormControl(null,[Validators.required]),
    newlieuDeNaissance: new FormControl(null,[Validators.required]),
    newadresse : new FormControl(null,[Validators.required]),
    newcivilite : new FormControl(null,[Validators.required]),
    NewniveauEtudeEtudiant : new FormControl(null,[Validators.required]),
    newpassword: new FormControl(null,[Validators.required]),
    
   });

  }

  ngOnInit() {

    this.dashGeneralService.getEtudiantData().subscribe(data => {
      this.data = data;
      this.sessionService.set('DATA_ETUDIANTS', data);
      // this.dataSource = new MatTableDataSource(this.data);
      // this.changeDetectorRef.detectChanges();
    });

    // this.dataSource = new MatTableDataSource(this.data);
    this.initNewForm();
    this.initForm();
    
    this.fetchStudentList()

    // this.dataSource = new MatTableDataSource(this.studentList);
    
  }
  
  newOnSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
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
      const NewniveauEtudeEtudiant =(document.getElementById('NewniveauEtudeEtudiant') as HTMLInputElement).value;
      const newpassword = (document.getElementById('newpassword') as HTMLInputElement).value;
      const fileName = this.fileName;
  
      const newEtudiant: EtudiantSimple = {
        id: 0,
        nom: newnom,
        prenom: newprenom,
        cin: newcin,
        email: newemail,
        password: newpassword,
        photo: fileName,
        sexe: newsexe,
        dateDeNaissance: newdateDeNaissance,
        lieuDeNaissance: newlieuDeNaissance,
        numTel: newnumTel,
        adresse: newadresse,
        civilite: newcivilite,
        niveauEtude: NewniveauEtudeEtudiant,
      }
    console.log(newEtudiant)
      this.setudiantService.saveDataE(newEtudiant).subscribe(response => {
        console.log(response);
        window.location.reload();
      });  
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
  
  this.DATA_ETUDIANTS = this.sessionService.get('DATA_ETUDIANTS');
  
      const newEtudiant: EtudiantSimple = {
        id: 0,
        nom: this.myForm.value.nom,
        prenom: this.myForm.value.prenom,
        cin: this.myForm.value.cin,
        email: this.myForm.value.email,
        password: this.myForm.value.password,
        // photo : (this.fileName != '') ? this.fileName : this.DATA_ETUDIANTS.photo,
        photo : this.myForm.value.photo,
        sexe: this.myForm.value.sexe,
        dateDeNaissance: this.myForm.value.dateDeNaissance,
        lieuDeNaissance: this.myForm.value.lieuDeNaissance,
        niveauEtude: this.myForm.value.niveauEtude,
        // numTel : (this.myForm.value.numTel != '') ? this.myForm.value.numTel : this.DATA_ETUDIANTS.numTel,
        numTel :this.myForm.value.numTel,
        adresse: this.myForm.value.adresse,
        civilite: this.myForm.value.civilite
      }
  
      this.etudiantService.updateEtudiantById(this._ID_ETUDIANT, newEtudiant).subscribe(response => {
        console.log(response);
        window.location.reload();
      });
    
  }
  
  openModal(id: number) {
    this._ID_ETUDIANT = id;
    console.log(this._ID_ETUDIANT)
    this.etudiantService.getDataEtudiant(id)
      .subscribe(
        (module) => {
          this.etudiantById = module;
  
          this.myForm.patchValue({
            nom: this.etudiantById.nom,
            prenom: this.etudiantById.prenom,
            cin: this.etudiantById.cin,
            sexe: this.etudiantById.sexe,
            email: this.etudiantById.email,
            numTel: this.etudiantById.numTel,
            dateDeNaissance: this.etudiantById.dateDeNaissance,
            lieuDeNaissance: this.etudiantById.lieuDeNaissance,
            adresse: this.etudiantById.adresse,
            civilite: this.etudiantById.civilite,
            niveauEtudeEtudiant : this.etudiantById.niveauEtude,
            password: this.etudiantById.password,
           
          });
          console.log(this.myForm.value)
        },
        (error) => {
          console.error('Failed openModal:', error);
        }
      );
  }
  
  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
          this.etudiantService.deleteEtudiantById(id)
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      this.selectedFileName = file.name;

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


    fetchStudentList() {
      // this.http.get<any[]>('http://localhost:8080/api/Etudiant/Get')
      this.etudiantService.getData()
        .subscribe(
          data => {
            data.forEach(item => {
              if (typeof item === 'number') {
                this.idList.push(item);
              } else if (typeof item === 'object') {
                this.studentList.push(item);
              }
            });
    
            console.log('ID List:', this.idList);
            console.log('Student List:', this.studentList);
            // console.log('ID List Length:', this.idList.length);
            this.sessionService.set('idList',this.idList)

            this.idList1=this.sessionService.get('idList')
              for (let i = 0; i < this.idList1.length; i++) {
                this.etudiantService.getDataEtudiant(this.idList1[i]).subscribe(data => {
                  this.studentList.push(data)
                  this.dataSource = new MatTableDataSource(this.studentList);
                })
              }
            this.dataSource = new MatTableDataSource(this.studentList);
          },
          error => {
            console.error('Error:', error);
          }
        );
    }
    

 /* buildEtudiant(){
    this.fetchStudentList();
    this.idList1=this.sessionService.get('idList')
      for (let i = 0; i < this.idList1.length; i++) {
        this.etudiantService.getDataEtudiant(this.idList1[i]).subscribe(data => {
          this.studentList.push(data)
          this.dataSource = new MatTableDataSource(this.studentList);
        })
      }
       this.dataSource = new MatTableDataSource(this.studentList);
  } */
}  
