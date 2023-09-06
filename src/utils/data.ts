import { CulturaGastronomica } from "./culturaGastronomica";
import { Pais } from "./pais";
import { Receta } from "./receta";
import { Restaurante } from "./restaurante";

export const gastronomicCultures: CulturaGastronomica[] = []

// Countries
const españa = new Pais('España')
const italia = new Pais('Italia')
const mexico = new Pais('Mexico')
const grecia = new Pais('Grecia')
const marruecos = new Pais('Marruecos')
const portugal = new Pais('Portugal')

// Restaurants
const restaurant1 = new Restaurante('restaurante1', 'city', 'country', 4, new Date(2002,4,20))


const cultura1 = new CulturaGastronomica(
  'Gastronomia Italiana',
  'Si tratamos de imaginarnos la cultura gastronómica italiana, la mayoría de la gente va a pensar en pasta o pizza, espagueti o salchichas. Pero como la mayoría de las tierras antiguas y con una larga historia, Italia tiene una cocina muy variada. Las variaciones regionales no se aprecian en ninguna parte de una forma tan brusca como la diferencia que existe entre la cocina del norte y la cocina del sur de Italia.',
  [italia]
)
const cultura2 = new CulturaGastronomica(
  'Gastronomia Ocidental',
  'Si tratamos de imaginarnos la cultura gastronómica italiana, la mayoría de la gente va a pensar en pasta o pizza, espagueti o salchichas. Pero como la mayoría de las tierras antiguas y con una larga historia, Italia tiene una cocina muy variada. Las variaciones regionales no se aprecian en ninguna parte de una forma tan brusca como la diferencia que existe entre la cocina del norte y la cocina del sur de Italia.',
  [portugal, grecia, españa, marruecos]
)
const cultura3 = new CulturaGastronomica(
  'Gastronomia Mexicana',
  'Si tratamos de imaginarnos la cultura gastronómica italiana, la mayoría de la gente va a pensar en pasta o pizza, espagueti o salchichas. Pero como la mayoría de las tierras antiguas y con una larga historia, Italia tiene una cocina muy variada. Las variaciones regionales no se aprecian en ninguna parte de una forma tan brusca como la diferencia que existe entre la cocina del norte y la cocina del sur de Italia.',
  [mexico]
)

cultura1.addRecipes(new Receta(
  'receta1', 'Breve descripción de la receta', 'Link de una imagen', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura1.addRecipes(new Receta(
  'receta2', 'Breve descripción de la receta', 'Link de una imagen', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura1.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'Link de una imagen', 'Texto donde describe la preparación  de la receta', 'Link del video'
))

cultura1.addRestaurant(restaurant1)

gastronomicCultures.push(cultura1, cultura2, cultura3)


