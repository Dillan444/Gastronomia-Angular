import { Category } from "./category";
import { CulturaGastronomica } from "./culturaGastronomica";
import { Pais } from "./pais";
import { Producto } from "./product";
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
const restaurant1 = new Restaurante('Restaurante1', 'city', 'country', 4, new Date(2002,4,20))
const restaurant2 = new Restaurante('Restaurante2', 'city', 'country', 4, new Date(2002,4,20))
const restaurant3 = new Restaurante('Restaurante3', 'city', 'country', 4, new Date(2002,4,20))
const restaurant4 = new Restaurante('Restaurante4', 'city', 'country', 4, new Date(2002,4,20))


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
  'receta1', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura1.addRecipes(new Receta(
  'receta2', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura1.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura2.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura2.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura2.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura2.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura2.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))
cultura2.addRecipes(new Receta(
  'receta3', 'Breve descripción de la receta', 'https://media.istockphoto.com/id/944478708/es/foto/par-comer-almuerzo-con-ensaladas-frescas-y-aperitivos.jpg?s=612x612&w=0&k=20&c=0wIH_Kmn-twnYQQJBmjNLl8KnrglSC0aH9xsq1OnICc=', 'Texto donde describe la preparación  de la receta', 'Link del video'
))

cultura1.addRestaurant(restaurant1)
cultura1.addRestaurant(restaurant2)
cultura2.addRestaurant(restaurant3)
cultura3.addRestaurant(restaurant4)

// Products
cultura1.addProduct(new Producto(
  'Producto1', "Esta es una descripción del producto", "Historia sobre el producto", new Category('Nombre de una categoría')
))
cultura2.addProduct(new Producto(
  'Producto2', "Esta es una descripción del producto", "Historia sobre el producto", new Category('Nombre de una categoría')
))
cultura2.addProduct(new Producto(
  'Producto3', "Esta es una descripción del producto", "Historia sobre el producto", new Category('Nombre de una categoría')
))
cultura2.addProduct(new Producto(
  'Producto4', "Esta es una descripción del producto", "Historia sobre el producto", new Category('Nombre de una categoría')
))

gastronomicCultures.push(cultura1, cultura2, cultura3)


