import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtudiantSimple } from 'src/app/models/Etudiant/EtudiantSimple';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Modules1 } from 'src/app/models/Module1';
import { Modules } from 'src/app/models/Modules';

@Injectable({
  providedIn: 'root'
})
export class DashGeneralService {

  constructor(private _httpClient : HttpClient) {}

  //-------------------------------------API----------------------------------------------

  private apiUrlFormationGet = 'http://localhost:8080/api/Formation/Get';
  private apiUrlFormationPost = 'http://localhost:8080/api/Formation/Post';


  private apiUrlModulePost = 'http://localhost:8080/api/Module/Post';
  private apiUrlModuleGet = 'http://localhost:8080/api/Module/Get';


  private apiUrlEtudiantPost = 'http://localhost:8080/api/Etudiant/Post';
  private apiUrlEtudiantGet = 'http://localhost:8080/api/Etudiant/Get';

  private apiUrlFormateurPost = 'http://localhost:8080/api/Formateur/Post';
  private apiUrlFormateurGet = 'http://localhost:8080/api/Formateur/Get';

  //-------------------------------------API----------------------------------------------



//-----------------------------------Module------------------------------------------------
      saveModuleData(data: any) {
        return this._httpClient.post(this.apiUrlModulePost, data);
      }
    //-----------------------------------------------------------------------------------
      getModuleData(): Observable<Modules[]> {
        return this._httpClient.get<Modules[]>(this.apiUrlModuleGet);
      }
      getModuleData1(): Observable<Modules1[]> {
        return this._httpClient.get<Modules1[]>(this.apiUrlModuleGet);
      }
//-----------------------------------Module------------------------------------------------




//-----------------------------------Etudiant------------------------------------------------
      saveEtudiantData(data: any) {
        return this._httpClient.post(this.apiUrlEtudiantPost, data);
      }
      getEtudiantData(): Observable<EtudiantSimple[]> {
        return this._httpClient.get<EtudiantSimple[]>(this.apiUrlEtudiantGet);
      }

   /*   getEtudiantData(): Promise<any> {
        return this._httpClient.get<any>(this.apiUrlEtudiantGet).toPromise();
      }*/
      
//-----------------------------------Etudiant------------------------------------------------

//-----------------------------------Formateur-----------------------------------------------
      saveFormateurData(data: any) {
        return this._httpClient.post(this.apiUrlFormateurPost, data);
      }
      getFormateurData(): Observable<Formateur[]> {
        return this._httpClient.get<Formateur[]>(this.apiUrlFormateurGet);
      }
//-----------------------------------Formateur-----------------------------------------------


//-----------------------------------Formation-----------------------------------------------
saveFormationData(data: any) {
  return this._httpClient.post(this.apiUrlFormationPost, data);
}
getFormationData(): Observable<Formation[]> {
  return this._httpClient.get<Formation[]>(this.apiUrlFormationGet);
}
//-----------------------------------Formation-----------------------------------------------


searchOption=[]
public FormationData!: Formation[] 
postUrl : string = "http://localhost:8080/api/Formation/Get";
getFormation(): Observable<Formation[]>{
     return this._httpClient.get<Formation[]>(this.postUrl);
}
}
