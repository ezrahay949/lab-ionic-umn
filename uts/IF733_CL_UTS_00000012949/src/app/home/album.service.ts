import { Injectable } from '@angular/core';
import {Album} from "./album.model";
import {Song} from "./song.model";

@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    private albums: Album[] = [
        {
            id: 'a1',
            name: 'Welcome to the Black Parade',
            artist: 'My Chemical Romance',
            imgUrl: 'https://i.ibb.co/2vMvvNP/Screen-Shot-2019-09-23-at-13-06-40-PM.png',
            songs: [
                {
                    id: 'a1s1',
                    title: 'I don\'t love you',
                    minute: 3,
                    second: 59,
                },
                {
                    id: 'a1s2',
                    title: 'Teenagers',
                    minute: 2,
                    second: 42,
                },
                {
                    id: 'a1s3',
                    title: 'Welcome to the Black Parade',
                    minute: 5,
                    second: 11,
                },
                {
                    id: 'a1s4',
                    title: 'This is How I Dissapear',
                    minute: 3,
                    second: 59,
                },
                {
                    id: 'a1s5',
                    title: 'House of Wolves',
                    minute: 3,
                    second: 59,
                }
            ]
        },
        {
            id: 'a2',
            name: 'Love Me / Love Me Not',
            artist: 'HONNE',
            imgUrl: 'https://i.ibb.co/stR16bb/Screen-Shot-2019-09-23-at-13-06-57-PM.png',
            songs: [
                {
                    id: 'a2s1',
                    title: 'I might',
                    minute: 4,
                    second: 16,
                },
                {
                    id: 'a2s2',
                    title: 'Me & You',
                    minute: 4,
                    second: 4,
                },
                {
                    id: 'a2s3',
                    title: 'Day 1',
                    minute: 3,
                    second: 54,
                },
                {
                    id: 'a2s4',
                    title: 'I Got YOu',
                    minute: 3,
                    second: 32,
                }
            ]
        },
        {
            id: 'a3',
            name: 'Pejantan Tangguh',
            artist: 'Sheila on 7',
            imgUrl: 'https://i.ibb.co/QQ6MP8J/Screen-Shot-2019-09-23-at-13-06-25-PM.png',
            songs: [
                {
                    id: 'a3s1',
                    title: 'Pejantan Tangguh',
                    minute: 3,
                    second: 27,
                },
                {
                    id: 'a3s2',
                    title: 'Itu Aku',
                    minute: 4,
                    second: 39,
                },
                {
                    id: 'a3s3',
                    title: 'Pemuja Rahasia',
                    minute: 3,
                    second: 53,
                },
                {
                    id: 'a3s4',
                    title: 'Pilihlah Aku',
                    minute: 4,
                    second: 22,
                },
                {
                    id: 'a3s5',
                    title: 'Generasi Patah Hati',
                    minute: 5,
                    second: 6,
                },
                {
                    id: 'a3s6',
                    title: 'Ketidakwarasan Padaku',
                    minute: 3,
                    second: 53,
                }
            ]
        }
    ];

    constructor() { }

    getAllAlbums() {
        return [...this.albums];
    }

    getAlbum(albumId: string) {
        return this.albums.find(album => album.id === albumId);
    }

}
