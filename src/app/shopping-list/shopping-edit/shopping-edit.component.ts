import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredientModel } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  ingredientName:string = '';
  ingredientAmount:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addIngredient(){
    if (this.ingredientAmount > 0){
      const newIngredient:IngredientModel = new IngredientModel(this.ingredientName,this.ingredientAmount);
      this.ingredientAdded.emit(newIngredient);
    }
    else
    {
      alert("Amount must be > 0!");
    }
  }

  clearList(){
    this.ingredientName = "";
    this.ingredientAmount = 0;
  }

}
