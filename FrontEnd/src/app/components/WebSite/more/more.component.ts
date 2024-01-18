import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { Modules } from 'src/app/models/Modules';
import { FormationService } from 'src/app/services/DashBoard/Formation/formation.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit{
  id_Formation: number;
  Data!:Formation;
  DataModule!:Modules[];
  constructor(private formationService:FormationService) {
    this.id_Formation = history.state.variable;
    console.log('********************************')
    console.log(this.id_Formation);
    console.log('********************************')
  }
  ngOnInit(): void {
    this.formationService.getFormationDataById(this.id_Formation).subscribe( Data => {
      // console.log(Data);
      this.Data = Data;
      this.DataModule = this.Data.listeModules;
      console.log(this.DataModule);


    })
  }


  

  
}
