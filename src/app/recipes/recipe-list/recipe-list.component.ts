import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipes.model';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>()
  recipes:RecipeModel[]=[];
  selectedRecipe:RecipeModel;
  constructor(private recipesService:RecipesService) {
    this.recipes=recipesService.recipes;
    this.selectedRecipe=this.recipes[0];
   }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:RecipeModel){
    this.recipeSelectedInList.emit(recipe);
  }

}
