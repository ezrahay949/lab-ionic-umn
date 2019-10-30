import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {BookingsService} from "../bookings.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-new-booking',
    templateUrl: './new-booking.page.html',
    styleUrls: ['./new-booking.page.scss'],
})
export class NewBookingPage implements OnInit {

    constructor(
        private modalController: ModalController,
        private bookingService: BookingsService
    ) { }

    ngOnInit() {
    }

    closeModal() {
        this.modalController.dismiss(null, 'cancel');
    }

    addNewBooking(f: NgForm) {
        this.bookingService.insertBooking({
            'booking_name': f.value.booking_name,
            'topic': f.value.topic,
            'details': f.value.details,
            'booking_date': f.value.booking_date,
            'start_hour': f.value.start_hour,
            'end_hour': f.value.end_hour,
            'creator': f.value.creator,
        }).subscribe(() => {
            this.bookingService.fetchBookings().subscribe((bookings) => {
                console.log(bookings);
            });
            console.log('Inserted');
            this.closeModal();
        });
    }
}
