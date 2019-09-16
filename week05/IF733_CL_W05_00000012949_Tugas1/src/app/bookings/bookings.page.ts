import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

    loadedBookings: Booking[];

    constructor(private bookingsService: BookingsService) { }

    ngOnInit() {
        this.loadedBookings = this.bookingsService.getAllBookings();
    }

    deleteBooking(bookingId: string) {
        console.log(bookingId);
        this.loadedBookings = this.bookingsService.deleteBooking(bookingId);
    }
}
