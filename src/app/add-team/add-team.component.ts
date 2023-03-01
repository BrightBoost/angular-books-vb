import { Component } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '../providers/team.service';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  newTeam: Team = new Team(0, []);
  users: any = [];

  constructor(private teamService: TeamService, private userService: UserService) {

  }
  onSubmit() {
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
}
