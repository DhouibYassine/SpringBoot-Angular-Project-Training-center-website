import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {

  constructor(private _httpClient : HttpClient) {}

  private apiUrlFormation = `http://localhost:8080/api/Formation/Get`;

  getDataFormation(): Observable<Formation[]> {
    return this._httpClient.get<Formation[]>(this.apiUrlFormation);
  }

}
