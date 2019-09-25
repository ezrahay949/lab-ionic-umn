import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import {BookingsService} from '../bookings.service';

@Component({
    selector: 'app-create-booking',
    templateUrl: './create-booking.component.html',
    styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
    @Input() selectedPlace: Place;

    constructor(
        private modalCtrl: ModalController,
        private bookingsService: BookingsService
    ) { }

    ngOnInit() { }

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }

    onBookPlace() {
        this.modalCtrl.dismiss({message: 'This is a dummy msg'}, 'confirm');
    }

    onBookMyPlace() {
        this.modalCtrl.dismiss({message: 'This is a dummy msg'}, 'confirm');
        this.bookingsService.addToMyBookings(this.selectedPlace);
    }
}
