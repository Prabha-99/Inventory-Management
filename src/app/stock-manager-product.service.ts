import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductStock } from './stock-manager-product/stock-manager-product.component';

@Injectable({
  providedIn: 'root'
})
export class StockManagerProductService {

  private apiUrl = 'http://localhost:8080/api/product/getAllProduct';

  constructor(private http: HttpClient) { }

  getStockProducts(): Observable<ProductStock[]> {
    return this.http.get<ProductStock[]>(this.apiUrl);
}
}
