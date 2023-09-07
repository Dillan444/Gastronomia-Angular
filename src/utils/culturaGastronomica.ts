import { Pais } from "./pais"
import { Receta } from "./receta"
import { Restaurante } from "./restaurante"

export class CulturaGastronomica {
  private name: string
  private description: string
  private countries: Pais[] = []

  recipes: Receta[] = []
  restaurant: Restaurante[] = []

  constructor(name: string, description: string, countries: Pais[], recipes?: Receta[]) {
    this.name = name
    this.description = description
    this.addCountries(countries)
    recipes? this.recipes.push(...recipes) : false
  }

  addRecipes(recipe: Receta) {
    this.recipes.push(recipe)
  }

  addRestaurant(restaurant: Restaurante) {
    restaurant.addGastronomicCulture(this)
    this.restaurant.push(restaurant)
  }

  addCountries(countries: Pais[]) {
    countries.forEach(country => {
      country.addGastronomicCulture(this)
    });
  }

  getName(): string {
    return this.name
  }

  getRecipes(): Receta[] {
    return this.recipes
  }
}
