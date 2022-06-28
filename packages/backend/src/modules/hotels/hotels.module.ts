import { Module } from '@nestjs/common';
import {HotelsService} from "./hotels.service";
import {HotelsController} from "./hotels.controller";
import {CitiesModule} from "../cities/cities.module";

@Module({
    imports: [CitiesModule],
    controllers: [HotelsController],
    providers: [HotelsService],
})
export class HotelsModule {}
