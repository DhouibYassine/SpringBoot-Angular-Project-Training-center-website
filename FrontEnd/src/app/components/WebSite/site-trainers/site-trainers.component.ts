import { Component } from '@angular/core';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';

@Component({
  selector: 'app-site-trainers',
  templateUrl: './site-trainers.component.html',
  styleUrls: ['./site-trainers.component.css']
})
export class SiteTrainersComponent {
  DataModule!:any[];

  constructor(private dashService:DashGeneralService){}
  ngOnInit(){
    this.dashService.getModuleData().subscribe(data=>{
      this.DataModule=data;
    })
  }


}
