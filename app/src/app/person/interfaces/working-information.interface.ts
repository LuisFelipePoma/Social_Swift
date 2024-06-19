export interface CreateInformationRequest {
    person: number;
    position: string;
    educationLevel: string;
    certification: boolean;
    experience: boolean;
    contactPhoneReference: string;
    contactInformation: string;
    registrationDate: string;
    cvUrl: string;
}

export interface InformationResponse {
    id: number;
    position: string;
    educationLevel: string;
    certification: boolean;
    experience: boolean;
    contactPhoneReference: string;
    contactInformation: string;
    registrationDate: string;
    cvUrl: string;
}

export interface UpdateInformationRequest {
    person: number;
    position: string;
    educationLevel: string;
    certification: boolean;
    experience: boolean;
    contactPhoneReference: string;
    contactInformation: string;
    cvUrl: string;
}