import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastronomicCultureComponent } from './pages/gastronomic-culture/gastronomic-culture.component';

@NgModule({
  declarations: [
    AppComponent,
    GastronomicCultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
