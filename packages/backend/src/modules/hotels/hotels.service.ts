import { Injectable } from '@nestjs/common';
import {CitiesService} from "../cities/cities.service";
import hotelsMock from "./hotels.mock";
import bookingsMock from "./bookings.mock";

@Injectable()
export class HotelsService {
    constructor(private readonly citiesService: CitiesService) {
    }

    getHotels(query: any): any[] {
        const { dateValue, guestsNumber, selectedCity } = query;
        const city = this.citiesService.getCityById(selectedCity);
        const hotelsInCity = this.getHotelsForCity(city.cityId);

        return this.getAvailableHotels(hotelsInCity, dateValue, guestsNumber).map(hotel => ({...hotel, city: city.name, country: city.country}))
    }

    private getHotelsForCity(id: number) {
        return hotelsMock.filter(({cityId}) => cityId === id);
    }

    private getAvailableHotels(hotels, dateValue, guestsNumber) {
        return hotels.filter(({id, maxGuestsAmount}) => {
            const [desiredCheckIn, desiredCheckOut] = dateValue.split(',').map(Number);

            if (guestsNumber > maxGuestsAmount) {
                return false;
            }

            const bookings = bookingsMock.filter(({hotelId, checkIn, checkOut}) => {
                if (hotelId !== id) {
                    return false;
                }

                const checkInOverlap = desiredCheckIn > checkIn && desiredCheckIn < checkOut;
                const checkOutOverlap = desiredCheckOut < checkOut && desiredCheckOut > checkIn;

                return checkInOverlap || checkOutOverlap;
            });

            return bookings.every(({guestsCount}) => (maxGuestsAmount - guestsCount) >= guestsNumber);
        })
    }
}
