import { Component, Output, EventEmitter } from '@angular/core';
import { GastronomicCultureService } from 'src/app/services/gastronomic-culture.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';
// import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-gastronomic-culture',
  templateUrl: './gastronomic-culture.component.html',
  styleUrls: ['./gastronomic-culture.component.css']
})
export class GastronomicCultureComponent {

  @Output() selectedGastronomicCulture = new EventEmitter<CulturaGastronomica>()

  listGastronomicCulture: CulturaGastronomica[] = []
  selectedCulture: CulturaGastronomica | null = null

  constructor(private _gastronomicCulture: GastronomicCultureService) {
    this.listGastronomicCulture = this._gastronomicCulture.getGastronomicCultures()
  }

  selectCulture(culture: CulturaGastronomica) {
    this.selectedCulture = culture
    this.selectedGastronomicCulture.emit(this.selectedCulture)
  }

}
