import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = 'http://localhost:8080/api/reports/getAllPSReport';

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  downloadFile(report_id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${report_id}/download`, { responseType: 'blob' });
  }
}
