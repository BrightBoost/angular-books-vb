import { Book } from "./book.model";

export class User {
  userId: number;
  username: string;
  email: string;
  books: Array<Book>;
  constructor(userId: number, username: string, email: string, books: Array<Book>) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.books = books;
  }
}
