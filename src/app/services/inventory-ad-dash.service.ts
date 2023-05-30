import { Injectable } from '@angular/core';
import { RequestBaseService } from './request-base.service';
import { HttpClient } from '@angular/common/http';

const API_URL = `${environment.apiBaseUrl}/api/books`;

@Injectable({
  providedIn: 'root'
})
export class InventoryAdDashService extends RequestBaseService {

  constructor(autheticationService: AuthenticationService, http: HttpClient) {
    super(autheticationService, http);
  }

  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL, book, { headers: this.getHeaders });
  }
}
