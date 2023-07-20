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

  downloadFile(id: number): Observable<Blob> {
    return this.http.get(`${this.downUrl}/${id}/download`, { responseType: 'blob' });
  }

  // downloadFile(filePath: string) {
  //   return this.http.get(filePath, { responseType: 'blob' });
  // }

  getPdf(filename: string): Observable<any> {
    return this.http.get(`${this.downUrl}/${filename}`, { responseType: 'arraybuffer' });
  }
}
