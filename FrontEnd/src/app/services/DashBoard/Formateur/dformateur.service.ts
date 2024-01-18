import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Formateur } from 'src/app/models/Formateur/Formateur';

@Injectable({
  providedIn: 'root'
})
export class DFormateurService {
  private apiUrlFormateur = 'http://localhost:8080/api/Formateur/Get';
  private apiUrl = `http://localhost:8080/api/Formateur/Delete`;
  constructor(private _httpClient : HttpClient) {}
 private apiUrlUpdate = `http://localhost:8080/api/Formateur/Edit`;
 private apuUrlAccept = `http://localhost:8080/api/Formateur/AccepteFormateur`;
  getData(): Observable<Formateur[]> {
    return this._httpClient.get<Formateur[]>(this.apiUrlFormateur);
  }

  deleteFormateurById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._httpClient.delete<void>(url);
  }
  getFormateurDataById(idModule:number): Observable<Formateur> {
    return this._httpClient.get<Formateur>(`http://localhost:8080/api/Formateur/${idModule}/GetById`);
  }

  updateFormateurById(id: number, formateur: Formateur): Observable<void> {
    const url = `${this.apiUrlUpdate}/${id}`;
    return this._httpClient.put<void>(url, formateur);
  }
  AccepteFormateurById(id: number, formateur: Formateur): Observable<void> {
    const url = `${this.apuUrlAccept}/${id}`;
    return this._httpClient.put<void>(url, formateur);
  }
 
//-----------------------------------------------------
    //  ChatGpt :
    //   getData(): Observable<any[]> 
    //    {
    //      return this.http.get<any[]>(this.apiUrl).pipe(
    //      map(response => response._embedded.data)
    //    );
    //}
//-----------------------------------------------------
}
