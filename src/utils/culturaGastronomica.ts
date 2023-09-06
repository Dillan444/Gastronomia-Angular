import { Receta } from "./receta"
import { Restaurante } from "./restaurante"

export class CulturaGastronomica {
  private name: string
  private description: string
  private countries: string[] = []

  recipes: Receta[] = []
  restaurant: Restaurante[] = []

  constructor(name: string, description: string, countries: string[], recipes?: Receta[]) {
    this.name = name
    this.description = description
    this.countries.push(...countries)
    recipes? this.recipes.push(...recipes) : false
  }

  addRecipes(recipe: Receta) {
    this.recipes.push(recipe)
  }

  addRestaurant(restaurant: Restaurante) {
    restaurant.addGastronomicCulture(this)
    this.restaurant.push(restaurant)
  }

  getName(): string {
    return this.name
  }
}
