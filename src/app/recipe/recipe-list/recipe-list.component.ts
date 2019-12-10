import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'TestRecipe', 
    'This is only a test', 
    'https://carlsbadcravings.com/wp-content/uploads/2019/04/baked-porrk-tenderloin-12.jpg'
    ),
    new Recipe(
      'TestRecipe2', 
      'This is another test', 
      'https://mrfisherman.files.wordpress.com/2011/08/grilled-trout-for-blog.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
