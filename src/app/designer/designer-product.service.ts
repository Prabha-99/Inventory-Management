import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../billing/billing.component';



@Injectable({
  providedIn: 'root'
})
export class DesignerProductService {
  private apiUrl = 'http://localhost:8080/api/designer/deductProduct'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }

  deductProduct(productId: number, updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${productId}`, updatedProduct);
  }

}
