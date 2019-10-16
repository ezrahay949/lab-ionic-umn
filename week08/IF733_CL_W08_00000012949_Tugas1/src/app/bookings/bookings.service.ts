import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingsService {
    private bookings: Booking[] = [
        new Booking(
            'b1',
            'p3',
            'u1',
            'Rumrum Mom',
            3
        ),
        new Booking(
            'b2',
            'p1',
            'u1',
            'Serpong M-Town',
            8
        ),
    ];

    constructor() { }

    getAllBookings() {
        return [...this.bookings];
    }

    getBooking(placeId: string) {
        return this.bookings.find(place => place.id === placeId);
    }

    deleteBooking(bookingId: string) {
        return this.bookings = this.bookings.filter(booking => booking.id !== bookingId);
    }
}
