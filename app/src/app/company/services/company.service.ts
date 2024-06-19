import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyRequest, CompanyResponse } from '../interfaces/company.interface';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private sessionStorageKey = 'selectedCompanyId';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<CompanyResponse[]> {
    return this.http.get<CompanyResponse[]>(`${environment.apiURL}/companies`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener compañías', error);
          throw error;
        })
      );
  }

  getCompanyById(id: number): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${environment.apiURL}/companies/${id}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error al obtener compañía', error);
          throw error;
        })
      );
  }

  createCompany(companyResquest: CompanyRequest) {
    return this.http.post<CompanyResponse>(`${environment.apiURL}/companies`, companyResquest)
      .pipe(
        catchError((error: any) => {
          console.error('Error al crear compañía', error);
          throw error;
        })
      );
  }

  set selectedCompanyData(id: number) {
    sessionStorage.setItem(this.sessionStorageKey, id.toString());
  }

  get selectedCompany(): number | null {
    const storedId = sessionStorage.getItem(this.sessionStorageKey);
    return storedId ? parseInt(storedId, 10) : null;
  }

  clearSelectedCompanyId() {
    sessionStorage.removeItem(this.sessionStorageKey);
  }
}
