import { Component, inject, Inject } from '@angular/core'
import { PersonResponse } from '../../../person/interfaces/person.interface'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog'
import { AdmisionService } from '../../services/admision.service'
import { AdmisionResponse } from '../../interfaces/admision.interface'
import { ActivatedRoute } from '@angular/router'
import { PersonService } from '../../../person/services/person.service'
import { NeedResponse } from '../../../hiring-needs/interfaces/hiring-needs.interface'
import { DialogFilterInfoComponent } from '../dialog-filter-info/dialog-filter-info.component'

@Component({
  selector: 'app-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrl: './dialog-filter.component.css'
})
export class DialogFilterComponent {
  admisionData: PersonResponse[] = []
  readonly dialog = inject(MatDialog)


  constructor (
    public dialogRef: MatDialogRef<DialogFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { need: NeedResponse },
    private admisionService: AdmisionService,
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  onNoClick (): void {
    this.dialogRef.close()
  }


  ngOnInit (): void {
    const selectedNeedId = this.route.snapshot.queryParamMap.get('need')
    if (selectedNeedId !== null && !isNaN(+selectedNeedId)) {
      this.personService.getAllPeople().subscribe({
        next: people => {
          this.admisionData = people
        },
        error: error => {
          console.error('Error al obtener personas')
        }
      })
    } else {
      console.error('El id de la compañía no es un número')
    }
  }
  trackByFn (index: number, item: any): string {
    return item.id // Replace 'id' with the unique identifier property of your data
  }

  openDialogPersonInfo (person: PersonResponse): void {
    console.log(person)
    const dialogRef = this.dialog.open(DialogFilterInfoComponent, {
      data: {
        person: person,
				need: this.data.need.id
      },
      width: '1000px',
      height: '650px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      if (result !== undefined && result !== '') {
        console.log(result)
      }
    })
  }
}
