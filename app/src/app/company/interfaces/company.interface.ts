export interface CompanyResponse {
    id: number;
    name: string;
    businessName: string;
    ruc: string;
    sector: string;
    address: string;
    phoneNumber: string;
    email: string;
    webUrl: string;
    description: string;
    contactName: string;
    city: string;
}

export interface CompanyRequest {
    name: string;
    businessName: string;
    ruc: string;
    sector: string;
    address: string;
    phoneNumber: string;
    email: string;
    webUrl: string;
    description: string;
    contactName: string;
    city: string;
}