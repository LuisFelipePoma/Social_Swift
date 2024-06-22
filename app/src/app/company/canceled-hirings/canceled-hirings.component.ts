import { HiringService } from './../../hiring/services/hiring.service';
import { Component, OnInit } from '@angular/core';
import { HiringResponse } from '../../hiring/interfaces/hiring.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canceled-hirings',
  templateUrl: './canceled-hirings.component.html',
  styleUrl: './canceled-hirings.component.css'
})
export class CanceledHiringsComponent implements OnInit{
  canceledHirings: HiringResponse[] = [];
  constructor(
    private hiringService: HiringService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const selectedCompanyId = this.route.snapshot.queryParamMap.get('company');
      console.log(selectedCompanyId);
      if (selectedCompanyId !== null && !isNaN(+selectedCompanyId)) {
        this.hiringService.getCanceledHirings(+selectedCompanyId).subscribe({
          next: hirings => {
            this.canceledHirings = hirings;
          },
          error: error => {
            console.error('Error al obtener contrataciones', error);
          }
        });
      }
  }
}
