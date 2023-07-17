import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseCoordinatorPurchaseOrderService {
  private readonly API_URL = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) {}

  reduceProductQuantity(product_name: string, product_brand: string, product_quantity: number): Observable<void> {
    const payload = { product_name, product_brand, product_quantity };
    return this.http.post<void>(`${this.API_URL}/increase`, payload);
  }

  getGrn() {
    return this.http.get<any[]>('http://localhost:8080/api/GRN/getAllGrn'); //get grn
  }
}
