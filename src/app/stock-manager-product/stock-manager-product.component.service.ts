import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockManagerProductComponentService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any[]>('http://localhost:8080/api/product/getAllProduct'); //get products details
  }

}
