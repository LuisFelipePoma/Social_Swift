import { Component, OnInit } from '@angular/core';
import { CompanyResponse } from './interfaces/company.interface';
import { Router } from '@angular/router';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companyData: CompanyResponse[] = [];

  constructor(
    private router: Router,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
      this.companyService.getCompanies().subscribe({
        next: companies => {
          this.companyData = companies;
        },
        error: error => {
          console.error('Error al obtener compañías', error);
        }
      });
  }

  selectCompany(companyId: number) {
    console.log(`id: ${companyId}`);
    this.router.navigate(['company'], { queryParams: { company: companyId } });
  }
}
