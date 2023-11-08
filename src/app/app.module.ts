import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamGamesComponent } from './team-games/team-games.component';

const routes: Routes = [
  { path: 'leagues/:name', component: LeaguesComponent },
  { path: 'leagues/:name/:teamID', component: TeamGamesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaguesComponent,
    TeamGamesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
