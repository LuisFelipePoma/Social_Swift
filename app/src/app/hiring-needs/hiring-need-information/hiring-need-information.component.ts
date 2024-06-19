import { Component, OnInit } from '@angular/core';
import { NeedResponse } from '../interfaces/hiring-needs.interface';
import { HiringNeedsService } from '../services/hiring-needs.service';

@Component({
  selector: 'app-hiring-need-information',
  templateUrl: './hiring-need-information.component.html',
  styleUrl: './hiring-need-information.component.css'
})
export class HiringNeedInformationComponent implements OnInit{
  public need?: NeedResponse;

  constructor(private needService: HiringNeedsService) {}

  ngOnInit(): void {
      const selectedNeedId = this.needService.selectedNeed;
      if(typeof selectedNeedId === 'number') {
        this.needService.getNeedById(selectedNeedId).subscribe({
          next: need => {
            this.need = need;
            console.log(need);
          },
          error: error => {
            console.error('Error al obtener necesidad')
          }
        });
      } else {
        console.error('El id de la necesidad no es un número');
      }
  }
}
