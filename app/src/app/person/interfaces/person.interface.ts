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
    blacklist: boolean;
}