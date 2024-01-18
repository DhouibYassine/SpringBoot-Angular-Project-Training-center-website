import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { EtudiantSimple } from 'src/app/models/Etudiant/EtudiantSimple';

@Injectable({
  providedIn: 'root'
})
export class DEtudiantService {

  private apiUrlEtudiant = 'http://localhost:8080/api/Etudiant/Get';
  private apiUrl = `http://localhost:8080/api/Etudiant/Delete`;
  private apiUlrUpdate = "http://localhost:8080/api/Etudiant/Edit";
  constructor(private http: HttpClient,private _httpClient : HttpClient) {}

  getData(): Observable<Etudiant[]> {
    return this._httpClient.get<Etudiant[]>(this.apiUrlEtudiant);
  }
  deleteEtudiantById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._httpClient.delete<void>(url);
  }

  getDataEtudiant(idEtudiant:number): Observable<Etudiant[]> {
    return this._httpClient.get<Etudiant[]>(`http://localhost:8080/api/Etudiant/${idEtudiant}/GetById`);
  }

  updateEtudiantById(id: number, etudiant: EtudiantSimple): Observable<void> {
    const url = `${this.apiUlrUpdate}/${id}`;
    return this._httpClient.put<void>(url, etudiant);
  }
  
}
