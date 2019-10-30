import {Component, OnInit} from '@angular/core';
import {Booking} from "./booking.interface";
import {BookingsService} from "./bookings.service";
import {AlertController, ModalController} from "@ionic/angular";
import {NewBookingPage} from "./new-booking/new-booking.page";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    private bookings: Booking[] = [];

    constructor(
        private bookingService: BookingsService,
        private alertController: AlertController,
        private modalController: ModalController
    ) {}

    ngOnInit(): void {
    }

    getBookings() {
        this.bookingService.fetchBookings().subscribe((bookings) => {
            console.log(bookings);
        })
    }

    async presentAlertPrompt() {
        console.log('presentAlertPrompt enter');

        const alert = await this.alertController.create({
            header: 'Delete a Booking',
            inputs: [
                {
                    name: 'bookingId',
                    type: 'text',
                    placeholder: 'Enter your booking ID'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'OK',
                    handler: (data) => {
                        this.bookingService.deleteBooking(data.bookingId)
                            .subscribe(() => {
                                this.bookingService.fetchBookings()
                                    .subscribe((bookings) => {
                                        console.log(bookings);
                                    });
                                console.log('Deleted');
                            })
                    }
                }
            ]
        });

        console.log('presentAlertPrompt out');
        await alert.present();
    }

    async presentModal() {
        console.log('presentModal enter');
        const modal = await this.modalController.create({
            component: NewBookingPage
        });
        console.log('presentModal out');
        return modal.present();
    }

    newBooking() {
        console.log('newBooking click');
        this.presentModal();
    }

    deleteBooking() {
        console.log('deleteBooking click');
        this.presentAlertPrompt();
    }

}
