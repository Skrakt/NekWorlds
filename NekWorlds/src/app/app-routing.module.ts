import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { FondMouvantComponent } from './fond-mouvant/fond-mouvant.component';
import { GamesFinderComponent } from './games-finder/games-finder.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "GamesFinder", component: GamesFinderComponent},
  {path: "FondMouvant", component: FondMouvantComponent},
  {path: "App", component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
