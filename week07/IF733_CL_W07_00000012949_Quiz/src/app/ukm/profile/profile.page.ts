import { Component, OnInit } from '@angular/core';
import {Ukm} from "../ukm.model";
import {UkmService} from "../ukm.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    loadedMyUkm: Ukm[];

    constructor(
        private ukmService: UkmService
    ) { }

    ngOnInit() {
        this.loadedMyUkm = this.ukmService.getAllMyUkm();
    }

    ionViewWillEnter() {
        this.loadedMyUkm = this.ukmService.getAllMyUkm();
    }

    onDeleteMyBooking(ukmId: string) {
        this.ukmService.removeFromMyUkm(ukmId);
        this.loadedMyUkm = this.ukmService.getAllMyUkm();
    }
}
