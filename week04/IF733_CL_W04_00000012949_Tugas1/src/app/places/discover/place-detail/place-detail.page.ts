import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  loadedPlace: Place;

  constructor(public activatedRoute: ActivatedRoute, public placesService: PlacesService) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(
    //   paramMap => {
    //     if (!paramMap.has('placeId')) {
    //       return;
    //     }
    //     this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
    //   }
    // );
  }

}
