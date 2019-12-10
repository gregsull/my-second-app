import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = Recipe[] = [
    new Recipe('TestRecipe', 'This is only a test', 'URL to a recipe image goes here'),
    new Recipe('TestRecipe2', 'This is another test', 'URL to second recipe impage goes here')
  ];

  constructor() { }

  ngOnInit() {
  }

}
