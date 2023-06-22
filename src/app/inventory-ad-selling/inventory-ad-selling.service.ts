import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryAdSellingService {

  
    private apiUrl = 'http://localhost:8080/products'; // Replace with your actual API endpoint
  
    constructor(private http: HttpClient) {}
  
    reduceProductQuantity(formData: any) {
      return this.http.put<any>(this.apiUrl, formData);
    }

  
}
