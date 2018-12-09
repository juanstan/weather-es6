import { ModelGeneric } from './../interfaces/ModelGeneric';

export class WeatherModel implements ModelGeneric{
    "id": number;
    "main": string;
    "description": string;
    "icon": string;
}