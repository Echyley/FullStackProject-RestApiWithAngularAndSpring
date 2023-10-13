import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
})
export class BookShelfComponent {
  books: any[] = [];
  bookToUpdate: any = {};

  constructor(private bookService: CrudService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  //Read
  getBooks() {
    this.bookService.findAllBooks().subscribe((books) => {
      this.books = books;
    });
  }

  //Update
  selectedBook: any;
  
  openEditModal(book: any) {
    this.selectedBook = { ...book }; // Copy book data to selectedBook
    $('#editModal').modal('show'); // Show the modal
  }
  
  saveChanges() {
    // Implement logic to save changes to the server
    // Call your updateBook method here
    this.bookService.updateBook(this.selectedBook).subscribe(() => {
      $('#editModal').modal('hide'); // Hide the modal
      this.getBooks(); // Refresh the book list
    });
  }

  updateBook() {
    this.bookService.updateBook(this.bookToUpdate).subscribe((updatedBook) => {
      // Handle the response as needed
      console.log('Book updated:', updatedBook);
      // Refresh the book list
      this.getBooks();
    });
  }

  //Delete
  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      // Handle the deletion as needed
      console.log('Book deleted');
      // Refresh the book list
      this.getBooks();
    });
  }
}
