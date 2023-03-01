import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

}
