import { Component, Inject, inject, model } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog'
import { PersonResponse } from '../interfaces/person.interface';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrl: './dialog-information.component.css',
})
export class DialogInformationComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogInformationComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: { person: PersonResponse },
    private personService: PersonService,
  ) {}

  public person = this.data.person;

  onClose(): void {
    this.dialogRef.close();
  }

  moveToBlacklist(id: number) {
    this.personService.moveToBlacklist(id).subscribe({
      next: personUpdated => {
        console.log(personUpdated);
      },
      error: error => {
        console.error('Error al actualizar la persona');
      }
    });
  }
}
