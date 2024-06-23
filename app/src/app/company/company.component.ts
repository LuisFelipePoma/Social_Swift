import { Component, OnInit } from '@angular/core';
import { CompanyResponse } from './interfaces/company.interface';
import { Router } from '@angular/router';
import { CompanyService } from './services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateCompanyComponent } from './dialog-create-company/dialog-create-company.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar
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

  createCompany(): void {
    const dialogRef = this.dialog.open(DialogCreateCompanyComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(createdCompany => {
      console.log(createdCompany);
      if(createdCompany) {
        this.companyData.push(createdCompany);

        this.snackBar.open('Compañía agregado', 'Cerrar', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
      });
      }
    })
  }
}
