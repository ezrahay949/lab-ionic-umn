import {Component, OnDestroy, OnInit} from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {

    loadedPlaces: Place[];
    private placesSub: Subscription;

    constructor(
        private placesService: PlacesService,
        private router: Router
    ) { }

    ngOnInit() {
        this.placesSub = this.placesService.allPlaces.subscribe(places => {
            this.loadedPlaces = places;
        });
    }

    ionViewWillEnter() {
        this.placesSub = this.placesService.allPlaces.subscribe(places => {
            this.loadedPlaces = places;
        });
    }

    onEdit(offerId: string, itemSliding: IonItemSliding) {
        itemSliding.close();
        this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
        console.log('Editing item', offerId);
    }

    ngOnDestroy() {
        this.placesSub.unsubscribe();
    }
}
