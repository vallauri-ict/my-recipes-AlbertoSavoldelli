import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];

  constructor(private dataStorageService: DataStorageService) { }

  getIngredients() {
    this.dataStorageService.sendGetRequest('ingredients').subscribe(
      (data) => {
        this.ingredients = data as IngredientModel[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addIngredient(ingredient: IngredientModel) {
    let ingredientFound = false;
    for (let item of this.ingredients) {
      if (item.name.toLowerCase() == ingredient.name.toLowerCase()) {
        ingredientFound = true;
        item.amount += ingredient.amount;
        this.patchIngredient({ amount: item.amount }, item.id);
        break;
      }
    }
    if (!ingredientFound) {
      this.ingredients.push(ingredient);
      this.postIngredient(ingredient);
    }
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    for(const ingredient of ingredients){
      this.addIngredient(ingredient)
    }
  }

  postIngredient = (ingredient: IngredientModel) => {
    this.dataStorageService
      .sendPostRequest('shopping-list', ingredient)
      .subscribe(
        (succ) => {
          console.log(succ);
        },
        (err) => {
          console.error(err);
        }
      );
  };

  patchIngredient = (data: any, id: number) => {
    this.dataStorageService
      .sendPatchtRequest('shopping-list/' + id, data)
      .subscribe(
        (succ) => {
          console.log(succ);
        },
        (err) => {
          console.error(err);
        }
      );
  };
}
