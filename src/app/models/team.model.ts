import { User } from "./user.model";

export class Team {
  teamId: number;
  users: Array<User>;

  constructor(teamId: number, users: Array<User>) {
    this.teamId = teamId;
    this.users = users;
  }
}
