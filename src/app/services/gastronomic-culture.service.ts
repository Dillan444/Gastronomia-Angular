import { Injectable } from '@angular/core';
import { gastronomicCultures } from 'src/utils/data';

@Injectable({
  providedIn: 'root'
})
export class GastronomicCultureService {

  constructor() { }

  getGastronomicCultures() {
    return gastronomicCultures.map(gastCult => gastCult.getName())
  }
}
