import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HiringNeedsRoutingModule } from './hiring-needs-routing.module'
import { HiringNeedsComponent } from './hiring-needs.component'
import { HiringNeedInformationComponent } from './hiring-need-information/hiring-need-information.component'
import { AdmissionModule } from '../admission/admission.module';
import { DialogCreateNeedComponent } from './dialog-create-need/dialog-create-need.component'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    HiringNeedsComponent,
    HiringNeedInformationComponent,
    DialogCreateNeedComponent,
  ],
  imports: [
    CommonModule,
    HiringNeedsRoutingModule,
    AdmissionModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ]
})
export class HiringNeedsModule {}
