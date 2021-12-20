import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipes.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(public recipeService:RecipeService) {
   }

  ngOnInit(): void {
   this.recipeService.getRecipes();
  }

}
