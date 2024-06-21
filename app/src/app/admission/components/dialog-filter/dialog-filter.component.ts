import { Component, Inject } from '@angular/core'
import { PersonResponse } from '../../../person/interfaces/person.interface'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AdmisionService } from '../../services/admision.service'
import { AdmisionResponse } from '../../interfaces/admision.interface'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrl: './dialog-filter.component.css'
})
export class DialogFilterComponent {
  admisionData: AdmisionResponse[] = []
	
  constructor (
    public dialogRef: MatDialogRef<DialogFilterComponent>,
    private admisionService: AdmisionService,
    private route: ActivatedRoute
  ) {}

  onNoClick (): void {
    this.dialogRef.close()
  }

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
  trackByFn (index: number, item: any): string {
    return item.id // Replace 'id' with the unique identifier property of your data
  }
}
