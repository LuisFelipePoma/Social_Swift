import { Pipe, PipeTransform } from '@angular/core'
import { PersonResponse } from '../../person/interfaces/person.interface'
import { NeedResponse } from '../../hiring-needs/interfaces/hiring-needs.interface'

@Pipe({
  name: 'pipeAdmisions'
})
export class PipeAdmisionsPipe implements PipeTransform {
  transform (persons: PersonResponse[], need: NeedResponse): PersonResponse[] {
    if (!persons || !need) {
      return persons
    }
    return persons.filter(person => this.applyFilter(person, need))
  }

  applyFilter (person: PersonResponse, need: NeedResponse): boolean {
    // Lógica de filtrado según tus necesidades, utilizando las propiedades del objeto de filtro
    if (person.workingInformation) {
      return (
        this.inplies(
          need.certification,
          person.workingInformation.certification
        ) &&
        this.inplies(need.experience, person.workingInformation.experience) &&
        need.position === person.workingInformation.position
      )
    }
    return false
  }

  inplies (key: boolean, value: boolean) {
    return !key || value
  }
}
