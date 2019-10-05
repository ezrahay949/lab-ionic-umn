import {Component, OnInit} from '@angular/core';
import {Album} from "./album.model";
import {AlbumService} from "./album.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    albums: Album[];

    constructor(
        private albumService: AlbumService
    ) {}

    ngOnInit(): void {
        this.albums = this.albumService.getAllAlbums();
    }

    ionViewWillEnter() {
        this.albums = this.albumService.getAllAlbums();
    }

}
