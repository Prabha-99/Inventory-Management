import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DesignerProduct } from './designer-product';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  private apiUrl = 'http://localhost:8080/api/designer/deductProduct';

  constructor(private http: HttpClient) { }

  deductProduct(product: DesignerProduct): Observable<DesignerProduct> {
    return this.http.put<DesignerProduct>(`${this.apiUrl}`, product);
  }
}
