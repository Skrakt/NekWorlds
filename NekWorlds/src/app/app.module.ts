import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GamesFinderComponent } from './games-finder/games-finder.component';
import { FondMouvantComponent } from './fond-mouvant/fond-mouvant.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GamesFinderComponent,
    FondMouvantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
