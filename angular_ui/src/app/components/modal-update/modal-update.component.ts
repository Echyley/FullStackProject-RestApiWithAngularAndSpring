import { OnInit, Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/books-interface';
import { ModalUpdateService } from 'src/app/services/modal-update.service';
import { BookShelfComponent } from '../book-shelf/book-shelf.component';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css'],
})
export class ModalUpdateComponent {
  @Input() book: any;
  @Input() editedBook: any;

  constructor(
    private route: ActivatedRoute,
    public modalUpdateService: ModalUpdateService,
    public dialogRef: MatDialogRef<ModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.book = { ...data };
  }

  onSave() {
    // Clone o objeto editedBook para evitar a alteração de dados no objeto original
    const updatedBook = { ...this.editedBook };
  
    // Chame o método de atualização para salvar as alterações
    this.modalUpdateService.updateBook(updatedBook).subscribe((response) => {
      // Lida com a resposta do servidor, como fechar o modal ou atualizar a lista de livros.
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
