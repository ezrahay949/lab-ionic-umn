import { Injectable } from '@angular/core';
import {Song} from "../home/song.model";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    private favorites: Song[] = [];

    constructor() { }

    getAllFavorites() {
        return [...this.favorites];
    }

    addToFavorites(song: Song) {
        this.favorites.push(song);
    }

    removeFromFavorites(songId: string) {
        this.favorites = this.favorites.filter(song => {
            return song.id !== songId;
        });
    }

    isFavorite(songId: string) {
        return this.favorites.find( ({ id }) => id === songId );
    }
}
