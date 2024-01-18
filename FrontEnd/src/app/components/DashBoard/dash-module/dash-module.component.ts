import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete/confirm-dialog-delete.component';
import { ModuleService } from 'src/app/services/DashBoard/Module/module.service';
import { Modules } from 'src/app/models/Modules';
import { SessionService } from 'src/app/services/Session/session.service';
import { DFormateurService } from 'src/app/services/DashBoard/Formateur/dformateur.service';

@Component({
  selector: 'app-dash-module',
  templateUrl: './dash-module.component.html',
  styleUrls: ['./dash-module.component.css']
})
export class DashModuleComponent {
  data!: any[];
  dataSource!:any;
  myForm!: FormGroup;
  myNewForm!: FormGroup;
  buttonDisabled = false;
  module!:any;
  _ID_MODULE!:number;
  formateurs!:any[];
  NEWFORMATEUR!:any;
  constructor(private formateurService:DFormateurService,  private sessionService:SessionService,private formBuilder: FormBuilder,private dialog:MatDialog,private dashGeneralService: DashGeneralService, private router:Router,private moduleService:ModuleService) {}
  displayedColumns:any[]=[ 'Nom de Module','description','NombreDeSeance','nomFormateur','icon'];

  ngOnInit() {
    this.sessionService.clear('NEWFORMATEUR');
    this.dashGeneralService.getModuleData().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
    });
    this.dataSource = new MatTableDataSource(this.data);

    this.dashGeneralService.getFormateurData().subscribe(data =>{
      this.formateurs =data;

      
    })

    
this.initForm();
    this.myNewForm = new FormGroup({
      NewnomModule: new FormControl('',Validators.required),
      NewHoraire: new FormControl('',Validators.required),
      NewNbSeance: new FormControl('',Validators.required),
      NewFormateur: new FormControl('',Validators.required),
    })
  }

  initForm(){
    this.myForm = new FormGroup({
      nomModule: new FormControl('',Validators.required),
      Horaire: new FormControl('',Validators.required),
      NbSeance: new FormControl('',Validators.required),
      Formateur: new FormControl('',Validators.required),

    });
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmitNew() {
    // this.buttonDisabled = true;
    console.log('najd')
    const nomModuleValue = (document.getElementById('NewnomModule') as HTMLInputElement).value;
    const NewHoraire = parseInt((document.getElementById('NewHoraire') as HTMLInputElement).value, 10);
    const NewNbSeance = parseInt((document.getElementById('NewNbSeance') as HTMLInputElement).value, 10);
    const NewIDFormateur = parseInt((document.getElementById('NewFormateur') as HTMLInputElement).value , 10);
    console.log(NewIDFormateur)
    // const NewFormateur = (document.getElementById('Newdescription') as HTMLInputElement).value as unknown as Formateur;

    this.formateurService.getFormateurDataById(NewIDFormateur).subscribe(FD =>{
      // this.sessionService.set('NEWFORMATEUR',FD)
      

    this.NEWFORMATEUR = FD;

      const newModel :Modules={
        idModule: 0,
        nomModule: nomModuleValue,
        horaire: NewHoraire,
        nombreDeSeance: NewNbSeance,
        formateur: this.NEWFORMATEUR,
      }
      this.dashGeneralService.saveModuleData(newModel).subscribe(response => {
       console.log(response);

     });
      window.location.reload();
    });
   }

  onSubmit() { 
    this.buttonDisabled = true;
    console.log(this.myForm.value)
    this.moduleService.updateModuleById(this._ID_MODULE,this.myForm.value).subscribe(response => {
      console.log(response);
      // window.location.reload();
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
          this.moduleService.deleteModuleById(id)
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

  openModal(id: number) {
    this._ID_MODULE=id;
    this.moduleService.getModuleDataById(id)
      .subscribe(
        (module) => {
          console.log(module)
          this.module = module;
          this.myForm.patchValue({
            nomModule: this.module.nomModule,
            Horaire: this.module.horaire,
            NbSeance: this.module.nombreDeSeance,
            Formateur: this.module.formateur,
          });
      },
        (error) => {
          console.error('Failed openModal:', error);
        }
      );
  }
  
}
