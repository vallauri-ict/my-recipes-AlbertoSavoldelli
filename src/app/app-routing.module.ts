import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

//creiamo 3 path, due specifici e uno di default
//che parte in ogni caso se non viene specificato un path
const appRoutes: Routes = [
  {
    //path match full indica che in ogni caso in cui non ci sia una route
    //procede a mettere come path stringa vuota
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path:'new', component:RecipeEditComponent},
      { path:':id', component:RecipeDetailComponent},
      { path:':id/edit', component:RecipeEditComponent}
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
