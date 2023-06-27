import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './inventory-ad-edit.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdEditService {

  private baseUrl = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) { }

  updateProduct(productID: number, product: Product): Observable<Product> {
    const url = `${this.baseUrl}/updateProduct/${productID}`;
    return this.http.put<Product>(url, product);
  }
}
