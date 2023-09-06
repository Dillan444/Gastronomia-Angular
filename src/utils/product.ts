import { Category } from "./category"

export class Producto {
  name: string
  description: string
  history: string
  category: Category

  constructor(name: string,description: string,history: string, category: Category) {
    this.name = name
    this.description = description
    this.history = history
    this.category = category
  }

}
