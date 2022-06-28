import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [],
  controllers: [CitiesController],
  exports: [CitiesService],
  providers: [CitiesService],
})
export class CitiesModule {}
