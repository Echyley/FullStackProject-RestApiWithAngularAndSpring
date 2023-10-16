import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalUpdateService {
  public isModalOpen: boolean = false;
  private updateUrl = 'http://localhost:8080/librarydb/bookShelf';

  constructor(private http: HttpClient) {}

  updateBook(updatedBook: any): Observable<any> {
    const url = `${this.updateUrl}/${updatedBook.id}`;
    return this.http.put(url, updatedBook);
  }
}
