import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { DialogInformationComponent } from './dialog-information/dialog-information.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogCreatePersonComponent } from './dialog-create-person/dialog-create-person.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DialogCreateInformationComponent } from './dialog-create-information/dialog-create-information.component';


@NgModule({
  declarations: [
    PersonComponent,
    DialogInformationComponent,
    DialogCreatePersonComponent,
    DialogCreateInformationComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class PersonModule { }
