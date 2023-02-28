import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../providers/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Book = new Book(0, '', '');
  book: string = '';
  author: string = '';

  constructor(private bookService: BookService) {

  }
  onSubmit() {
    this.bookService.addBook(this.newBook).subscribe();   
    console.log('Ik ben hier');
  }

}