import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() selectedPage = new EventEmitter<string>()
  pageActive: string

  constructor() {
    this.pageActive = 'Recetas'
  }

  chancePageActive(page: string) {
    this.pageActive = page
    this.selectedPage.emit(page)
  }

}
