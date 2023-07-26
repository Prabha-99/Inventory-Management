import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenerateGINService {
    private apiUrl = 'http://localhost:8080/api/GIN/submit';
  
    constructor(private http: HttpClient, public dialog: MatDialog) { }
  
    submit(gin: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, gin);
    }

    getProducts() {
      return this.http.get<any[]>('http://localhost:8080/api/product/getAllProduct'); //get products
    }
  }