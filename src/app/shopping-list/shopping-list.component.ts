import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:IngredientModel[]=[
    new IngredientModel("Pasta",500),
    new IngredientModel("Pomodoro",2)
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(newIngredient:IngredientModel){
    let ingredientFound = false;
    for (const item of this.ingredients) {
      if(item.name.toLowerCase() == newIngredient.name.toLowerCase())
      {
        ingredientFound = true;
        item.amount += newIngredient.amount;
        break;
      }
    }
    if(!ingredientFound){
      this.ingredients.push(newIngredient);
    }
  }

}
