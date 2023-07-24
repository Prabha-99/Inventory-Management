import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdEditService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get<any[]>('http://localhost:8080/api/v1/category/getAllCategory');
  }

  updateProduct(product: any) {
    return this.http.put('http://localhost:8080/api/product/update', product);
  }

}
