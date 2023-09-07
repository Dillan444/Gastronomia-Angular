import { Component, Input } from '@angular/core';
import { GastronomicCultureService } from 'src/app/services/gastronomic-culture.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';
import { Producto } from 'src/utils/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input('gastronomicCulture') set receiveRestaurants(gastCult: CulturaGastronomica) {
    this.getProducts(gastCult)
  }
  products: Producto[] = []
  constructor(private _gastronomicCulture: GastronomicCultureService ) {
  }

  getProducts(cultGast: CulturaGastronomica) {
    this.products = this._gastronomicCulture.getProductsOfGastronomicCulture(cultGast)
  }
}
