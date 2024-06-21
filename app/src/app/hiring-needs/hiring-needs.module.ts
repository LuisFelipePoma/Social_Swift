import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HiringNeedsRoutingModule } from './hiring-needs-routing.module'
import { HiringNeedsComponent } from './hiring-needs.component'
import { HiringNeedInformationComponent } from './hiring-need-information/hiring-need-information.component'
import { AdmissionModule } from '../admission/admission.module'


@NgModule({
  declarations: [
    HiringNeedsComponent,
    HiringNeedInformationComponent,
  ],
  imports: [CommonModule, HiringNeedsRoutingModule, AdmissionModule]
})
export class HiringNeedsModule {}
