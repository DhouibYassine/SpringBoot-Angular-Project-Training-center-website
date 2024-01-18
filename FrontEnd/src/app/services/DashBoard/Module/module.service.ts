import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modules1 } from 'src/app/models/Module1';
import { Modules } from 'src/app/models/Modules';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = `http://localhost:8080/api/Module/Delete`;
  private apiUlrUpdate =`http://localhost:8080/api/Module/Edit`
  constructor(private http: HttpClient,private _httpClient : HttpClient) {}

  deleteModuleById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._httpClient.delete<void>(url);
  }
  getModuleDataById(idModule:number): Observable<Modules> {
    return this._httpClient.get<Modules>(`http://localhost:8080/api/Module/${idModule}/GetById`);
  }

  
  updateModuleById(id: number, module: Modules): Observable<void> {
    const url = `${this.apiUlrUpdate}/${id}`;
    return this._httpClient.put<void>(url, module);
  }
  

}
