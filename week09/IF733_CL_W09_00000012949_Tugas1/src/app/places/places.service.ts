import {Injectable} from '@angular/core';
import {Place} from './place.model';
import {AuthService} from '../auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import {take, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private places = new BehaviorSubject<Place[]>([
        new Place(
            'p1',
            'Serpong M-Town',
            '2BR Apartment near Universitas Multimedia Nusantara',
            'https://www.vlit.org/wp-content/uploads/2019/03/3820796_17122109570060532335.jpg',
            7000000000,
            new Date('2019-01-01'),
            new Date('2019-12-31'),
            'u1'
        ),
        new Place(
            'p2',
            'Kos Da Murah',
            'Resting place for bokek souls',
            // tslint:disable-next-line:max-line-length
            'https://rumahdijual.com/attachments/tangerang/9806272d1488200932-dijual-kost-dekat-umn-sumarecon-gading-serpong-mewah-fasilitas-img-20170227-wa0007.jpg',
            500000000,
            new Date('2019-01-01'),
            new Date('2019-12-31'),
            'u1'
        ),
        new Place(
            'p3',
            'Rumrum Mom',
            'A house of Mercy',
            // tslint:disable-next-line:max-line-length
            'https://img.rea-asia.com/rumah123/750x420-crop/house/ho44/4475781/hos4475781-rumah-di-jual-di-gading-serpong-tangerang-15550548929495.jpg',
            12000000000,
            new Date('2019-01-01'),
            new Date('2019-12-31'),
            'u1'
        )
    ]);

    get allPlaces() {
        return this.places.asObservable();
    }

    constructor(
        private authService: AuthService,
    ) {
    }

    getPlace(placeId: string) {
        return this.places.pipe(
            take(1),
            map(places => {
                    return {...places.find(p => p.id === placeId)};
                })
        );
    }

    addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
        const newPlace = new Place(
            Math.random().toString(),
            title,
            description,
            'https://www.vlit.org/wp-content/uploads/2019/03/3820796_17122109570060532335.jpg',
            price,
            dateFrom,
            dateTo,
            this.authService.userId
        );
        this.places.pipe(take(1)).subscribe(places => {
            setTimeout(() => {
                this.places.next(places.concat(newPlace));
            }, 1000);
        });
    }
}
