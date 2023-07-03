import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenerateGRNService {
    private apiUrl = 'http://localhost:8080/api/GRN/submit';
  
    constructor(private http: HttpClient) { }
  
    submit(grn: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, grn);
    }
  }