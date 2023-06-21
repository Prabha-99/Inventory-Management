import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdAddproductService {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getProducts() {
    return this.http.get<any[]>('http://localhost:8080/api/product/getAllProduct'); //get products
  }
}
