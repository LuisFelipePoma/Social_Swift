import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError } from 'rxjs'
import { environment } from '../../../environments/environment'
import { AdmisionResponse } from '../interfaces/admision.interface'

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

  rejectAdmisionById (admisionId: number): Observable<AdmisionResponse> {
    return this.http
      .get<AdmisionResponse>(
        `${environment.apiURL}/admissions/${admisionId}/reject`
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener admisiones a procesar', error)
          throw error
        })
      )
  }

	acceptAdmisionById (admisionId: number): Observable<AdmisionResponse> {
		return this.http
			.get<AdmisionResponse>(
				`${environment.apiURL}/admissions/${admisionId}/admit`
			)
			.pipe(
				catchError((error: any) => {
					console.error('Error al obtener admisiones a procesar', error)
					throw error
				})
			)
	}
}
