import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockManagerProductPopupService {

  private apiUrl = 'http://localhost:8080/api/product/saveProduct';

  constructor(private http: HttpClient) { }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  getCategory() {
    return this.http.get<any[]>('http://localhost:8080/api/v1/category/getAllCategory'); //get categories
  }
}
