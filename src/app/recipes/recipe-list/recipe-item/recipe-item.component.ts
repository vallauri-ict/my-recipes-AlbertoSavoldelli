import { Component, Input, OnInit} from '@angular/core';
import { RecipeModel } from 'src/app/models/recipes.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:RecipeModel
  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeService.selectedRecipe = this.recipe;
  }

}
