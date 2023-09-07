import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastronomicCultureComponent } from './pages/gastronomic-culture/gastronomic-culture.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    GastronomicCultureComponent,
    RecipeComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
