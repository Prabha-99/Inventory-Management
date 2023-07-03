import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockKeeperGINService {

  private baseUrl = 'http://localhost:8080/api/reports/getAllGINReport';

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  confirmFile(report_id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${report_id}/confirm`, { responseType: 'blob' });

  }
  rejectFile(report_id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${report_id}/reject`, { responseType: 'blob' });
  }
}
