import {Component, OnDestroy, OnInit} from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
    place: Place;
    private placesSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private placesService: PlacesService,
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            this.placesSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
                this.place = place;
            });
        });
    }

    onBookPlace(mode: 'select' | 'random') {
        this.modalCtrl
            .create({
                component: CreateBookingComponent,
                componentProps: { selectedPlace: this.place, selectedMode: mode }
            })
            .then(modalElement => {
                modalElement.present();
                console.log('OPEN - ', mode);
                return modalElement.onDidDismiss();
            })
            .then(resultData => {
                console.log(resultData.data, resultData.role);
                if (resultData.role === 'confirm') {
                    console.log('BOOKED - ', mode);
                }
            });
    }

    async presentActionSheet() {
        const actionSheet = document.createElement('ion-action-sheet');

        actionSheet.header = 'Book Place';
        actionSheet.buttons = [{
            text: 'Select Date',
            handler: () => {
                this.onBookPlace('select');
            }
        }, {
            text: 'Random Date',
            handler: () => {
                this.onBookPlace('random');
            }
        }, {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {}
        }];
        document.body.appendChild(actionSheet);
        return actionSheet.present();
    }

    ngOnDestroy() {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    }
}
