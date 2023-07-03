import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenerateGINService {
    private apiUrl = 'http://localhost:8080/api/GIN/submit';
  
    constructor(private http: HttpClient) { }
  
    submit(gin: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, gin);
    }
  }