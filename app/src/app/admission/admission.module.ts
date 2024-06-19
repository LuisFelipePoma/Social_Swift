import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { DialogAdmisionComponent } from './components/dialog-admision/dialog-admision.component';


@NgModule({
  declarations: [
    AdmissionComponent,
  ],
  imports: [
		CommonModule,
    AdmissionRoutingModule
  ],
	exports:[
		AdmissionComponent
	]
})
export class AdmissionModule { }
