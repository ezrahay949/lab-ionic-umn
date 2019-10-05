import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoadingController, NavController} from "@ionic/angular";
import {AlbumService} from "../album.service";
import {Album} from "../album.model";
import {Song} from "../song.model";
import {FavoriteService} from "../../favorite/favorite.service";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    album: Album;

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private albumService: AlbumService,
        private favoriteService: FavoriteService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('albumId')) {
                this.navCtrl.navigateBack('/home');
                return;
            }
            this.album = this.albumService.getAlbum(paramMap.get('albumId'));
        })
    }

    toggleFavorite(song: Song) {
        const itemId = document.getElementById('favorite-icon-' + song.id);
        // @ts-ignore
        if (itemId.name == 'star'){
            this.loadingCtrl.create({
                keyboardClose: true,
                message: 'Updating your favorite songs...'
            }).then(loadingEl => {
                loadingEl.present();
                setTimeout(() => {
                    loadingEl.dismiss();
                    // @ts-ignore
                    itemId.name = 'star-outline';
                    this.favoriteService.removeFromFavorites(song.id);
                    this.presentToastWithOptions(song.title, false);
                }, 1000);
            });
        }
        else {
            this.loadingCtrl.create({
                keyboardClose: true,
                message: 'Updating your favorite songs...'
            }).then(loadingEl => {
                loadingEl.present();
                setTimeout(() => {
                    loadingEl.dismiss();
                    // @ts-ignore
                    itemId.name = 'star';
                    this.favoriteService.addToFavorites(song);
                    this.presentToastWithOptions(song.title, true);
                }, 1000);
            });
        }
    }

    showFavorite(songId: string) {
        return (this.favoriteService.isFavorite(songId)) ? 'star' : 'star-outline';
    }

    async presentToastWithOptions(songTitle, isAdd) {
        const toast = document.createElement('ion-toast');
        toast.message = '[' + songTitle + '] has been ' + (isAdd ? 'added to Favorite' : 'removed from Favorite');
        toast.duration = 2000;

        document.body.appendChild(toast);
        return toast.present();
    }
}
