import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from 'src/app/models/Formateur/Formateur';

@Injectable({
  providedIn: 'root'
})
export class SFormateurService {

  constructor(private _httpClient: HttpClient){}

 private apiUrlGetIDForm=`http://localhost:8080/api/Authentification/loginFormateur`;
  private apiUrlImage="http://localhost:8080/api/Formateur/upload";
  private apiUrlFormateur = 'http://localhost:8080/api/Formateur/Post';
  saveDataF(data: any) {
    return this._httpClient.post(this.apiUrlFormateur, data);
  }

  saveImage(data:any){
    return this._httpClient.post(this.apiUrlImage,data);
  }

  getIdByFormateur(formateur: number) {
    const url = this.apiUrlGetIDForm;
    return this._httpClient.get(url);
  }

  
  getDataFormateurById(idFormateur:number): Observable<Formateur[]> {
    return this._httpClient.get<Formateur[]>(`http://localhost:8080/api/Formateur/${idFormateur}/GetById`);
  }
  
}
