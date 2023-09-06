import { CulturaGastronomica } from "./culturaGastronomica"

export class Restaurante {
  name: string
  city: string
  country: string
  michelin: number
  achievement: Date

  gastronomicCulture: string[] = []

  constructor(name: string,city: string,country: string,michelin: number,achievement: Date) {
    this.name = name
    this.city = city
    this.country = country
    this.michelin = michelin
    this.achievement = achievement
  }

  addGastronomicCulture(gastronomicCulture: CulturaGastronomica) {
    let nameGastCult = gastronomicCulture.getName()
    if (nameGastCult in this.gastronomicCulture){
      return
      
    }else {
      this.gastronomicCulture.push(nameGastCult)
    }
  }
}
