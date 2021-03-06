import {Component, OnDestroy, OnInit} from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

    loadedPlaces: Place[];
    listedLoadedPlaces: Place[];
    private placesSub: Subscription;

    constructor(private placesService: PlacesService) { }

    ngOnInit() {
        this.placesSub = this.placesService.allPlaces.subscribe(places => {
            this.loadedPlaces = places;
            this.listedLoadedPlaces = this.loadedPlaces.slice(1);
        });
    }

    onFilterUpdate(event: CustomEvent) {
        console.log('SegmentChangeEventDetail', event.detail);
    }

    ngOnDestroy() {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    }
}
