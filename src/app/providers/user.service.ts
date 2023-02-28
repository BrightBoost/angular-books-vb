import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:8080/api/users';
  // dependency injection of object of type HttpClient
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
  })
  };

  getUsers(): Observable<Array<User>> {
    return this.http
      .get(this.usersEndpoint, this.httpOptions)
      .pipe(map((res) => <User[]>res));
  }

  addUser(user: User): Observable<User> {
    console.dir(user);
    return this.http.post<User>(this.usersEndpoint,  {userId: user.userId, username: user.username, email: user.email, books: []}, this.httpOptions);
    
  }
}