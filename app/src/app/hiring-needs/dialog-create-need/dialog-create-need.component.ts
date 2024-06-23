import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HiringNeedsService } from '../services/hiring-needs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-need',
  templateUrl: './dialog-create-need.component.html',
  styleUrl: './dialog-create-need.component.css'
})
export class DialogCreateNeedComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateNeedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {company: number},
    private hiringNeedsService: HiringNeedsService,
    private fb: FormBuilder
  ) {}

  companyId = this.data.company;

  form: FormGroup = this.fb.group({
    position: [, [Validators.required]],
    description: [, [Validators.required]],
    startDate: [, [Validators.required]],
    endDate: [, [Validators.required]],
    amountPeople: [, [Validators.required, Validators.min(1)]],
    certification: [false],
    experience: [false],
    educationLevel: [, [Validators.required]],
    salary: [, [Validators.required, Validators.min(1)]],
    contractType: [, [Validators.required]]
  });

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  controlTouched(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control && control.touched || false;
  }

  createNeed(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    const needRequest = {
      position: formValue.position,
      description: formValue.description,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      company: this.companyId,
      amountPeople: formValue.amountPeople,
      certification: formValue.certification,
      experience: formValue.experience,
      educationLevel: formValue.educationLevel,
      salary: formValue.salary,
      contractType: formValue.contractType
    };

    console.log('Aviso por agregar', needRequest);

    this.hiringNeedsService.createNeed(needRequest).subscribe({
      next: createdNeed => {
        console.log('Aviso creado correctamente', createdNeed);
        this.dialogRef.close(createdNeed);
      },
      error: error => {
        console.error('Error al crear aviso:', error);
      }
    });
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
