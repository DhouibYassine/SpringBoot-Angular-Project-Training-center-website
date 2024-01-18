import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { FormateurLogin } from 'src/app/models/Formateur/FormateurLogin';
import { Formation } from 'src/app/models/Formation';
import { SessionService } from 'src/app/services/Session/session.service';
import { AuthentificationService } from 'src/app/services/WebSite/Authentification/authentification.service';
import { SEtudiantService } from 'src/app/services/WebSite/Etudiant/setudiant.service';
import { SFormateurService } from 'src/app/services/WebSite/Formateur/sformateur.service';

@Component({
  selector: 'app-site-login',
  templateUrl: './site-login.component.html',
  styleUrls: ['./site-login.component.css']
})
export class SiteLoginComponent {
  myForm!: FormGroup;
  response!:Number;
  result!:any;
  test!:number;  
  _CURRENT_USER!:String;
  _CURRENT_ID!:number;
  constructor(private etudiantService:SEtudiantService,private formateurService:SFormateurService,  private authentificationService:AuthentificationService , private router:Router,private sessionService:SessionService) { }

  ngOnInit() {
    this.sessionService.clear("response")
    this.sessionService.clear("_CURRENT_ID");
    this.sessionService.clear("_CURRENT_USER")
    this.myForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),  
    });
  }

  
  

  

  async onSubmit() {
    console.log("HD")
    this.sessionService.clear("_CURRENT_ID");
    this.sessionService.clear("_CURRENT_USER")
    this.test=0;
    const newAdmin: Admin = {
      id: 0,
      email: this.myForm.value.email,
      password: this.myForm.value.password
    };

    const newEtudiant: Etudiant = {
      id: 0,
      nom: '',
      prenom: '',
      cin: 0,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      photo: '',
      sexe: '',
      dateDeNaissance: new Date,
      lieuDeNaissance: '',
      niveauEtude: '',
      numTel: 0,
      adresse: '',
      civilite: '',
      formationDtos: new Formation
    };

    const newFormateur: FormateurLogin = {
    
      email: this.myForm.value.email,
      password: this.myForm.value.password,
     
    };
    console.log("--------------------------------------------------------------------------") 
    console.log(newFormateur);
    console.log("--------------------------------------------------------------------------") 
    console.log("creation done");

  try{
    if(await this.IsFormateur(newFormateur)!=0)
    {
      console.log("yes , i'm here")
      this.response = await this.IsFormateur(newFormateur);
      console.log("yes , i'm here IsFormateur")

      this.sessionService.set("_CURRENT_USER","Formateur");
      this.sessionService.set("_CURRENT_ID",this.response);
        console.log("--------------------------Login Success ----------------------------------")
        console.log("_CURRENT_USER : ");console.log(this.sessionService.get("_CURRENT_USER"))
        console.log("THE _CURRENT_ID : ");console.log(this.sessionService.get("_CURRENT_ID"))
        console.log("--------------------------------------------------------------------------") 
      this.router.navigate(['/WebSiteHome']);
      setTimeout(() => {
        // Reload the page
        window.location.reload();
      }, 50);

     
    }
  }
  catch(error){
    this.test++;
    console.log("LOG IN FORMATEUR ERROR "+this.test)
  }

  try{
    if(await this.IsADMIN(newAdmin)!=0)
    {
      console.log("yes , i'm admin")
      this.response = await this.IsADMIN(newAdmin);
      this.sessionService.set("_CURRENT_USER","Admin");
      this.sessionService.set("_CURRENT_ID",this.response);
console.log("--------------------------Login Success ----------------------------------")
console.log("_CURRENT_USER : ");console.log(this.sessionService.get("_CURRENT_USER"))
console.log("THE _CURRENT_ID : ");console.log(this.sessionService.get("_CURRENT_ID"))
console.log("--------------------------------------------------------------------------") 
      this.sessionService.login();
      this.router.navigate(['/DashHome']);
      
    }
  }
  catch(error){
    this.test++;
    console.log("LOG IN BOSS ERROR "+this.test)
  }


  try{
    if(await this.IsEtudiant(newEtudiant)!=0)
    {
      this.response = await this.IsEtudiant(newEtudiant);
      this.sessionService.set("_CURRENT_USER","Etudiant");
      this.sessionService.set("_CURRENT_ID",this.response);
console.log("--------------------------Login Success ----------------------------------")
console.log("_CURRENT_USER : ");console.log(this.sessionService.get("_CURRENT_USER"))
console.log("THE _CURRENT_ID : ");console.log(this.sessionService.get("_CURRENT_ID"))
console.log("--------------------------------------------------------------------------") 
      this.router.navigate(['/WebSiteHome']);
      setTimeout(() => {
        // Reload the page
        window.location.reload();
      }, 50);
    }
  }
  catch(error){
    this.test++;
    console.log("LOG IN ETUDIANT ERROR "+this.test)
  }

   
}
    async IsFormateur(newFormateur:FormateurLogin):Promise<Number>{  
    console.log('yes its all true')

    const formateurResponse = await this.authentificationService.getIdOfFormateur(newFormateur).toPromise();
    console.log('const its all true')

    if (formateurResponse != null) {
          console.log('yes its true')
        this.authentificationService.getIdOfFormateur(newFormateur).subscribe((response)=>{
          this.sessionService.set("response",response);
        })

        return this.sessionService.get("response");
    }
    else
    {
      return 0;
    }
  }
    async IsADMIN(newAdmin:Admin):Promise<Number>{ 
    const adminResponse = await this.authentificationService.getIdOfAdmin(newAdmin).toPromise();
    if (adminResponse != null) {

        this.authentificationService.getIdOfAdmin(newAdmin).subscribe((response)=>{
          this.sessionService.set("response",response);
        })

        return this.sessionService.get("response");
    }
    else
    {
      return 0;
    }
  }
    async IsEtudiant(newEtudiant:Etudiant):Promise<Number>{ 
        const etudiantResponse = await this.authentificationService.getIdOfEtudiant(newEtudiant).toPromise();
        if (etudiantResponse != null) {

            this.authentificationService.getIdOfEtudiant(newEtudiant).subscribe((response)=>{
              this.sessionService.set("response",response);
            })

            return this.sessionService.get("response");
        }
        else
        {
          return 0;
        }
  }
}
