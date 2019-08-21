import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r01',
      title: 'Gado-gado',
      imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
      ingredients: [
        'Tauge', 'Kacang Panjang', 'Jagung', 'Tempe', 'Bumbu Kacang', 'Kecap', 'Kerupuk',
      ],
    },
    {
      id: 'r02',
      title: 'Ketoprak',
      imageUrl: 'https://cdn0-production-images-kly.akamaized.net/hnwv3vhjRm9oMnkEiJ4hI03okog=/1703x0:4439x3649/680x906/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2719983/original/091893400_1549252630-shutterstock_1141107962.JPG',
      ingredients: [
        'Lontong', 'Tauge', 'Tahu', 'Tempe', 'Bumbu Kacang', 'Kecap', 'Kerupuk',
      ],
    },
    {
      id: 'r03',
      title: 'Nasi Uduk',
      imageUrl: 'https://cdn1-production-images-kly.akamaized.net/O6mcDdRamNkW7XRF0CM-zjPuofc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1557598/original/043630500_1491389074-shutterstock_478336309.jpg',
      ingredients: [
        'Nasi Uduk', 'Tahu Semur', 'Telur Dadar', 'Sambel Kacang', 'Kerupuk',
      ],
    },
  ]
  
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    let result = this.recipes.find(recipe => recipe.id === recipeId);
    console.log(result);
  }

  deleteRecipe(recipeId: string) {
    return this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }

}
