import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringComponent } from './hiring.component';
import { DialogHiringComponent } from './components/dialog-hiring/dialog-hiring.component';


@NgModule({
  declarations: [
    HiringComponent,
    DialogHiringComponent,
  ],
  imports: [
    CommonModule,
    HiringRoutingModule
  ],
  exports: [
    HiringComponent
  ]
})
export class HiringModule { }
