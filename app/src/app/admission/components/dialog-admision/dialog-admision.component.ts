import { Component, inject, model } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { AdmisionResponse } from '../../interfaces/admision.interface'

@Component({
  standalone: true,
  selector: 'app-dialog-admision',
  templateUrl: './dialog-admision.component.html',
  styleUrl: './dialog-admision.component.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ]
})
export class DialogAdmisionComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAdmisionComponent>)
  readonly data = inject<AdmisionResponse>(MAT_DIALOG_DATA)
  readonly admisionData = model(this.data)
	
  onNoClick (): void {
    this.dialogRef.close()
  }
}
