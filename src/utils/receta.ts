export class Receta {
  name: string
  description: string
  foto: string
  preparation: string
  video: string

  constructor(name: string,description: string,foto: string,preparation: string,video: string) {
    this.name = name
    this.description = description
    this.foto = foto
    this.preparation = preparation
    this.video = video
  }
}
