import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamService } from './providers/team.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamsComponent } from './teams/teams.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'add-team', component: AddTeamComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    AddTeamComponent,
    AddTeamComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [TeamService],
  bootstrap: [AppComponent],
})
export class AppModule {}
