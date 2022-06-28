import {Controller, Get, Query} from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities(@Query() query): any[] {
    return this.citiesService.getCities(query.searchString);
  }
}
