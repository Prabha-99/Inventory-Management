import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdEditService {

  private getUrl = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) { }

   getCategory() {
    return this.http.get<any[]>('http://localhost:8080/api/v1/category/getAllCategory'); //get categories
  }

  getProduct(product_id: number): Observable<any> {
    const url = `${this.getUrl}/${product_id}`;
    return this.http.get<any>(url);
  }

  updateProduct(product_id: number, product: any): Observable<any> {
    const url = `${this.getUrl}/${product_id}`;
    return this.http.put<any>(url, product);
  }
}
