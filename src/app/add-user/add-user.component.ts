import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../providers/user.service';
import { Book } from '../models/book.model';
import { BookService } from '../providers/book.service';
import { SelectorContext } from '@angular/compiler';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  books: Array<Book> = [];
  newUser: User = new User(0, '', '', []);
  username: string = '';
  email: string = '';
;

  constructor(private userService: UserService, private bookService: BookService) {
  }

  onSubmit() {
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

}
