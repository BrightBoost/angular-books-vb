import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>Stavros BookApp</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/users'>Users</a></li>
      <li><a class='nav-link' routerLink='/books'>Books</a></li>
      <li><a class='nav-link' routerLink='/teams'>Teams</a></li>
      <li><a class='nav-link' routerLink='/add-user'>Add User</a></li>
      <li><a class='nav-link' routerLink='/add-book'>Add Book</a></li>
      <li><a class='nav-link' routerLink='/add-team'>Add Team</a></li>
    </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
       `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stavrosApp';
}
