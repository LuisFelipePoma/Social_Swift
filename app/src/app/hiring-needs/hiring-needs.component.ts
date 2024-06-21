import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company/services/company.service';
import { HiringNeedsService } from './services/hiring-needs.service';
import { NeedResponse } from './interfaces/hiring-needs.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hiring-needs',
  templateUrl: './hiring-needs.component.html',
  styleUrl: './hiring-needs.component.css'
})
export class HiringNeedsComponent implements OnInit{
  
  public needsData: NeedResponse[] = [];

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private hiringNeedsService: HiringNeedsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const selectedCompanyId = this.route.snapshot.queryParamMap.get('company');
    console.log(selectedCompanyId);
    if (selectedCompanyId !== null && !isNaN(+selectedCompanyId)) {
      this.hiringNeedsService.getAllNeedsByCompany(+selectedCompanyId).subscribe({
        next: needs => {
          this.needsData = needs;
        },
        error: error => {
          console.error('Error al obtener necesidades');
        }
      });
    } else {
      console.error('El id de la compañía no es un número');
    }
  }

  selectNeed(needId: number) {
    this.hiringNeedsService.selectedNeedData = needId;
    console.log(`id: ${needId}`);
    this.router.navigate(['hiring-needs/information']);
  }
}
