import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { Formation } from 'src/app/models/Formation';
import { DEtudiantService } from 'src/app/services/DashBoard/Etudiant/detudiant.service';
import { ModuleService } from 'src/app/services/DashBoard/Module/module.service';
import { SessionService } from 'src/app/services/Session/session.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';
import { SFormateurService } from 'src/app/services/WebSite/Formateur/sformateur.service';

@Component({
  selector: 'app-presence-affiche',
  templateUrl: './presence-affiche.component.html',
  styleUrls: ['./presence-affiche.component.css']
})
export class PresenceAfficheComponent implements OnInit {
  formationData!:Formation;
  dataSource!:any;
  _CURRENT_ID!:number;
  _CURRENT_PROF!:Formateur;
  xformateur!:number;
  listeEtudiants:Etudiant [] = [];
  _THIS_ID!:number;
  displayedColumns:any[] =[];
  displayedColumnsINT:any[] = [];
  j:number=0;

  
  idList: number[] = [];
  idList1: number[] = [];

  studentList: any[] = [];

 constructor(private etudiantService: DEtudiantService,private moduleService:ModuleService,private formateurService:SFormateurService,private sessionService:SessionService){}
 //displayedColumns:any[]=['photo','Nom de Formation','prix', 'dateDebut', 'dateFin', 'horaire','modules','etat','action'];

//  displayedColumns:any[] = ['etudiant'];
  ngOnInit(): void {
   this.displayedColumns.push('etudiant');
    this.formationData = this.sessionService.get('formationData')
    this.listeEtudiants= this.formationData.listeEtudiants;
          console.log('---------------1------------------')
          console.log(this.listeEtudiants)
          console.log('-----------------------------------')

    this._CURRENT_ID=this.sessionService.get("_CURRENT_ID");
    this.formateurService.getDataFormateurById(this._CURRENT_ID).subscribe(formateur =>{
        this.sessionService.set('formateur',formateur)
      });
    this._CURRENT_PROF =this.sessionService.get('formateur');
          console.log('---------------2------------------')
          console.log(this._CURRENT_PROF)
          console.log('-----------------------------------')
    this.formationData.listeModules.forEach(x => {
        if(Number(x.formateur) == this._CURRENT_ID){
          this._THIS_ID = Number(x.idModule)
        }
    })
   
    this.moduleService.getModuleDataById(this._THIS_ID).subscribe(module => {
      console.log('---------------3------------------')
      console.log(module)
      console.log('-----------------------------------')

      for (let i = 1; i <= module.nombreDeSeance; i++) {
        this.displayedColumns.push(`seance ${i}`);
      }
      for (let i = 0; i < this.displayedColumns.length; i++) {
        console.log(this.displayedColumns[i])
        this.displayedColumnsINT.push(this.j++)
      }
      
    console.log('---------------4------------------')
    console.log(this.displayedColumns)
    console.log('-----------------------------------')
    // const displayedColumns: string[] = ['etudiant']; // Initialize the displayedColumns array with 'etudiant'
    
   console.log('---------------5------------------')
   console.log(this.displayedColumnsINT)
   console.log('-----------------------------------')

    })
    this.fetchStudentList()

   }

   getRange(length: number): number[] {
    return Array.from({ length }, (_, index) => index);
  }
  

   getNomFormateurById(id:number):String{
    this.formateurService.getDataFormateurById(id).subscribe(dataFormateur =>{
      this.sessionService.set('nomFormateurc',dataFormateur)
    })
    const F = this.sessionService.get('nomFormateurc')
    return (F.nom + ' ' + F.prenom ) 
  }

  fetchStudentList() {
    // this.http.get<any[]>('http://localhost:8080/api/Etudiant/Get')
    
        
    this.listeEtudiants.forEach(item => {
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
        
        
  }
  
}
