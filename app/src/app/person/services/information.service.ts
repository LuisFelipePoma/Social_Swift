import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CreateInformationRequest, InformationResponse } from '../interfaces/working-information.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  createInformation(informationRequest: CreateInformationRequest): Observable<InformationResponse> {
    return this.http.post<InformationResponse>(`${environment.apiURL}/informations`, informationRequest)
      .pipe(
        catchError((error: any) => {
          console.error('Error al crear persona', error);
          throw error;
        })
      );
  }
}
