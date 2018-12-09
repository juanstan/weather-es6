import { ModelGeneric } from './../interfaces/ModelGeneric';
import { CoordsModel } from './Coords';
import { MainModel } from './Main';
import { SysModel } from './Sys';
import { WeatherModel } from './Weather';

export class CityModel implements ModelGeneric {
    "id": number;
    "name": string;
    "country": string;
    "coord": CoordsModel;
    "main": MainModel;
    "sys": SysModel;
    "weather": WeatherModel;
}