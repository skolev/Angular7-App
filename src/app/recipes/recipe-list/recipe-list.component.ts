import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      0,
      'A Test Recipe',
      'This is simply a test',
      'https://gdsit.cdn-immedia.net/2017/01/CARNE.jpg'),
    new Recipe(
      1,
      'Recipe',
      'This is simply a test',
      'https://gdsit.cdn-immedia.net/2017/01/CARNE.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
