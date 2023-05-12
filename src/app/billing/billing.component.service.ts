import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  getProductNames() {
    return this.http.get<string[]>('http://localhost:8080/api/bill/getnames'); //get material name
  }

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/billdata';

  saveBill(formData: any) {
    const url = `${this.apiUrl}/save`;
    return this.http.post(url, formData);
  }



  uploadFile(fData: FormData) {
    return this.http.post('http://localhost:8080/api/bill/pdf', fData);
  }
}
