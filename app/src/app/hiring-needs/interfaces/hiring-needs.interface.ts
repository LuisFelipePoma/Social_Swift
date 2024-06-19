import { CompanyResponse } from "../../company/interfaces/company.interface";

export interface NeedRequest {
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    company: number;
    amountPeople: number;
    certification: boolean;
    experience: boolean;
    educationLevel: string;
    salary: number;
    contractType: string;
}

export interface NeedResponse {
    id: number;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    amountPeople: number;
    certification: boolean;
    experience: boolean;
    educationLevel: string;
    salary: number;
    contractType: string;
    state: string;
    company: CompanyResponse;
}