import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdmissionRoutingModule } from './admission-routing.module'
import { AdmissionComponent } from './admission.component'
import { DialogAdmisionComponent } from './components/dialog-admision/dialog-admision.component'
import { MatButtonModule } from '@angular/material/button'
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog'
import { DialogFilterComponent } from './components/dialog-filter/dialog-filter.component';
import { PipeAdmisionsPipe } from './pipes/pipe-admisions.pipe'

@NgModule({
  declarations: [
    AdmissionComponent,
    DialogAdmisionComponent,
    DialogFilterComponent,
    PipeAdmisionsPipe
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
  exports: [AdmissionComponent, DialogFilterComponent]
})
export class AdmissionModule {}
