import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipes.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:RecipeModel[]=[];
  selectedRecipe:RecipeModel;
  constructor(private dataStorageService:DataStorageService) { }
  getRecipes(){
    this.dataStorageService.sendGetRequest("recipes").subscribe(data=>{
      this.recipes = data as RecipeModel[];
      //this.selectedRecipe = this.recipes[0];
    },
    error=>{
      console.error(error);
    })
  }
}
