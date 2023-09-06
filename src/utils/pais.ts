import { CulturaGastronomica } from "./culturaGastronomica"

export class Pais {
  name: string

  gastronomicCultures: string[] = []

  constructor(name: string) {
    this.name = name
  }

  addGastronomicCulture(gastronomicCulture: CulturaGastronomica) {
    let nameGastCult = gastronomicCulture.getName()
    if (nameGastCult in this.gastronomicCultures){
      return
    }else {
      this.gastronomicCultures.push(nameGastCult)
    }
  }
}
