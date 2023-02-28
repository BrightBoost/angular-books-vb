import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksEndpoint: string = 'http://localhost:8080/api/books';
  // dependency injection of object of type HttpClient
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
  })
  };

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get(this.booksEndpoint, this.httpOptions)
      .pipe(map((res) => <Book[]>res));
  }

  addBook(book: Book): Observable<Book> {
    console.dir(book);
    return this.http.post<Book>(this.booksEndpoint,  {teamId: book.bookId, book: book.book, author: book.author}, this.httpOptions);
    
  }
}