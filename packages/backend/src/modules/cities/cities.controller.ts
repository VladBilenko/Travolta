import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly appService: CitiesService) {}

  @Get()
  getCities(): string {
    return this.appService.getCities();
  }
}
