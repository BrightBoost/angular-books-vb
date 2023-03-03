import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamsEndpoint: string = 'http://localhost:8080/api/teams';
  // dependency injection of object of type HttpClient
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
  })
  };

  getTeams(): Observable<Array<Team>> {
    return this.http
      .get(this.teamsEndpoint, this.httpOptions)
      .pipe(map((res) => <Team[]>res));
  }

  addTeam(team: Team): Observable<Team> {
    console.dir(team);
    return this.http.post<Team>(this.teamsEndpoint,  {teamId: team.teamId, users: team.users}, this.httpOptions);
    
  }
}
