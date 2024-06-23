import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { HiringResponse } from '../../interfaces/hiring.interface'

@Component({
  selector: 'app-dialog-hiring',
  templateUrl: './dialog-hiring.component.html',
  styleUrl: './dialog-hiring.component.css'
})
export class DialogHiringComponent {
  constructor (
    public dialogRef: MatDialogRef<DialogHiringComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hiring: HiringResponse }
  ) {}

  person = this.data.hiring.person
  hiring = this.data.hiring
}
