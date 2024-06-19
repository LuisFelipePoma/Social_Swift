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
}
