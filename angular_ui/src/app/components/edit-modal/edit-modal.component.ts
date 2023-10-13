import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-modal.component.html',
})
export class EditModalComponent {
  editedBook: any;

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editedBook = { ...data.book };
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Implement logic to save changes to the server
    this.dialogRef.close(this.editedBook);
  }
}