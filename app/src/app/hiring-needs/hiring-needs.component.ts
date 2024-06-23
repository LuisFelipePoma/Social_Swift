import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company/services/company.service';
import { HiringNeedsService } from './services/hiring-needs.service';
import { NeedResponse } from './interfaces/hiring-needs.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogCreateNeedComponent } from './dialog-create-need/dialog-create-need.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyResponse } from '../company/interfaces/company.interface';

@Component({
  selector: 'app-hiring-needs',
  templateUrl: './hiring-needs.component.html',
  styleUrl: './hiring-needs.component.css'
})
export class HiringNeedsComponent implements OnInit{
  
  public needsData: NeedResponse[] = [];
  selectedCompanyId?: string | null;
  company?: CompanyResponse | null;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private hiringNeedsService: HiringNeedsService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.selectedCompanyId = this.route.snapshot.queryParamMap.get('company');
    console.log(this.selectedCompanyId);
    if (this.selectedCompanyId !== null && !isNaN(+this.selectedCompanyId)) {
      this.companyService.getCompanyById(+this.selectedCompanyId).subscribe({
        next: company => {
          this.company = company;
        },
        error: error => {
          console.error('Error al obtener compañía');
        }
      });

      this.getAllNeeds(+this.selectedCompanyId);
      
    } else {
      console.error('El id de la compañía no es un número');
    }
  }

  getAllNeeds(id: number): void {
    this.hiringNeedsService.getAllNeedsByCompany(id).subscribe({
      next: needs => {
        this.needsData = needs;
      },
      error: error => {
        console.error('Error al obtener necesidades');
      }
    });
  }

  selectNeed(needId: number) {
    // this.hiringNeedsService.selectedNeedData = needId;
    console.log(`id: ${needId}`);
    this.router.navigate(['hiring-needs/information'], { queryParams: { need: needId } });
  }

  createNeed(): void {
    const dialogRef = this.dialog.open(DialogCreateNeedComponent, {
      width: '600px',
      data: { company: this.selectedCompanyId }
    });

    dialogRef.afterClosed().subscribe(createdNeed => {
      console.log(createdNeed);
      if(createdNeed) {
        this.needsData.push(createdNeed);

        this.snackBar.open('Aviso agregado', 'Cerrar', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
      });
      }
    });
  }

  closeNeed(event: Event, id: number) {
    event.stopPropagation();
    this.hiringNeedsService.closeNeed(id).subscribe({
      next: need => {
        console.log(need);
        if (this.selectedCompanyId != null) {
          this.getAllNeeds(+this.selectedCompanyId);
        } else {
          console.error('selectedCompanyId is null or undefined');
        }
      },
      error: error => {
        console.error('Error al obtener necesidades');
      }
    });
  }
}
