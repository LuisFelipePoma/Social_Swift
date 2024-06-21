import { PersonService } from './../services/person.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-dialog-create-information',
  templateUrl: './dialog-create-information.component.html',
  styleUrl: './dialog-create-information.component.css'
})
export class DialogCreateInformationComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogCreateInformationComponent>,
    private informationService: InformationService,
    private fb: FormBuilder
  ) {}

  form: FormGroup = this.fb.group({
    person: [, [Validators.required]],
    position: [, [Validators.required]],
    educationLevel: [, [Validators.required]],
    certification: [, [Validators.required]],
    experience: [, [Validators.required]],
    contactPhoneReference: [, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    contactInformation: [, [Validators.required]],
    registrationDate: [, [Validators.required]],
    cvUrl: [, [Validators.required]]
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

    const formValue = this.form.value;
    const informationRequest = {
      person: formValue.person,
      position: formValue.position,
      educationLevel: formValue.educationLevel,
      certification: formValue.certification,
      experience: formValue.experience,
      contactPhoneReference: formValue.contactPhoneReference,
      contactInformation: formValue.contactInformation,
      registrationDate: formValue.registrationDate,
      cvUrl: formValue.cvUrl,
    };

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
}
