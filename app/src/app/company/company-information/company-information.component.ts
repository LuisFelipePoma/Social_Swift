import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { CompanyResponse } from '../interfaces/company.interface';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrl: './company-information.component.css'
})
export class CompanyInformationComponent implements OnInit{
  public company?: CompanyResponse;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    const selectedCompanyId = this.companyService.selectedCompany;
    if (typeof selectedCompanyId === 'number') {
      this.companyService.getCompanyById(selectedCompanyId).subscribe({
        next: company => {
          this.company = company;
        },
        error: error => {
          console.error('Error al obtener compañía');
        }
      });
    } else {
      console.error('El id de la compañía no es un número');
    }
  }
}
