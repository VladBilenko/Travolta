import { Injectable } from '@nestjs/common';
import * as cities from 'all-the-cities';

@Injectable()
export class CitiesService {
  getCities(): string {
    return cities.filter(city => city.name.match('Albuquerque'));
  }
}
