import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private backendUrl = 'http://localhost:8080'; // A URL do seu backend

  private urlDelete = "http://localhost:8080/books"
  private urlUpdate = "http://localhost:8080/books/update"

  constructor(private http: HttpClient) {}

  findAllBooks(searchTerm: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/books?searchTerm=${searchTerm}`);
  }

  //Create
  createBook(book: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/books`, book);
  }

  //Read
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/books`);
  }

  //Update
  updateBakery(product: any): Observable<HttpEvent<any>> {
    return this.http.put<any>(this.urlUpdate, product);
  }

  //Delete
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.urlDelete}/${id}`);
  }
  
}
