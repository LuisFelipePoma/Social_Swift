import { PersonService } from './../services/person.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InformationService } from '../services/information.service';
import { PersonResponse } from '../interfaces/person.interface';

@Component({
  selector: 'app-dialog-create-information',
  templateUrl: './dialog-create-information.component.html',
  styleUrl: './dialog-create-information.component.css'
})
export class DialogCreateInformationComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogCreateInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { createdPerson: PersonResponse },
    private informationService: InformationService,
    private fb: FormBuilder
  ) {}

  person = this.data.createdPerson;

  form: FormGroup = this.fb.group({
    position: [, [Validators.required]],
    educationLevel: [, [Validators.required]],
    certification: [false],
    experience: [false],
    contactPhoneReference: [, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    contactInformation: [, [Validators.required]],
    cvUrl: [, [Validators.required, Validators.pattern('https?://.+')]]
  });

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  controlTouched(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control && control.touched || false;
  }

  createInformation(): void {
    if (this.form.invalid) {
      return;
    }

    // get today date in string (ISO)
    const today = new Date();
    const todayString = today.toISOString();

    const formValue = this.form.value;

    console.log('Persona agregada', this.person)
    const informationRequest = {
      person: this.person.id,
      position: formValue.position,
      educationLevel: formValue.educationLevel,
      certification: formValue.certification,
      experience: formValue.experience,
      contactPhoneReference: formValue.contactPhoneReference,
      contactInformation: formValue.contactInformation,
      registrationDate: todayString,
      cvUrl: formValue.cvUrl,
    };

    console.log('Informacion por agregar', informationRequest)

    this.informationService.createInformation(informationRequest).subscribe({
      next: createdInformation => {
        console.log('Information created successfully: ', createdInformation);
        this.dialogRef.close(createdInformation);
      },
      error: error => {
        console.error('Error creating information:', error);
      }
    });
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
