import { Pipe, PipeTransform } from '@angular/core'
import { AdmisionResponse } from '../interfaces/admision.interface'

@Pipe({
  name: 'pipeAdmisions'
})
export class PipeAdmisionsPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform (items: AdmisionResponse[]): any[] {
    if (!items) {
      return items
    }
    const new_items = items.filter(item => {
      if (item.person.workingInformation) {
        return (
          item.hiringNeed.experience !=
            !item.person.workingInformation.experience &&
          item.hiringNeed.certification ==
            !item.person.workingInformation.certification
        )
      }
			return false
    })
    return new_items
  }
}
