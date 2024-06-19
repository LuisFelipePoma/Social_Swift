import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringNeedsComponent } from './hiring-needs.component';
import { HiringNeedInformationComponent } from './hiring-need-information/hiring-need-information.component';

const routes: Routes = [
  { path: '', component: HiringNeedsComponent },
  { path: 'information', component: HiringNeedInformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringNeedsRoutingModule { }
