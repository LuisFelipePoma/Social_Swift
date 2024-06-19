import { Component, OnInit } from '@angular/core';
import { HiringResponse } from './interfaces/hiring.interface';
import { HiringService } from './services/hiring.service';
import { CompanyService } from '../company/services/company.service';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css'
})
export class HiringComponent implements OnInit{
  hiringsData: HiringResponse[] = [];

  constructor(
    private hiringService: HiringService,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    const selectedCompanyId = this.companyService.selectedCompany;
    if (typeof selectedCompanyId === 'number') {
      this.hiringService.getOKHirings(selectedCompanyId).subscribe({
        next: hirings => {
          this.hiringsData = hirings;
          console.log(this.hiringsData);
        },
        error: error => {
          console.error('Error al obtener contrataciones');
        }
      });
    } else {
      console.error('El id de la compañía no es un número');
    }
  }
}
