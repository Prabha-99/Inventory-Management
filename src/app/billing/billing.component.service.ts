import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './billing.component';
import { Observable, map } from 'rxjs';
import { String } from 'lodash';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  
  constructor(private http: HttpClient) { 

  }


  getproduct_name() {
    return this.http.get<any>('http://localhost:8080/api/bill/getnames'); //get material name
  }

  getproduct_price() {
    return this.http.get<any>('http://localhost:8080/api/bill/getprice'); //get material name
  }




  private apiUrl = 'http://localhost:8080/api/billdata';

  saveBill(formData: any) {
    const url = `${this.apiUrl}/save`;
    return this.http.post(url, formData);
  }



  uploadFile(fData: FormData) {
    return this.http.post('http://localhost:8080/api/bill/pdf', fData);
  }


}
