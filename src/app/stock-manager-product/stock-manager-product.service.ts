import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StockManagerProductService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>('http://localhost:8090/api/product/getAllProduct'); //get bill details
  }
}
