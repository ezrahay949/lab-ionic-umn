import { Component, OnInit } from '@angular/core';
import {Ukm} from "../ukm.model";
import {UkmService} from "../ukm.service";
import {AlertController, ModalController} from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    loadedUkm: Ukm[];

    constructor(
        private ukmService: UkmService,
        public alertController: AlertController,
    ) { }

    ngOnInit() {
        this.loadedUkm = this.ukmService.getAllUkm();
    }

    joinUkm(ukm) {
        this.ukmService.addToMyUkm(ukm);
    }

    async presentAlertJoin(ukm) {
        const alert = await this.alertController.create({
            header: 'Hm..',
            message: 'Beneran Mau Join?',
            buttons: [
                {
                    text: 'Batal',
                    role: 'cancel'
                },
                {
                    text: 'Serius',
                    handler: () => this.joinUkm(ukm)
                }
            ]
        });
        await alert.present();
    }
}
