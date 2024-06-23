import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { HiringModule } from '../hiring/hiring.module';
import { CanceledHiringsComponent } from './canceled-hirings/canceled-hirings.component';
import { FinishedHiringsComponent } from './finished-hirings/finished-hirings.component';
import { DialogCreateCompanyComponent } from './dialog-create-company/dialog-create-company.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyInformationComponent,
    CanceledHiringsComponent,
    FinishedHiringsComponent,
    DialogCreateCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatCardModule,
    MatButtonModule,
    HiringModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
