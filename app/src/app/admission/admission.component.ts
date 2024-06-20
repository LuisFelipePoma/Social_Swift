import { Component, inject } from '@angular/core'
import { AdmisionResponse } from './interfaces/admision.interface'
import { AdmisionService } from './services/admision.service'
import { HiringNeedsService } from '../hiring-needs/services/hiring-needs.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogAdmisionComponent } from './components/dialog-admision/dialog-admision.component'
import { PersonResponse } from '../person/interfaces/person.interface'

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {
  admisionData: AdmisionResponse[] = []

  readonly dialog = inject(MatDialog)
  constructor (
    private admisionService: AdmisionService,
    private hiringNeedsService: HiringNeedsService
  ) {}

  ngOnInit (): void {
    const selectedHiring: number | null = this.hiringNeedsService.selectedNeed

    if (typeof selectedHiring === 'number') {
      this.admisionService.getAllAdmisionsById(selectedHiring).subscribe({
        next: admisions => {
          this.admisionData = admisions
          console.log(this.admisionData)
        },
        error: error => {
          console.error('Error al obtener contrataciones')
        }
      })
    } else {
      console.error('El id de la compañía no es un número')
    }
  }

  openDialog (person: PersonResponse): void {
    const dialogRef = this.dialog.open(DialogAdmisionComponent, {
      width: '600px',
      data: { person }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      if (result !== undefined && result !== "") {
				console.log(result)
        // Update the value
        const index = this.admisionData.findIndex(
          admision => admision.person.id === person.id
        )
        this.admisionData[index].state = result
      }
    })
  }
}
