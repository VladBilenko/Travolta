import {Controller, Get, Query} from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly appService: CitiesService) {}

  @Get()
  getCities(@Query() query): any[] {
    return this.appService.getCities(query.searchString);
  }
}
