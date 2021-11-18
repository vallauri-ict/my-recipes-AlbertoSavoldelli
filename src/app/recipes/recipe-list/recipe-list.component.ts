import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[]=[
    new RecipeModel(
      "Spaghetti alla chitarra",
      "Un particolare tipo di pasta che...",
      "https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/Maccheroni-alla-chitarra.jpg"
    ),
    new RecipeModel(
      "Lasagne alla bolognese",
      "Pasta emiliana molto calorica sempre presente...",
      "https://www.foodblog.it/wp-content/uploads/2020/01/lasagne.jpg"
    ),
    new RecipeModel(
      "Gnocchi ai formaggi",
      "Pasta piemontese",
      "https://blog.giallozafferano.it/ricettiamoconmary/wp-content/uploads/2020/02/IMG_7710-960x625.jpg"
    ),
    new RecipeModel(
      "Tiramisu",
      "Classico dolce italiano",
      "https://www.buttalapasta.it/wp-content/uploads/2012/04/ricetta-tiramisu-classico.jpg"
    )

  ]

  selectedRecipe:RecipeModel;
  constructor() {
    this.selectedRecipe=this.recipes[0];
   }

  ngOnInit(): void {
  }

}
