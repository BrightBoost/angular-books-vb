import { Component } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '../providers/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {

  newTeam: Team = new Team(0, []);
  user: string = '';

  constructor(private teamService: TeamService) {

  }
  onSubmit() {
    this.teamService.addTeam(this.newTeam);   
  }
}
