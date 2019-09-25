import { Injectable } from '@angular/core';
import {Ukm} from "./ukm.model";
import {Place} from "../../../../IF733_CL_W07_00000012949_Tugas1/src/app/places/place.model";

@Injectable({
    providedIn: 'root'
})
export class UkmService {

    private ukm: Ukm[] = [
        new Ukm(
            'u1',
            'Basket',
            'Basket adalah UKM bla bla bla'
        ),
        new Ukm(
            'u2',
            'Drama',
            'Drama adalah UKM bla bla bla'
        ),
        new Ukm(
            'u3',
            'Volly',
            'Volly adalah UKM bla bla bla'
        ),
        new Ukm(
            'u4',
            'Futsal',
            'Futsal adalah UKM bla bla bla'
        ),
        new Ukm(
            'u5',
            'Coding',
            'Coding adalah UKM bla bla bla'
        ),
    ];

    private myUkm: Ukm[] = [];

    constructor() { }

    getAllUkm() {
        return [...this.ukm];
    }

    getAllMyUkm() {
        return [...this.myUkm];
    }

    addToMyUkm(ukm: Ukm) {
        this.myUkm.push(ukm);
        console.log('ez', this.myUkm);
    }

    removeFromMyUkm(ukmId: string) {
        this.myUkm = this.myUkm.filter(ukm => {
            return ukm.id !== ukmId;
        });
    }

}
