import { CompanyResponse } from "../../company/interfaces/company.interface";
import { PersonResponse } from "../../person/interfaces/person.interface";

export interface HiringResponse {
    id: number;
    startDate: string;
    endDate: string;
    position: string;
    salary: number;
    state: string;
    company: CompanyResponse;
    person: PersonResponse;
}