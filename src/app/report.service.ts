import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  // private apiUrl = 'http://localhost:8080/api/reports/all';

  // constructor(private http: HttpClient) { }

  // getDocuments(): Promise<any> {
  //   return this.http.get<any>(this.apiUrl).toPromise();
  // }

  // downloadDocument(filename: string): void {
  //   const url = `${this.apiUrl}`;
  //   window.open(url, '_blank');
  // }





  private apiUrl = 'http://localhost:8080/api/reports/all';

  constructor(private http: HttpClient) { }

  getFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  downloadFile(fileId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}`, { responseType: 'blob' });
  }
  
}
