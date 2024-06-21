import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { NeedResponse } from '../interfaces/hiring-needs.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HiringNeedsService {

  // private sessionStorageKey = 'selectedNeedId';

  constructor(private http: HttpClient) { }

  getAllNeedsByCompany(companyId: number): Observable<NeedResponse[]> {
    return this.http.get<NeedResponse[]>(`${environment.apiURL}/needs/company/${companyId}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener necesidades', error);
          throw error;
        })
      );
  }

  getNeedById(id: number): Observable<NeedResponse> {
    return this.http.get<NeedResponse>(`${environment.apiURL}/needs/${id}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener necesidad');
          throw error;
        })
      );
  }

  // set selectedNeedData(id: number) {
  //   sessionStorage.setItem(this.sessionStorageKey, id.toString());
  // }

  // get selectedNeed(): number | null {
  //   const storedId = sessionStorage.getItem(this.sessionStorageKey);
  //   return storedId ? parseInt(storedId, 10) : null;
  // }

  // clearSelectedNeedId(){
  //   sessionStorage.removeItem(this.sessionStorageKey);
  // }
}
