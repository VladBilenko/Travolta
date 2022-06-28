import { Module } from '@nestjs/common';
import {CitiesModule} from "./cities/cities.module";
import {HotelsModule} from "./hotels/hotels.module";

@Module({
    imports: [CitiesModule, HotelsModule],
})
export class AppModule {}
