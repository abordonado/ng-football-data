import {Routes, RouterModule} from "@angular/router";

import {CompetitionsComponent} from "./competitions/competitions.component";
import {FixturesComponent} from "./fixtures/fixtures.component";
import {TeamsComponent} from "./teams/teams.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'competitions', pathMatch: 'full'},
  { path: 'competitions', component: CompetitionsComponent},
  { path: 'fixtures', component: FixturesComponent},
  { path: 'teams', component: TeamsComponent},
];
