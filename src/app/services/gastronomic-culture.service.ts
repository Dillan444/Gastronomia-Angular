import { Injectable } from '@angular/core';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';
import { gastronomicCultures } from 'src/utils/data';

@Injectable({
  providedIn: 'root'
})
export class GastronomicCultureService {

  constructor() { }

  getGastronomicCultures() {
    return gastronomicCultures.map(gastCult => gastCult)
  }

  getRecipesOfGastronomicCulture(gastronomicCulture: CulturaGastronomica) {
    return gastronomicCulture.getRecipes()
  }

  getRestaurantsOfGastronomicCulture(gastronomicCulture: CulturaGastronomica) {
    return gastronomicCulture.getRestaurants()
  }

  getProductsOfGastronomicCulture(gastronomicCulture: CulturaGastronomica) {
    return gastronomicCulture.getProducts()
  }
}
