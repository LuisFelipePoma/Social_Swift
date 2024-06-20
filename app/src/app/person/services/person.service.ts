import { PersonCreateResponse } from './../interfaces/person.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonRequest, PersonResponse } from '../interfaces/person.interface';
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

  moveToBlacklist(id: number): Observable<PersonResponse> {
    return this.http.put<PersonResponse>(`${environment.apiURL}/people/blacklists/${id}`, null)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener persona', error);
          throw error;
        })
      );
  }

  createPerson(personRequest: PersonRequest): Observable<PersonCreateResponse> {
    
    return this.http.post<PersonCreateResponse>(`${environment.apiURL}/people`, personRequest)
      .pipe(
        catchError((error: any) => {
          console.error('Error al crear persona', error);
          throw error;
        })
      );
  }
}
