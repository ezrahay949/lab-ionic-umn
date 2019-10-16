import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-edit-offer',
    templateUrl: './edit-offer.page.html',
    styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
    place: Place;
    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private placesService: PlacesService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            this.place = this.placesService.getPlace(paramMap.get('placeId'));
            this.form = new FormGroup({
                title: new FormControl(null, {
                    updateOn: "blur",
                    validators: [Validators.required]
                }),
                description: new FormControl(null, {
                    updateOn: "blur",
                    validators: [Validators.required, Validators.maxLength(180)]
                })
            })
        })
    }

}
