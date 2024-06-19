import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyInformationComponent } from './company-information/company-information.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'company', component: CompanyInformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
