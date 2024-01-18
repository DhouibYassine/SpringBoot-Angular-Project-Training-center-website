import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { SessionService } from 'src/app/services/Session/session.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit{

  _CURRENT_ID!:any;
  _DATA_ETUDIANT!:Etudiant;
  _TEST!: any;
  dataSource!:any;
  displayedColumns:any[]=['id', 'Nom de Formation','prix', 'dateDebut', 'dateFin', 'horaire','etat','nbEtudiant','action'];
constructor(private sessionsService:SessionService,private etudiantService:SEtudiantService){
  this._CURRENT_ID=this.sessionsService.get('_CURRENT_ID');
 
  this.etudiantService.getDataEtudiant(this._CURRENT_ID).toPromise().then(data => {
   this.sessionsService.set('_DATA_ETUDIANT',data);
 });
 
 this.function()
 
}

  ngOnInit(){
    this._CURRENT_ID=this.sessionsService.get('_CURRENT_ID');
 
     this.etudiantService.getDataEtudiant(this._CURRENT_ID).toPromise().then(data => {
      this.sessionsService.set('_DATA_ETUDIANT',data);

    });
    
    this.function()
    
  }

  function(){
    console.log("-----------------------------------------------------------------------------------")
    this._DATA_ETUDIANT=this.sessionsService.get('_DATA_ETUDIANT')
   this._TEST= this._DATA_ETUDIANT.formationDtos
   this.dataSource = new MatTableDataSource(this._TEST);


      //console.log(this._TEST.length)

        

    console.log("-----------------------------------------------------------------------------------")
  }
  Cancel(id:number){
    
  }

}
