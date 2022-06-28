import {Controller, Get, Query} from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
    constructor(private readonly hotelsService: HotelsService) {}

    @Get()
    getHotels(@Query() query): any[] {
        return this.hotelsService.getHotels(query);
    }
}
