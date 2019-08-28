import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {  

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(recipeId: string) {
    return this.recipesService.getRecipe(recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipesService.deleteRecipe(recipeId);
  }

}
