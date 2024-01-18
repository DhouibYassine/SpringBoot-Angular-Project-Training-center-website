import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/DashBoard/Formation/formation.service';
import { SessionService } from 'src/app/services/Session/session.service';
import { CourcesService } from 'src/app/services/WebSite/Cources/cources.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';
import Swal from 'sweetalert2';
import { SubscribeDialogComponent } from '../subscribe-dialog/subscribe-dialog.component';
import { ModuleService } from 'src/app/services/DashBoard/Module/module.service';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.css']
})
export class SiteHomeComponent {
  Data!: any[];
  _DATA_ETUDIANT!:any;
  _CURRENT_ID!:any;
  _IS_EXIST=false;
  newFormation!:Formation;
  DataModule!:any[];

  constructor(private dashService:DashGeneralService,private sessionService:SessionService,private formationService:FormationService,private snackBar: MatSnackBar,private dialog:MatDialog,private router:Router,private courcesService:CourcesService,private etudiantService:SEtudiantService,private sessionsService:SessionService){}

    ngOnInit(){

      this.courcesService.getDataFormation().subscribe(data => {
        this.Data = data;
      });

      this.dashService.getModuleData().subscribe(data=>{
        this.DataModule=data;
      })
    }

    async Subscribe(id_Formation:number){
      this._IS_EXIST = false;   
        //-----------tester si il est connecter ou non --------------------------------
          if(this._CURRENT_ID==null){
            this.router.navigate(['/Login']);
          }
        //-----------tester si il est connecter ou non --------------------------------
        //-----------    il ya un personne connecter  ---------------------------------
          else
          {
            //--------------- ouvrir la boite de dialogue -----------------------------
              const dialogRef = this.dialog.open
              (SubscribeDialogComponent, 
                {
                  data: 
                  {
                    title: 'Custom Dialog',
                    content: 'This is a custom dialog.',
                    cancelButton: 'Cancel',
                    confirmButton: 'Confirm'
                  }
                }
              );
            //---------------------------- si vous taper confirmer ---------------------------------
  
                      dialogRef.afterClosed().subscribe(async (x)=>{
                        if(x){                                  
                            //-----------get data of current user -------------------------------------
                              await this.etudiantService.getDataEtudiant(this._CURRENT_ID).toPromise().then(data => {
                                this.sessionsService.set('_DATA_ETUDIANT',data);
                              });
                            //-----------get data of current user -------------------------------------
  
                          //-----------verifier si l'utilisateur est déja abonnée!-------------------
                          this._DATA_ETUDIANT=this.sessionsService.get('_DATA_ETUDIANT');
                                                    
  
  
                          for (let i = 0; i < this._DATA_ETUDIANT.formationDtos.length; i++) {
                            var formation: Formation = this._DATA_ETUDIANT.formationDtos[i];
  
                                if(formation.idFormation == id_Formation){
                                  this._IS_EXIST = true;
                                  //message d'erreur you already subscribed
                                  this.snackBar.open('you already subscribed on this course', 'Fermer', {
                                    duration: 2000, // Durée en millisecondes (facultatif)
                                  });
                                  break;
                                }
  
                          }
                          console.log("----------------------------ani taw dekhel---------------------------")
                            console.log(this._IS_EXIST)
                          console.log("----------------------------ani taw dekhel---------------------------")
  
                          if(this._IS_EXIST == false)
                            {
                                  console.log('mahich mawjouda w ani bch nzid');
                                  //-----------affecter la formation au etudiant connecter-------------------
                                  /*this.etudiantService.AffectFormation(this._CURRENT_ID,id_Formation).subscribe(data =>{
                                    console.log(data);
                                  });*/
                                  this.etudiantService.AffectFormation(this._CURRENT_ID, id_Formation).subscribe(data => {
                                      console.log("done");
                                    });
                                  
                              this.formationService.getFormationDataById(id_Formation).subscribe(formation => {
                                  this.newFormation = formation;
                                  this.newFormation.listeEtudiants.push(this._DATA_ETUDIANT);
                                  this.formationService.AjouterEtudiantàFormation(id_Formation,this.newFormation).subscribe(data =>{
                                    
  
                                  })
  
  
                              })
                                  
                                  //-----------Congratulation avec recharger la page -------------------------
                                      //window.location.reload();
                                      Swal.fire({
                                        title: 'Congratulation!',
                                        text: 'You have been subscribed.',
                                        icon: 'success'
                                      }).then(() => {
                                        location.reload();
                                      });    
                                  //-----------Congratulation avec recharger la page -------------------------
           
                            }     
                        }
                      }
            
            )
          }
        //-----------    il ya un personne connecter  ---------------------------------
  
      }
}
