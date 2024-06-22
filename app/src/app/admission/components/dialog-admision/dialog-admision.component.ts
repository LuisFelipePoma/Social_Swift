import { Component, Inject, model } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { PersonResponse } from '../../../person/interfaces/person.interface'
import { AdmisionService } from '../../services/admision.service'
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-dialog-admision',
  templateUrl: './dialog-admision.component.html',
  styleUrl: './dialog-admision.component.css'
})
export class DialogAdmisionComponent {
  constructor (
    public dialogRef: MatDialogRef<DialogAdmisionComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { person: PersonResponse; admissionProcess: number },
    private admisionService: AdmisionService,
    public snackbar: MatSnackBar
  ) {}

  handleAdmision (isAdmited: boolean) {
    console.log('admintiento........')
    if (isAdmited) {
      this.admisionService
        .acceptAdmissionById(this.data.admissionProcess)
        .subscribe({
          next: response => {
            this.dialogRef.close(response.state)
            this.snackbar.open('Admisión aceptada', 'Cerrar', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          },
          error: error => {
            this.snackbar.open('Error al aceptar admisión', 'Cerrar', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })

            console.error('Error al aceptar admision', error)
          }
        })
    } else {
      this.admisionService
        .rejectAdmissionById(this.data.admissionProcess)
        .subscribe({
          next: response => {
            this.dialogRef.close(response.state)
            this.snackbar.open('Admisión rechazada', 'Cerrar', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          },
          error: error => {
            this.snackbar.open('Error al rechazar admisión', 'Cerrar', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
            console.error('Error al rechazar admision', error)
          }
        })
    }
  }

  onNoClick (): void {
    this.dialogRef.close()
  }
}
