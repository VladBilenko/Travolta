import { Injectable } from '@nestjs/common';
import * as cities from 'all-the-cities';

@Injectable()
export class CitiesService {
  getCities(searchString: string): any[] {
    const result = [];

    for (const city of cities) {
      if (city.name.toLowerCase().includes(searchString.toLowerCase())) {
        result.push(city);
      }

      if (result.length > 9) {
        break;
      }
    }

    return result;
  }

  getCityById(id: string) {
    return cities.filter(({cityId}) => cityId === parseInt(id)).pop();
  }
}
