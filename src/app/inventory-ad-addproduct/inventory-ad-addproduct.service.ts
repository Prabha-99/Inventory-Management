import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdAddproductService {

  private adminUrl = 'http://localhost:8080/api/product/delete';

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getProducts() {
    return this.http.get<any[]>('http://localhost:8080/api/product/getAllProduct'); //get products
  }

  deleteProduct(productID: number): Observable<any> {
    const url = `${this.adminUrl}/${productID}`;
    return this.http.delete<any>(url);
  }
}
