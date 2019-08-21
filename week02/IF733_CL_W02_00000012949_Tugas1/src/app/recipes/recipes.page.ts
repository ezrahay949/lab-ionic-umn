import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {  

  recipes: Recipe[] = [
    {
      id: 'r01',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients: [
        'Tauge', 'Kacang Panjang', 'Jagung', 'Tempe', 'Bumbu Kacang', 'Kecap', 'Kerupuk',
      ],
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
