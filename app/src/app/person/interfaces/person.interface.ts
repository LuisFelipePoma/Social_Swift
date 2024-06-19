import { InformationResponse } from "./working-information.interface";

export interface PersonRequest {
    dni: string;
    name: string;
    lastname: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    picture: string;
}

export interface PersonCreateResponse {
    id: number;
    dni: string;
    name: string;
    lastname: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    picture: string;
    blackList: boolean;
}

export interface PersonResponse {
    id: number;
    dni: string;
    name: string;
    lastname: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    picture: string;
    workingInformation: InformationResponse;
    blackList: boolean;
}