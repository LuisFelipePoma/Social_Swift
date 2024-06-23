import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HiringResponse } from '../interfaces/hiring.interface';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiringService {
  
  constructor(private http: HttpClient) { }

  getOKHirings(companyId: number): Observable<HiringResponse[]> {
    return this.http.get<HiringResponse[]>(`${environment.apiURL}/hirings/companies/${companyId}/OK`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener contrataciones', error);
          throw error;
        })
      );
  }

  getFinishedHirings(companyId: number): Observable<HiringResponse[]> {
    return this.http.get<HiringResponse[]>(`${environment.apiURL}/hirings/companies/${companyId}/finished`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener contrataciones', error);
          throw error;
        })
      );
  }

  getCanceledHirings(companyId: number): Observable<HiringResponse[]> {
    return this.http.get<HiringResponse[]>(`${environment.apiURL}/hirings/companies/${companyId}/canceled`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener contrataciones', error);
          throw error;
        })
      );
  }

  cancelHiring(id: number): Observable<HiringResponse> {
    return this.http.put<HiringResponse>(`${environment.apiURL}/hirings/cancel/${id}`, null)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cancelar contratación', error);
          throw error;
        })
      )
  }

  finishHiring(id: number): Observable<HiringResponse> {
    return this.http.put<HiringResponse>(`${environment.apiURL}/hirings/finish/${id}`, null)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cancelar contratación', error);
          throw error;
        })
      )
  }
}
