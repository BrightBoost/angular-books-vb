import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../providers/user.service';
import { BookService } from '../providers/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: User = new User(0, '', '', []);
  username: string = '';
  email: string = '';
  books: any [] = [];

  constructor(private userService: UserService, private bookService: BookService) {
  }

  onSubmit() {
    this.newUser.books = this.getBooksById(this.newUser.books);
    console.dir(this.newUser);
    this.userService.addUser(this.newUser).subscribe();   
    console.log('Ik ben hier');
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
      }
    );
  }

  getBooksById(ids: any): Array<Book> {
    let arrBooks: Array<Book> = [];
    for (let id of ids) {
      console.log(id);
      let book = this.books.find((b) => b.bookId == id);
      if (book != undefined) {
        arrBooks.push(book);
      }
    }
    return arrBooks;
}
}
