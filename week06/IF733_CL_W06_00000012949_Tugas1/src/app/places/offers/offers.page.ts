import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

    loadedPlaces: Place[];

    constructor(
        private placesService: PlacesService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadedPlaces = this.placesService.getAllPlaces();
    }

    onEdit(offerId: string, itemSliding: IonItemSliding) {
        itemSliding.close();
        this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
        console.log('Editing item', offerId);
    }
}
