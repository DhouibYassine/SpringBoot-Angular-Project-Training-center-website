import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class SEtudiantService {

  constructor(private _httpClient: HttpClient, private sanitizer: DomSanitizer){}

  private apiUrlEtudiant = 'http://localhost:8080/api/Etudiant/Post';

  saveDataE(data: any) {  
    return this._httpClient.post('http://localhost:8080/api/Etudiant/Post', data);
  }

  getDataEtudiant(idEtudiant:number): Observable<Etudiant[]> {
    return this._httpClient.get<Etudiant[]>(`http://localhost:8080/api/Etudiant/${idEtudiant}/GetById`);
  }

  AffectFormation(id_current_user:number,id_Formation:number):Observable<any>{
    return this._httpClient.post(`http://localhost:8080/api/Etudiant/etudiants/${id_current_user}/${id_Formation}`,null);
  }
 /*AffectFormation(id_current_user: number, id_Formation: number): Promise<any> {
    return this._httpClient.post(`http://localhost:8080/api/Etudiant/etudiants/${id_current_user}/${id_Formation}`, null)
      .toPromise()
      .then(response => {
        // Handle the response from the server
        return response;
      })
      .catch(error => {
        // Handle any errors that occur during the request
        throw error;
      });
  }*/
 

}
