import { Component, Input } from '@angular/core';
import { Restaurante } from 'src/utils/restaurante';
import { GastronomicCultureService } from 'src/app/services/gastronomic-culture.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  @Input('gastronomicCulture') set receiveRestaurants(gastCult: CulturaGastronomica) {
    this.getRestaurants(gastCult)
  }
  restaurants: Restaurante[] = []

  constructor(private _gastronomicCulture: GastronomicCultureService ) {
  }

  getRestaurants(gastronomicCulture: CulturaGastronomica) {
    this.restaurants = this._gastronomicCulture.getRestaurantsOfGastronomicCulture(gastronomicCulture)
  }

}
