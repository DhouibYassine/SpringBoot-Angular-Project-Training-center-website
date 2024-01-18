import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { Etudiant } from 'src/app/models/Etudiant/Etudiant';
import { EtudiantLogin } from 'src/app/models/Etudiant/EtudiantLogin';
import { Formateur } from 'src/app/models/Formateur/Formateur';
import { FormateurLogin } from 'src/app/models/Formateur/FormateurLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrlEtudiant = `http://localhost:8080/api/Authentification/loginEtudiant`;
  private apiUrlAdmin = `http://localhost:8080/api/Authentification/loginAdmin`;


  constructor(private _httpClient: HttpClient) { }

    getIdOfEtudiant(data: EtudiantLogin): Observable<Etudiant> {
    return this._httpClient.post<Etudiant>(this.apiUrlEtudiant,data);
    } 

    getIdOfFormateur(data: FormateurLogin): Observable<Formateur> {
      return this._httpClient.post<Formateur>(this.apiUrlFormateur, data);
    }
    
    private apiUrlFormateur = `http://localhost:8080/api/Authentification/loginFormateur`;
    // getIdOfFormateur(data: FormateurLogin): Observable<Formateur> {
    //   return this._httpClient.post<Formateur>(this.apiUrlFormateur,data);
    //   } 

    getIdOfAdmin(data: Admin): Observable<Admin> {
    return this._httpClient.post<Admin>(this.apiUrlAdmin,data);
    } 
}
