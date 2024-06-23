import { Component } from '@angular/core';
import { DialogInformationComponent } from '../../person/dialog-information/dialog-information.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompanyService } from '../services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-company',
  templateUrl: './dialog-create-company.component.html',
  styleUrl: './dialog-create-company.component.css'
})
export class DialogCreateCompanyComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogInformationComponent>,
    private companyService: CompanyService,
    private fb: FormBuilder,
  ) {}

  form: FormGroup = this.fb.group({
    name: [, [Validators.required]],
    businessName: [, [Validators.required]],
    ruc: [, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    sector: [, [Validators.required]],
    address: [, [Validators.required]],
    phoneNumber: [, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    email: [, [Validators.required, Validators.email]],
    webUrl: [, [Validators.required, Validators.pattern('https?://.+')]],
    description: [, [Validators.required]],
    contactName: [, [Validators.required]],
    city: [, [Validators.required]],
  });

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  controlTouched(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control && control.touched || false;
  }

  close(): void {
    this.dialogRef.close(false);
  }

  createCompany(): void {
    if(this.form.invalid){
      return;
    }
    const formValue = this.form.value;
    const companyRequest = {
      name: formValue.name,
      businessName: formValue.businessName,
      ruc: formValue.ruc,
      sector: formValue.sector,
      address: formValue.address,
      phoneNumber: formValue.phoneNumber,
      email: formValue.email,
      webUrl: formValue.webUrl,
      description: formValue.description,
      contactName: formValue.contactName,
      city: formValue.city
    };
    this.companyService.createCompany(companyRequest).subscribe({
      next: createdCompany => {
        console.log('Company created successfully:', createdCompany)
        this.dialogRef.close(createdCompany);
      },
      error: error => {
        console.error('Error creating company', error);
      }
    }); 
  }
  
}
