import { Component } from '@angular/core';
import { INGREDIENTS } from '../mock-ingredients';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.css']
})
export class IngredientSelectorComponent {
  ingredients = INGREDIENTS;
}
