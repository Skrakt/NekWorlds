import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GamesFinderComponent } from './games-finder/games-finder.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "GamesFinder", component: GamesFinderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
