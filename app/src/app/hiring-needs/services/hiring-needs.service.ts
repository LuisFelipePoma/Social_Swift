import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { NeedRequest, NeedResponse } from '../interfaces/hiring-needs.interface';
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

  createNeed(needRequest: NeedRequest): Observable<NeedResponse> {
    return this.http.post<NeedResponse>(`${environment.apiURL}/needs`, needRequest)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener aviso de contratación');
          throw error;
        })
      );
  }

  closeNeed(id: number): Observable<NeedResponse> {
    return this.http.put<NeedResponse>(`${environment.apiURL}/needs/${id}`, null)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener aviso de contratación');
          throw error;
        })
      );
  }
}
