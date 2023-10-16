import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/books-interface';
import { ModalUpdateService } from 'src/app/services/modal-update.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css'],
})
export class ModalUpdateComponent {
  @Input() book: any;

  constructor(
    private route: ActivatedRoute,
    public modalUpdateService: ModalUpdateService,
    public dialogRef: MatDialogRef<ModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.book = { ...data };
  }

  onSubmit() {
    if (this.book.title && this.book.genre && this.book.size) {
      this.modalUpdateService.updateBook(this.book).subscribe(
        (response) => {
          this.dialogRef.close(true);
        },
        (error) => {
          console.log('Error while updating the book:', error);
          this.dialogRef.close();
        }
      );
    } else {
      console.error('Campos incompletos. Certifique-se de preencher title, genre e size.');
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
