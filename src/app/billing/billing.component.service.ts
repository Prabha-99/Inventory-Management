import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  [x: string]: any;
 
 

  getProductNames() {
    return this.http.get<string[]>('http://localhost:8080/api/bill/getnames');
  }

  constructor(private http: HttpClient) { }



  saveBill(formData: any): Observable<any> {
    const url = 'https://localhost:8080/api/bill/save';
    return this.http.post(url, formData);
  }

  

}
