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
    new IngredientModel("Gnocchi",2)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
