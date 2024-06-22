import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { PersonResponse } from '../../../person/interfaces/person.interface'
import { AdmisionService } from '../../services/admision.service'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-dialog-filter-info',
  templateUrl: './dialog-filter-info.component.html',
  styleUrl: './dialog-filter-info.component.css'
})
export class DialogFilterInfoComponent implements OnInit {
  constructor (
    public dialogRef: MatDialogRef<DialogFilterInfoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { person: PersonResponse; need: number },
    private admisionService: AdmisionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit (): void {
  }

  addPersonToAdmision (person: PersonResponse) {
    this.admisionService
      .createAdmisionProcess(person.id, this.data.need)
      .subscribe({
        next: response => {
          console.log(response)
					this.snackBar.open(`El empleado ${response.person.lastname} se agrego al proceso`, 'Cerrar', {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
        },
        error: error => {
          this.snackBar.open('Este empleado ya se encuentra en proceso', 'Cerrar', {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
          console.error('Error al crear admisión', error)
        }
      })
    this.dialogRef.close(person)
  }
}
