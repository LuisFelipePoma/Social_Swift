import { PersonRequest } from './../interfaces/person.interface';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonService } from '../services/person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-create-person',
  templateUrl: './dialog-create-person.component.html',
  styleUrl: './dialog-create-person.component.css'
})
export class DialogCreatePersonComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCreatePersonComponent>,
    private personService: PersonService,
    private fb: FormBuilder,
  ) {}

  form: FormGroup = this.fb.group({
    dni: [, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    name: [, [Validators.required]],
    lastname: [, [Validators.required]],
    birthDate: [, [Validators.required]],
    address: [, [Validators.required]],
    phoneNumber: [, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    email: [, [Validators.required, Validators.email]],
    picture: [, [Validators.required]]
  });

  file: any;

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  controlTouched(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control && control.touched || false;
  }

  createPerson(): void {
    if (this.form.invalid || !this.file) {
      return;
    }

    this.toBase64(this.file).subscribe({
      next: base64String => {
        const formValue = this.form.value;
        const personRequest = {
          dni: formValue.dni,
          name: formValue.name,
          lastname: formValue.lastname,
          birthDate: formValue.birthDate,
          address: formValue.address,
          phoneNumber: formValue.phoneNumber,
          email: formValue.email,
          picture: base64String
        };

        this.personService.createPerson(personRequest).subscribe({
          next: createdPerson => {
            console.log('Person created successfully:', createdPerson);
            this.dialogRef.close(createdPerson);
          },
          error: error => {
            console.error('Error creating person:', error);
          }
        });
      },
      error: error => {
        console.error('Error converting file to base64:', error);
      }
    });
  }

  close(): void {
    this.dialogRef.close(false);
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
    }
  }

  toBase64(file: File): Observable<string> {
    return new Observable<string>((observer) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.toString().split(',')[1] || '';
        observer.next(base64String);
        observer.complete();
      };
      reader.onerror = (error) => observer.error(error);
    });
  }
}
