import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CrudService } from 'src/app/services/crud.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
})
export class BookShelfComponent {
  books: any[] = [];

  public titleList: Array<any> = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getBook(); // Chamada do método getBooks() no componente
  }

  noBooks() {}

  //Read
  getBook() {
    this.crudService.getBooks().subscribe((books: any[]) => {
      this.books = books;
    });
  }

  //Update
  updateBook(book: any) {}

  //Delete
  deleteBook(id: number) {
    this.crudService.deleteBook(id).subscribe(() => {
      // Handle the deletion as needed
      console.log('Book deleted');
      // Refresh the book list
      this.getBook();
    });
  }
}
