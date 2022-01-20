import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(public recipeService:RecipeService, private shoppingList:ShoppingListService) { }

  ngOnInit(): void { }

  sendToShoppingList=():void=>{
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }
}
