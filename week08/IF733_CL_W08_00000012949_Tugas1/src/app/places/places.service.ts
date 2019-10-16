import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private places: Place[] = [
        new Place(
            'p1',
            'Serpong M-Town',
            '2BR Apartment near Universitas Multimedia Nusantara',
            'https://www.vlit.org/wp-content/uploads/2019/03/3820796_17122109570060532335.jpg',
            7000000000,
            new Date('2019-01-01'),
            new Date('2019-12-31')
        ),
        new Place(
            'p2',
            'Kos Da Murah',
            'Resting place for bokek souls',
            'https://rumahdijual.com/attachments/tangerang/9806272d1488200932-dijual-kost-dekat-umn-sumarecon-gading-serpong-mewah-fasilitas-img-20170227-wa0007.jpg',
            500000000,
            new Date('2019-01-01'),
            new Date('2019-12-31')
        ),
        new Place(
            'p3',
            'Rumrum Mom',
            'A house of Mercy',
            'https://img.rea-asia.com/rumah123/750x420-crop/house/ho44/4475781/hos4475781-rumah-di-jual-di-gading-serpong-tangerang-15550548929495.jpg',
            12000000000,
            new Date('2019-01-01'),
            new Date('2019-12-31')
        )
    ];

    constructor() { }

    getAllPlaces() {
        return [...this.places];
    }
    
    getPlace(placeId: string) {
        return this.places.find(place => place.id === placeId);
    }

}
