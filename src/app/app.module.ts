import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { TeamsComponent } from './teams/teams.component';
import { appRoutes} from "./app.routes";
import { CompetitionService } from "./core/competition.service"
import {FixtureService} from "./core/fixture.service";
import {TeamService} from "./core/team.service";
import {MaterialModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    CompetitionsComponent,
    TeamsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CompetitionService,
    FixtureService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
