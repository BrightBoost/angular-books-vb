import { Component } from '@angular/core';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { TeamService } from '../providers/team.service';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  newTeam: Team = new Team(0, []);
  users: any [] = [];

  constructor(private teamService: TeamService, private userService: UserService) {

  }
  onSubmit() {
    this.newTeam.users =  this.getUsersById(this.newTeam.users);
    console.dir(this.newTeam);
    this.teamService.addTeam(this.newTeam).subscribe();   
    console.log('Ik ben hier');
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }
  getUsersById(ids: any): Array<User> {
    let arrUsers: Array<User> = [];
    for (let id of ids) {
      console.log(id);
      let user = this.users.find((u) => u.userId == id);
      if (user != undefined) {
        arrUsers.push(user);
      }
    }
    return arrUsers;
}
}
