import { PersonResponse } from "../../person/interfaces/person.interface"

export interface AdmisionResponse {
  id: number
  person: PersonResponse
  hiringNeed: HiringNeed
  applicationDate: Date
  interviewDate: Date
  evaluationResult: string
  state: string
}

export interface HiringNeed {
  id: number
  position: string
  description: string
  startDate: Date
  endDate: Date
  companyId: number
  amountPeople: number
  certification: boolean
  experience: boolean
  salary: number
  educationLevel: string
  contractType: string
  state: string
  company: Company
}

export interface Company {
  id: number
  name: string
  businessName: string
  ruc: string
  sector: string
  address: string
  phoneNumber: string
  email: string
  webUrl: string
  description: string
  contactName: string
  city: string
}

