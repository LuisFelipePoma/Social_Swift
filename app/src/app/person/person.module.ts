import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { DialogInformationComponent } from './dialog-information/dialog-information.component';


@NgModule({
  declarations: [
    PersonComponent,
    DialogInformationComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class PersonModule { }
