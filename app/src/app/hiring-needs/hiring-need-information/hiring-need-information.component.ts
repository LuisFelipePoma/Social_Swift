import { Component, inject, OnInit } from '@angular/core'
import { NeedResponse } from '../interfaces/hiring-needs.interface'
import { HiringNeedsService } from '../services/hiring-needs.service'
import { ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { DialogFilterComponent } from '../../admission/components/dialog-filter/dialog-filter.component'

@Component({
  selector: 'app-hiring-need-information',
  templateUrl: './hiring-need-information.component.html',
  styleUrl: './hiring-need-information.component.css'
})
export class HiringNeedInformationComponent implements OnInit {
  public need?: NeedResponse
  readonly dialog = inject(MatDialog)

  constructor (
    private needService: HiringNeedsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    const selectedNeedId = this.route.snapshot.queryParamMap.get('need')
    if (selectedNeedId !== null && !isNaN(+selectedNeedId)) {
      this.needService.getNeedById(+selectedNeedId).subscribe({
        next: need => {
          this.need = need
          console.log(need)
        },
        error: error => {
          console.error('Error al obtener necesidad')
        }
      })
    } else {
      console.error('El id de la necesidad no es un número')
    }
  }

  showdialog (): void {
    const dialogRef = this.dialog.open(DialogFilterComponent, {
      data: {
        need: this.need
      },
      width: '1000px',
      height: '650px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      if (result !== undefined && result !== '') {
        console.log(result)
      }
    })
  }
}
