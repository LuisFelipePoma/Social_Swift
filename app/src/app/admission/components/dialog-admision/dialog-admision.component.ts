import { Component, Inject, model } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { PersonResponse } from '../../../person/interfaces/person.interface'
import { AdmisionService } from '../../services/admision.service'
@Component({
  selector: 'app-dialog-admision',
  templateUrl: './dialog-admision.component.html',
  styleUrl: './dialog-admision.component.css'
})
export class DialogAdmisionComponent {
  constructor (
    public dialogRef: MatDialogRef<DialogAdmisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { person: PersonResponse },
    private admisionService: AdmisionService
  ) {}

  handleAdmision (isAdmited: boolean) {
    console.log('admintiento........')
    if (isAdmited) {
      this.admisionService.acceptAdmissionById(this.data.person.id).subscribe({
        next: response => {
					this.dialogRef.close(response.state)
        },
        error: error => {
          console.error('Error al aceptar admision', error)
        }
      })
    } else {
      this.admisionService.rejectAdmissionById(this.data.person.id).subscribe({
        next: response => {
					this.dialogRef.close(response.state)
        },
        error: error => {
          console.error('Error al rechazar admision', error)
        }
      })
    }
  }

  onNoClick (): void {
    this.dialogRef.close()
  }
}
