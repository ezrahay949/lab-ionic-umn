import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';
import {IonItemSliding} from '@ionic/angular';
import {Place} from '../places/place.model';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

    loadedBookings: Booking[];
    loadedMyBookings: Place[];

    constructor(private bookingsService: BookingsService) { }

    ngOnInit() {
        this.loadedBookings = this.bookingsService.getAllBookings();
        this.loadedMyBookings = this.bookingsService.getAllMyBookings();
        console.log(this.loadedMyBookings);
    }

    onDelete(bookingId: string, itemSlide: IonItemSliding) {
        itemSlide.close();
        console.log(bookingId);
        this.loadedBookings = this.bookingsService.deleteBooking(bookingId);
    }

    ionViewWillEnter() {
        this.loadedMyBookings = this.bookingsService.getAllMyBookings();
        console.log(this.loadedMyBookings);
    }

    onDeleteMyBooking(placeId: string) {
        this.bookingsService.removeFromMyBookings(placeId);
        this.loadedMyBookings = this.bookingsService.getAllMyBookings();
    }
}
