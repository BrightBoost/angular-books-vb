import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamService } from './providers/team.service';
import { BookService } from './providers/book.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamsComponent } from './teams/teams.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './providers/user.service';

const appRoutes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'add-team', component: AddTeamComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    AddTeamComponent,
    TeamsComponent,
    BooksComponent,
    AddBookComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [BookService, TeamService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
