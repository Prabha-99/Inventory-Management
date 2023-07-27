import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GINService {

  private baseUrl = 'http://localhost:8080/api/reports/getAllGINReport';
  private downUrl = 'http://localhost:8080/api/reports/download';

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
