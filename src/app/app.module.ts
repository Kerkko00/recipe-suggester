import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientSelectorComponent } from './ingredient-selector/ingredient-selector.component';
import { SuggestedRecipesComponent } from './suggested-recipes/suggested-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientSelectorComponent,
    SuggestedRecipesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
