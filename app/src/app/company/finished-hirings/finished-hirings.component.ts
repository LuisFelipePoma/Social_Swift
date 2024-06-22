import { Component, OnInit } from '@angular/core';
import { HiringResponse } from '../../hiring/interfaces/hiring.interface';
import { HiringService } from '../../hiring/services/hiring.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finished-hirings',
  templateUrl: './finished-hirings.component.html',
  styleUrl: './finished-hirings.component.css'
})
export class FinishedHiringsComponent implements OnInit{
  finishedHirings: HiringResponse[] = [];
  constructor(
    private hiringService: HiringService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const selectedCompanyId = this.route.snapshot.queryParamMap.get('company');
    console.log(selectedCompanyId);
    if (selectedCompanyId !== null && !isNaN(+selectedCompanyId)) {
      this.hiringService.getFinishedHirings(+selectedCompanyId).subscribe({
        next: hirings => {
          this.finishedHirings = hirings;
        },
        error: error => {
          console.error('Error al obtener contrataciones', error);
        }
      });
    }
}
}
