import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { CompanyResponse } from '../interfaces/company.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrl: './company-information.component.css'
})
export class CompanyInformationComponent implements OnInit{
  public company?: CompanyResponse;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const selectedCompanyId = this.companyService.selectedCompany;
    const selectedCompanyId = this.route.snapshot.queryParamMap.get('company');
    console.log(selectedCompanyId);
    if (selectedCompanyId !== null && !isNaN(+selectedCompanyId)) {
      this.companyService.getCompanyById(+selectedCompanyId).subscribe({
        next: company => {
          this.company = company;
          console.log(this.company);
        },
        error: error => {
          console.error('Error al obtener compañía', error);
        }
      });
    } else {
      console.error('El id de la compañía no es un número');
    }
  }

  goToHiringNeeds(companyId: number) {
    this.router.navigate(['hiring-needs'], { queryParams: { company: companyId } });
  }
}
