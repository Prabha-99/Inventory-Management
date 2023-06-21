import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdAddproductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>('http://localhost:8090/api/product/getAllProduct'); //get products
  }
}
