import { Component, OnInit, inject } from '@angular/core';
import { PersonResponse } from './interfaces/person.interface';
import { PersonService } from './services/person.service';
import { MatDialog } from '@angular/material/dialog'
import { DialogInformationComponent } from './dialog-information/dialog-information.component';
import { DialogCreatePersonComponent } from './dialog-create-person/dialog-create-person.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCreateInformationComponent } from './dialog-create-information/dialog-create-information.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  peopleData: PersonResponse[] = [];

  constructor(
    private personService:PersonService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
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

  createPerson(): void {
    const dialogRef = this.dialog.open(DialogCreatePersonComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(createdPerson => {
      console.log(createdPerson);
      if (createdPerson) {
        this.peopleData.push(createdPerson); // Add the new person to the array
        
        const dialogCreateInfoRef = this.dialog.open(DialogCreateInformationComponent, {
          width: '600px',
          data: { createdPerson }
        });

        this.snackBar.open('Usuario agregado', 'Cerrar', {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
        });
      }
    });
  }
}
