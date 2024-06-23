import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HiringRoutingModule } from './hiring-routing.module'
import { HiringComponent } from './hiring.component'
import { DialogHiringComponent } from './components/dialog-hiring/dialog-hiring.component'
import { MatButtonModule } from '@angular/material/button'
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog'

@NgModule({
  declarations: [HiringComponent, DialogHiringComponent],
  imports: [
    CommonModule,
    HiringRoutingModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  exports: [HiringComponent]
})
export class HiringModule {}
