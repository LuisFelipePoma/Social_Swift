import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, map } from 'rxjs'
import { environment } from '../../../environments/environment'
import {
  AdmisionProcessResponse,
  AdmisionResponse
} from '../interfaces/admision.interface'

@Injectable({
  providedIn: 'root'
})
export class AdmisionService {
  constructor (private http: HttpClient) {}

  getAllAdmisionsById (needId: number): Observable<AdmisionResponse[]> {
    return this.http
      .get<AdmisionResponse[]>(
        `${environment.apiURL}/admissions/needs/${needId}`
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener admisiones a procesar', error)
          throw error
        })
      )
  }

  rejectAdmissionById (admissionId: number): Observable<AdmisionResponse> {
    return this.http
      .put<AdmisionResponse>(
        `${environment.apiURL}/admissions/${admissionId}/reject`,
        {}
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error rejecting admission', error)
          throw error
        })
      )
  }

  createAdmisionProcess (
    person: number,
    hiringNeed: number
  ): Observable<AdmisionProcessResponse> {
    return this.http
      .post<AdmisionProcessResponse>(`${environment.apiURL}/admissions`, {
        person,
        hiringNeed,
        applicationDate: new Date(),
        interviewDate: new Date()
      })
      .pipe(
        catchError((error: any) => {
          console.error('Error creating admision', error)
          throw error
        })
      )
  }

  acceptAdmissionById (admisionId: number): Observable<AdmisionResponse> {
    return this.http
      .put<AdmisionResponse>(
        `${environment.apiURL}/admissions/${admisionId}/admit`,
        {}
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener admisiones a procesar', error)
          throw error
        })
      )
  }
}
