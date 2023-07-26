import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdEditService {

  private apiUrl = 'http://localhost:8080/api/product';
  // private getcat = 'http://localhost:8080/api/v1/category/getAllCategory';

  constructor(private http: HttpClient) { }

  // getCategory(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.getcat}`);
  // }

  getProducts(product_id: number): Observable<any> {
    const url = `${this.apiUrl}/${product_id}`;
    return this.http.get<any>(url);
  }

  updateProducts(product_id: number, product: any): Observable<any> {
    const url = `${this.apiUrl}/${product_id}`;
    return this.http.put<any>(url, product);
  }

}
