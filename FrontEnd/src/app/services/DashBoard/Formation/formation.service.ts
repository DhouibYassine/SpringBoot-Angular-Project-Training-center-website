import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = `http://localhost:8080/api/Formation/Delete`;
  private apiUlrAjoutModule=`http://localhost:8080/api/Formation/AjouterModuleàFormation`;
  private apiUlrAjoutEtudiant=`http://localhost:8080/api/Formation/AjouterEtudiantàFormation`;

  constructor(private http: HttpClient,private _httpClient : HttpClient) {}

  deleteFormationById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._httpClient.delete<void>(url);
  }

 
  getFormationDataById(idFormation:number): Observable<Formation> {
    return this._httpClient.get<Formation>(`http://localhost:8080/api/Formation/${idFormation}/GetById`);
  }
  private apiUlrUpdate =`http://localhost:8080/api/Formation/Edit`

  updateFormateurById(id: number, formation: Formation): Observable<void> {
    const url = `${this.apiUlrUpdate}/${id}`;
    return this._httpClient.put<void>(url, formation);
  }

  AjouterModuleàFormation(id: number, formation: Formation): Observable<void> {
    const url = `${this.apiUlrAjoutModule}/${id}`;
    return this._httpClient.put<void>(url, formation);
  }

  AjouterEtudiantàFormation(id: number, formation: Formation): Observable<void> {
    const url = `${this.apiUlrAjoutEtudiant}/${id}`;
    return this._httpClient.put<void>(url, formation);
  }

  

}
