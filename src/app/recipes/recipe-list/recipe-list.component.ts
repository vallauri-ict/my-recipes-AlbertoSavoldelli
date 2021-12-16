import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipes.model';
import { RecipesService } from 'src/app/shared/recipes.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>()
  recipes:RecipeModel[]=[];
  selectedRecipe:RecipeModel;
  constructor(private dataStorageService:DataStorageService) {
    // this.recipes=recipesService.recipes;
    // this.selectedRecipe=this.recipes[0];
   }

  ngOnInit(): void {
    this.dataStorageService.sendGetRequest("recipes").subscribe(data=>{
      //console.log(data)
      this.recipes = data as RecipeModel[];
      this.selectedRecipe = this.recipes[0];
    })
  }
  onRecipeSelected(recipe:RecipeModel){
    this.recipeSelectedInList.emit(recipe);
  }

}
