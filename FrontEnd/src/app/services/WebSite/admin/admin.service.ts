import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';

@Injectable({
  providedIn: 'root'
})
export class ADMINService {

  constructor(private _httpClient: HttpClient) { }

  getDataEtudiant(id:number): Observable<Admin[]> {
    return this._httpClient.get<Admin[]>(`http://localhost:8080/api/Admin/${id}/GetById`);
  }
}
