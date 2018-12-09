import { ModelGeneric } from './../interfaces/ModelGeneric';

export class SysModel implements ModelGeneric{
    "id": number;
    "country": string;
    "message": number;
    "sunrise": number;
    "sunset": number;
}