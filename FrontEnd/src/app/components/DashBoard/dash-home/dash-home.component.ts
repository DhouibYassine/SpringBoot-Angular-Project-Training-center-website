import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { DashGeneralService } from 'src/app/services/DashBoard/DashGeneralService/dash-general.service';
import { SessionService } from 'src/app/services/Session/session.service';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit{

  nb_Etudiant!:number;
  nb_Formateur!:number;
  nb_Module!:number;
  nb_Formation!:number;
  data!: number[];

  constructor(private dashService:DashGeneralService,private sessionService:SessionService){}

 

  ngOnInit(): void {
    this.dashService.getEtudiantData().subscribe(data =>{
      this.sessionService.set('nb_Etudiant',data.length);
    })

    this.dashService.getFormateurData().subscribe(data =>{
      this.sessionService.set('nb_Formateur',data.length);
    })

    this.dashService.getFormationData().subscribe(data =>{
      this.sessionService.set('nb_Formation',data.length);
    })

    this.dashService.getModuleData().subscribe(data =>{
      this.sessionService.set('nb_Module',data.length);
    })
    
    this.nb_Etudiant = this.sessionService.get('nb_Etudiant');
    this.nb_Formateur = this.sessionService.get('nb_Formateur');
    this.nb_Formation = this.sessionService.get('nb_Formation');
    this.nb_Module = this.sessionService.get('nb_Module');
    console.log(typeof(this.nb_Etudiant))
    console.log(this.nb_Formateur)
    console.log(this.nb_Formation)
    console.log(this.nb_Module)

    this.data = [];
    // this.data.push(this.nb_Etudiant);
    // this.data.push(this.nb_Formateur);
    // this.data.push(this.nb_Formation);
    // this.data.push(this.nb_Module);
    console.log(this.data)

    this.data=[10,2,2,5]
    // this.pieData[1].data = this.data;
    // console.log(this.pieData[1].data)
  }
  
  pieData: ChartDataset[] = [
    {
      label: 'Nombre De Membre',
      data: [10,2,2,5],
      backgroundColor: ['pink', 'green', 'blue', 'purple '],
    }
  ];
  

  pieLabel:String[]=["Student","Teacher","Formation","Module"];



  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: false,

    // ⤵️ Remove the grids
    scales: {
      xAxis: {
        display: false,
        grid: {
          //drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: false
      }
    },

    // ️ Remove the main legend
    plugins: {
      legend: {
        display: true
      }
    }
  };




  // chartData: ChartDataset[] = [
  //   {
  //     label: 'Nombre d\'Articles',
  //     data: [4,99,55]
  //   }
  // ];

  // chartLabels: string[] = ["Student","Teacher","najd"];




}