import { Component, Inject, inject, model } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog'
import { PersonResponse } from '../interfaces/person.interface';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrl: './dialog-information.component.css',
})
export class DialogInformationComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogInformationComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: { person: PersonResponse }
  ) {}

  public person = this.data.person;

  onClose(): void {
    this.dialogRef.close();
  }
}
