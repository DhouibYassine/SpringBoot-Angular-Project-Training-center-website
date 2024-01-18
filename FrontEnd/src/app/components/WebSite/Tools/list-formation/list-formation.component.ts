import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { Formation } from 'src/app/models/Formation';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { FormationService } from 'src/app/services/DashBoard/Formation/formation.service';
import { SessionService } from 'src/app/services/Session/session.service';
import { SFormateurService } from 'src/app/services/WebSite/Formateur/sformateur.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {

  dataSource!:any;
  _CURRENT_ID!:number;
  data!: any[];
  dataSourceFormation!:Formateur;
  formationData!:Formation;
  nomFormateur: String='';
  FormationOK:Formation[] = [];
  FormationOKNumber : number[] = [];
  ok:boolean=false;
  mformateur!:number;
  numberTemp!:number;
  filteredFormations:Formation[]= [];
  displayedColumns:any[]=['photo','Nom de Formation','prix', 'dateDebut', 'dateFin', 'horaire','modules','etat','action'];
  constructor(private dashService:DashGeneralService,private sessionService:SessionService, private formationService:FormationService , private router:Router,private formateurService:SFormateurService) {}

  ngOnInit(){


    
    this.sessionService.clear('formationData');

    this._CURRENT_ID=this.sessionService.get("_CURRENT_ID");


console.log('current');
console.log(this._CURRENT_ID);


    this.formateurService.getDataFormateurById(this._CURRENT_ID).subscribe(data => {
      this.data = data;
      console.log(this.data)
      this.sessionService.set('dataSourceFormation',data)


      this.dataSourceFormation = this.sessionService.get('dataSourceFormation');

   
      this.nomFormateur = this.dataSourceFormation.nom +' '+ this.dataSourceFormation.prenom;

    });
//------------  ----------------- ------------- --------------  ------------
  // this.dashService.getFormationData().subscribe(formationData => {

  //   formationData.forEach( f => {
  //       this.numberTemp = f.idFormation;
  //       if( f.etat == "ACTIVE" || f.etat == "IN_PROGRESS"){

  //           f.listeModules.forEach( m =>{              
  //               if(typeof(m.formateur) === "number"){
  //                 this.mformateur=m.formateur
  //                 console.log(this.mformateur=m.formateur)
  //               }
  //             if(this.mformateur == this._CURRENT_ID)
  //               console.log('ayyyh bil7a9')
  //               this.FormationOKNumber.push(this.numberTemp);
              
  //           })
  //        }              
  //     })
  //     console.log(this.FormationOKNumber)
  // })

  this.dashService.getFormationData().subscribe(formationData => {
    formationData.forEach(f => {
      if (f.etat === "ACTIVE" || f.etat === "IN_PROGRESS" || f.etat === "WAITING") {
        const foundModule = f.listeModules.find(m => {
          if (typeof m.formateur === "number") {
            return m.formateur === this._CURRENT_ID;
          } else if (m.formateur && m.formateur.id) {
            return m.formateur.id === this._CURRENT_ID;
          }
          return false;
        });
        if (foundModule) {
          this.FormationOKNumber.push(f.idFormation);
          console.log('Formation exists for current formateur:', f);
        }
      }
    });
    console.log('Filtered formations:', this.FormationOKNumber);

    this.FormationOKNumber.forEach((formationId: number) => {

      this.formationService.getFormationDataById(formationId).subscribe(data =>{
        this.filteredFormations.push(data);
        console.log('##########################################')
        console.log(this.filteredFormations)
        console.log('##########################################')
        this.dataSource = new MatTableDataSource(this.filteredFormations);
      })
    
  
  
    });
  });


  }


  getNomFormateurById(id:number):String{
    this.formateurService.getDataFormateurById(id).subscribe(dataFormateur =>{
      this.sessionService.set('nomFormateurc',dataFormateur)
    })
    const F = this.sessionService.get('nomFormateurc')
    return (F.nom + ' ' + F.prenom ) 
  }







  async AffichePresenceOpen(idFormation:number):Promise<void>{


    this.formationService.getFormationDataById(idFormation).subscribe(formationData => {
        this.sessionService.set('formationData',formationData);
        // console.log(this.sessionService.get('formationData'))
        this.router.navigate(['/Presence']).then(() => {
          location.reload();
        });
    });

   

  }

}
