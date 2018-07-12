import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A simple test recipe', 'http://www.myrecipes.com/recipe/fettuccine-with-olive-oil'),
    new Recipe('Test Recipe 2', 'A simple test recipe2', 'http://www.myrecipes.com/recipe/fettuccine-with-olive-oil')
  ];

  constructor() { }

  ngOnInit() {
  }

}
