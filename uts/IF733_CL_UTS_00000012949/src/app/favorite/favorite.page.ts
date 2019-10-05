import { Component, OnInit } from '@angular/core';
import {Album} from "../home/album.model";
import {AlbumService} from "../home/album.service";
import {Song} from "../home/song.model";
import {FavoriteService} from "./favorite.service";
import {AlertController, IonList} from "@ionic/angular";

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

    favorites: Song[];

    constructor(
        private favoriteService: FavoriteService,
        public alertController: AlertController,
    ) {}

    ngOnInit(): void {
        this.favorites = this.favoriteService.getAllFavorites();
    }

    ionViewWillEnter() {
        this.favorites = this.favoriteService.getAllFavorites();
    }

    removeFromFavorite(song: Song) {
        this.favoriteService.removeFromFavorites(song.id);
        this.favorites = this.favoriteService.getAllFavorites();
        this.presentToast(song.title);
    }

    async presentAlertRemove(song: Song, ionList: IonList) {
        const alert = await this.alertController.create({
            header: 'Remove Favorite',
            message: 'Do you want to remove [' + song.title + '] from favorite?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        ionList.closeSlidingItems();
                    }
                },
                {
                    text: 'Remove',
                    handler: () => this.removeFromFavorite(song)
                }
            ]
        });
        await alert.present();
    }

    async presentToast(songTitle) {
        const toast = document.createElement('ion-toast');
        toast.message = '[' + songTitle + '] has been removed from Favorite';
        toast.duration = 2000;

        document.body.appendChild(toast);
        return toast.present();
    }

}
