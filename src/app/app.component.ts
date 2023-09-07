import { Component } from '@angular/core';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gastronomia';
  chosenGastronomicCulture: CulturaGastronomica | null = null
  pageActive: string

  constructor() {
    this.pageActive = ''
  }

  chooseGastronomicCulture(gastronomicCulture: CulturaGastronomica){
    this.chosenGastronomicCulture = gastronomicCulture
  }

  showPage(page: string) {
    this.pageActive = page
  }
}
