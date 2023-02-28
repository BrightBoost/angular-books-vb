import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../providers/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
      }
    );
  }
}


