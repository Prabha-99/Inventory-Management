import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdAddproductService {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getProducts() {
    return this.http.get<any[]>('http://localhost:8080/api/product/getAllProduct'); //get products
  }

  private apiUrl = 'http://localhost:8080/api/product/deleteProduct';
  deleteProduct(product_id: number): Observable<void> {
    const url = `${this.apiUrl}/${product_id}`;
    return this.http.delete<void>(url);
  }
}
