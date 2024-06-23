import { ActivatedRoute } from '@angular/router'
import { Component, inject, OnInit } from '@angular/core'
import { HiringResponse } from './interfaces/hiring.interface'
import { HiringService } from './services/hiring.service'
import { CompanyService } from '../company/services/company.service'
import { PersonResponse } from '../person/interfaces/person.interface'
import { MatDialog } from '@angular/material/dialog'
import { DialogHiringComponent } from './components/dialog-hiring/dialog-hiring.component'

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css'
})
export class HiringComponent implements OnInit {
  hiringsData: HiringResponse[] = []
  readonly dialog = inject(MatDialog)

  constructor (
    private hiringService: HiringService,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    // const selectedCompanyId = this.companyService.selectedCompany;
    const selectedCompanyId = this.route.snapshot.queryParamMap.get('company')
    console.log(selectedCompanyId)
    if (selectedCompanyId !== null && !isNaN(+selectedCompanyId)) {
      this.hiringService.getOKHirings(+selectedCompanyId).subscribe({
        next: hirings => {
          this.hiringsData = hirings
          console.log(this.hiringsData)
        },
        error: error => {
          console.error('Error al obtener contrataciones', error)
        }
      })
    } else {
      console.error('El id de la compañía no es un número')
    }
  }
  openDialogPerson (item: HiringResponse) {
		console.log(item)
    this.dialog.open(DialogHiringComponent, {
      width: '600px',
      data: { hiring: item },
      autoFocus: false
    })
  }
}
