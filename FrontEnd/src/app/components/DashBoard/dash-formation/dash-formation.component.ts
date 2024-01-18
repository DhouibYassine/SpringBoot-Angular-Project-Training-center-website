import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete/confirm-dialog-delete.component';
import { FormationService } from 'src/app/services/DashBoard/Formation/formation.service';
import { AffecterFormateurToFormationComponent } from '../affecter-formateur-to-formation/affecter-formateur-to-formation.component';
import { SessionService } from 'src/app/services/Session/session.service';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { ModuleService } from 'src/app/services/DashBoard/Module/module.service';
import { DEtudiantService } from 'src/app/services/DashBoard/Etudiant/detudiant.service';
import { Modules } from 'src/app/models/Modules';

@Component({
  selector: 'app-dash-formation',
  templateUrl: './dash-formation.component.html',
  styleUrls: ['./dash-formation.component.css']
})
export class DashFormationComponent implements OnInit{
  data!: any[];
  formation!: Formation[]
  //-----Modal----- 
  myForm!: FormGroup;
  myAffectForm!:FormGroup;
  myNewForm!:FormGroup;
  dataModule!: any[];
  formationFromListeFormation!:Formation;
  fileName!: string;
  selectedFile!: File;
  dataSource!:any;
  buttonDisabled = false;
  _ID_FORMATION!:number;
  formationById!:any;
  toggleValue = false;
  modalOpen = false;
  idAffect!:any;
  dataSource1!:any;
  dataSource2!:any;
  listeModules!:any;
  showModal: boolean = false;
  myAddForm!:FormGroup;
  Modula!:any;
  varidformation!:number;
  newFormation!:Formation;
  EtudiantTable!:Etudiant[];
  idnum : number[] = [];
  formateurList : any[] = [];



  temp!:Formation;
  // toggleValues: { [id: number]: boolean } = {};

  displayedColumns:any[]=['id', 'Nom de Formation','prix', 'dateDebut', 'dateFin', 'horaire','etat','nbEtudiant','action'];
  displayedColumns2:any[]=['nomModule','horaire','formateur','action']
  constructor(private etudiantService:DEtudiantService,private moduleService:ModuleService,private sessionService:SessionService,private formationService:FormationService, private dialog:MatDialog,private dashGeneralService: DashGeneralService, private router:Router,private http:HttpClient) {}
  
  ngOnInit() {
    this.dashGeneralService.getFormationData().subscribe(data => {
      this.data = data;
     
      this.dataSource = new MatTableDataSource(this.data);
    });
    this.dataSource = new MatTableDataSource(this.data);

    console.log("(((((((((((((((((((((((((((((((((((((((((((((((((")
    console.log(this.dataSource)
    console.log("(((((((((((((((((((((((((((((((((((((((((((((((((")


    this.dashGeneralService.getModuleData().subscribe(dataModule => {
      this.dataModule = dataModule;
    });

    this.initForm();
    this.initNewForm();
    this.initAddForm();
  }

  initNewForm():void{
    this.myNewForm = new FormGroup({
      idFormation: new FormControl('',Validators.required),
      NewnomFormation: new FormControl('',Validators.required),
      Newprix: new FormControl('',Validators.required),
      NewdateDebutFormation: new FormControl('',Validators.required),
      NewdateFinFormation: new FormControl('',Validators.required),
      Newhoraire: new FormControl('',Validators.required),
      Newmodules: new FormControl('',Validators.required),
      NewEtat: new FormControl('',Validators.required),
      nbEtudiant:new FormControl('',Validators.required),
    });
    
  }
  
  initForm():void{
    this.myForm = new FormGroup({
      idFormation: new FormControl('',Validators.required),
      nomFormation: new FormControl('',Validators.required),
      prix: new FormControl('',Validators.required),
      dateDebutFormation: new FormControl('',Validators.required),
      dateFinFormation: new FormControl('',Validators.required),
      modules: new FormControl('',Validators.required),
      horaire: new FormControl('',Validators.required),
      formateur :new FormControl('',Validators.required),
      etat: new FormControl('',Validators.required),
      nbEtudianta: new FormControl('',Validators.required)
    });
  }
  initAddForm():void{
    this.myAddForm = new FormGroup({
      AddModule: new FormControl('',Validators.required),
    });
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
          this.formationService.deleteFormationById(id)
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
 
  newOnSubmit(){
    this.buttonDisabled = true;

    if (this.selectedFile) 
    {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    
    const NewnomFormation = (document.getElementById('NewnomFormation') as HTMLInputElement).value;
    const Newprix = parseInt((document.getElementById('Newprix') as HTMLInputElement).value, 10);
    const NewdateDebutFormation = new Date((document.getElementById('NewdateDebutFormation') as HTMLInputElement).value);
    const NewdateFinFormation = new Date((document.getElementById('NewdateFinFormation') as HTMLInputElement).value);
   // const Newhoraire = parseInt((document.getElementById('Newhoraire') as HTMLInputElement).value, 10);
    // const Newmodules = (document.getElementById('Newmodules') as HTMLInputElement).value;
    const NewEtat = (document.getElementById('NewEtat') as HTMLInputElement).value;
    const nbEtudiant =  parseInt((document.getElementById('nbEtudiant') as HTMLInputElement).value, 10);
    const fileUpload = this.fileName;
    
    const newFormation: Formation={
      idFormation: 0,
      nomFormation: NewnomFormation,
      prix: Newprix,
      dateDebutFormation: NewdateDebutFormation,
      dateFinFormation: NewdateFinFormation,
      horaire: 0,
      photo: fileUpload,
      etat: NewEtat,
      listeEtudiants: [],
      listeModules: [],
      nbEtudiant: nbEtudiant
    }
    
    this.dashGeneralService.saveFormationData(newFormation).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
  }
  
  onSubmit() {
    this.buttonDisabled = true;

    if (this.selectedFile) 
    {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    const newFormation : Formation={
      idFormation: 0,
      nomFormation: this.myForm.value.nomFormation,
      prix: this.myForm.value.prix,
      dateDebutFormation: this.myForm.value.dateDebutFormation,
      dateFinFormation: this.myForm.value.dateFinFormation,
      horaire: this.myForm.value.horaire,
      photo: this.fileName,
      etat: this.myForm.value.etat,
      listeEtudiants: [],
      listeModules: [],
      nbEtudiant: this.myForm.value.nbEtudianta,
    }

    console.log(newFormation)

    this.formationService.updateFormateurById(this._ID_FORMATION,newFormation).subscribe(response => {
      console.log(response);
      window.location.reload();
    });

  }

       

  AddOnSubmit() {
    this.varidformation = this.sessionService.get('varidformation');

    this.moduleService.getModuleDataById(this.myAddForm.value.AddModule).subscribe(modula => {

      this.Modula = modula;

      this.formationService.getFormationDataById(this.varidformation).subscribe(formation => {
        this.newFormation = formation;

        this.newFormation.listeModules.push(this.Modula);
        this.newFormation.horaire =this.newFormation.horaire+this.Modula.horaire;

       console.log(this.newFormation)

        this.formationService.AjouterModuleàFormation(this.varidformation, this.newFormation).subscribe(response => {
          console.log(response);
          window.location.reload();
        });
      });
    });
  }

  annulerModule(id:number){
     console.log(id)
      this.formationService.getFormationDataById(this.sessionService.get('varidformation')).subscribe(data =>{
        this.sessionService.set('temp',data);

       this.temp= this.sessionService.get('temp')
       

       const idASupprimer = id; // Remplacez par l'ID que vous souhaitez supprimer

          for (let i = 0; i < this.temp.listeModules.length; i++) {


            if (this.temp.listeModules[i].idModule === idASupprimer) {
              const N =  this.temp.listeModules[i].horaire;
              this.temp.listeModules.splice(i, 1);  // Supprimer l'élément à l'index i
              this.temp.horaire = this.temp.horaire -N ;
              break; // Sortir de la boucle après la suppression
            }
          }
 
      this.formationService.AjouterModuleàFormation(this.sessionService.get('varidformation'), this.temp).subscribe(response => {
        console.log(response);
        window.location.reload();
      });
      })
  }
  

  openModal(id: number) {
    this._ID_FORMATION=id;
    console.log(this._ID_FORMATION)
    this.formationService.getFormationDataById(id)
      .subscribe(
        (module) => {
          this.formationById = module;
          this.myForm.patchValue({
            nomFormation: this.formationById.nomFormation,
            prix: this.formationById.prix,
            dateDebutFormation: this.formationById.dateDebutFormation,
            dateFinFormation: this.formationById.dateFinFormation,
            modules: this.formationById.modules,
            horaire: this.formationById.horaire,
            etat : this.formationById.etat  ,
            nbEtudianta: this.formationById.nbEtudiant,
          });
      },
        (error) => {
          console.error('Failed openModal:', error);
        }
      );
  }

  openListEtudiantModal(idFormation:number){
    console.log(idFormation);
      this.sessionService.set('varidformation', idFormation);

      this.formationService.getFormationDataById(idFormation).subscribe(x => {
        this.sessionService.set('listEtudiant', x);
        const listeEtudiants = x.listeEtudiants;
 
        const TruelisteEtudiants1: Etudiant[] = [];

        TruelisteEtudiants1.push(listeEtudiants[0]);
        listeEtudiants.shift();

        const listeEtudiantIds: number[] = listeEtudiants.map((etudiant: Etudiant) => Number(etudiant));

        for (let i = 0; i < listeEtudiantIds.length; i++) {
           this.etudiantService.getDataEtudiant(listeEtudiantIds[i]).subscribe(x =>{
            this.sessionService.set('test',x)
            TruelisteEtudiants1.push(this.sessionService.get('test'));
           })
        }
        this.EtudiantTable=TruelisteEtudiants1;          
      });     
  }

    openDetailFormationModal(idFormation: number) {
      console.log(idFormation);
      this.sessionService.set('varidformation', idFormation);
      this.formationService.getFormationDataById(idFormation).subscribe(x => {
        this.sessionService.set('listEtudiant', x);
        const listeModules = x.listeModules;
        
        console.log('-------------------------------')
        console.log(listeModules);
        console.log('-------------------------------')


        //  this.listeModules.forEach((item: any) => {
        //   if (typeof item === 'number') {
        //     this.idnum.push(item);
        //   } else if (typeof item === 'object') {
        //     this.formateurList.push(item);
        //   }
        // });

        // for (let i = 0; i < this.idnum.length; i++) {
        //   this.formationService.getFormationDataById(this.idnum[i]).subscribe(data => {
        //     this.formateurList.push(data)

        //     listeModules

        //     this.dataSource = new MatTableDataSource(this.formateurList);
        //   })
        // }


        this.dataSource1 = new MatTableDataSource(listeModules);
      });
    }
              
 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  
    if (file) {
      this.fileName = file.name;
  
      const formData = new FormData();
      formData.append("imageFile", file);
  
      const upload$ = this.http.post("http://localhost:8080/api/Formation/upload", formData);
  
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
  
  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  
}

     
    
  

   
  
  


