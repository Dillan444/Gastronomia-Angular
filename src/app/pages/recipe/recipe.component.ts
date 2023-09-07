import { Component, Input } from '@angular/core';
import { Receta } from 'src/utils/receta';
import { GastronomicCultureService } from 'src/app/services/gastronomic-culture.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input('gastronomicCulture') set insertGatronomicCulture(gastronomicCulture: CulturaGastronomica) {
    this.getRecipes(gastronomicCulture)
  }
  recipes: Receta[] = []

  constructor(private _gastronomicCulture: GastronomicCultureService) {
  }

  getRecipes(gastCult: CulturaGastronomica) {
    this.recipes =  this._gastronomicCulture.getRecipesOfGastronomicCulture(gastCult)
  }
}
