import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { CanceledHiringsComponent } from './canceled-hirings/canceled-hirings.component';
import { FinishedHiringsComponent } from './finished-hirings/finished-hirings.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'company', component: CompanyInformationComponent },
  { path: 'canceled', component: CanceledHiringsComponent },
  { path: 'finished', component: FinishedHiringsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
