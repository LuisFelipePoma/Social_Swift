import { Component, OnInit, inject } from '@angular/core';
import { PersonResponse } from './interfaces/person.interface';
import { PersonService } from './services/person.service';
import { MatDialog } from '@angular/material/dialog'
import { DialogInformationComponent } from './dialog-information/dialog-information.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  peopleData: PersonResponse[] = [];

  constructor(
    private personService:PersonService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
      this.getAllPeople();
  }

  getAllPeople() {
    this.personService.getAllPeople().subscribe({
      next: people => {
        this.peopleData = people;
      },
      error: error => {
        console.error('Error al obtener personas', error);
      }
    });
  }

  openDialog(person: PersonResponse): void {
    const dialogRef = this.dialog.open(DialogInformationComponent, {
      width: '600px',
      data: { person }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllPeople();
      console.log('The dialog was closed');
    });
  }
}
