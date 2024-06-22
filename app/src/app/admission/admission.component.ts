import { Component, inject } from '@angular/core'
import { AdmisionResponse } from './interfaces/admision.interface'
import { AdmisionService } from './services/admision.service'
import { HiringNeedsService } from '../hiring-needs/services/hiring-needs.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogAdmisionComponent } from './components/dialog-admision/dialog-admision.component'
import { PersonResponse } from '../person/interfaces/person.interface'
import { ActivatedRoute } from '@angular/router'

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
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    const selectedNeedId = this.route.snapshot.queryParamMap.get('need')
    if (selectedNeedId !== null && !isNaN(+selectedNeedId)) {
      this.admisionService.getAllAdmisionsById(+selectedNeedId).subscribe({
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

  openDialog (person: PersonResponse, admissionProcess: number): void {
    const dialogRef = this.dialog.open(DialogAdmisionComponent, {
      width: '600px',
      data: { person, admissionProcess}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      if (result !== undefined && result !== '') {
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
