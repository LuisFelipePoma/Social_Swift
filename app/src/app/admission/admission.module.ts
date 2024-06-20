import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { DialogAdmisionComponent } from './components/dialog-admision/dialog-admision.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AdmissionComponent,
		DialogAdmisionComponent
  ],
  imports: [
		CommonModule,
    AdmissionRoutingModule,
		MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
	exports:[
		AdmissionComponent
	]
})
export class AdmissionModule { }
