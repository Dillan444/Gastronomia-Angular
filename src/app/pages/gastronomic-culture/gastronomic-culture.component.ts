import { Component } from '@angular/core';
import { GastronomicCultureService } from 'src/app/services/gastronomic-culture.service';
// import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-gastronomic-culture',
  templateUrl: './gastronomic-culture.component.html',
  styleUrls: ['./gastronomic-culture.component.css']
})
export class GastronomicCultureComponent {
  list: string[] = []

  constructor(private _gastronomicCulture: GastronomicCultureService) {
    this.list = this._gastronomicCulture.getGastronomicCultures()
  }

}
