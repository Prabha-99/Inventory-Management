import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DesignerProduct } from './designer-product';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  private apiUrl = 'http://localhost:8080/api/product';
  private readonly API_URL = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<DesignerProduct[]> {
    return this.http.get<DesignerProduct[]>(this.apiUrl);
  }

  reduceProductQuantity(product_name: string, product_brand: string, product_quantity: number): Observable<void> {
    const payload = { product_name, product_brand, product_quantity };
    return this.http.post<void>(`${this.API_URL}/reduce`, payload);
  }


}
