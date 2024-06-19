import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonResponse } from '../interfaces/person.interface';
import { environment } from '../../../environments/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<PersonResponse[]> {
    return this.http.get<PersonResponse[]>(`${environment.apiURL}/people`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener personas', error);
          throw error;
        })
      );
  }

  getBlacklist(): Observable<PersonResponse[]> {
    return this.http.get<PersonResponse[]>(`${environment.apiURL}/people/blacklists`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener personas', error);
          throw error;
        })
      );
  }

  getPeopleById(id: number): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(`${environment.apiURL}/people/${id}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener persona', error);
          throw error;
        })
      );
  }


}
