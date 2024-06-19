import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  
{ path: 'hiring', loadChildren: () => import('./hiring/hiring.module').then(m => m.HiringModule) },
  
{ path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) },
  
{ path: 'hiring-needs', loadChildren: () => import('./hiring-needs/hiring-needs.module').then(m => m.HiringNeedsModule) },
  
{ path: 'admission', loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
