import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A simple test recipe', 'https://spicysouthernkitchen.com/wp-content/uploads/tomato-cream-sauce-17.jpg'),
    new Recipe('Test Recipe 2', 'A simple test recipe2', 'https://spicysouthernkitchen.com/wp-content/uploads/tomato-cream-sauce-17.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
