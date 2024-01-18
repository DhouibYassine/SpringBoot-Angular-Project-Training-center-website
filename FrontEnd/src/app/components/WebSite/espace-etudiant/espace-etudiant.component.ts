import { Component } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { Formation } from 'src/app/models/Formation';
import { SessionService } from 'src/app/services/Session/session.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css']
})
export class EspaceEtudiantComponent {
  _CURRENT_ID!:any;
  _DATA_ETUDIANT!:Etudiant;
  _TEST!: any;
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

      //console.log(this._TEST.length)

        

    console.log("-----------------------------------------------------------------------------------")
  }

}
