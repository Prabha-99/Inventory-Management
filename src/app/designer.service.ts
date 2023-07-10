import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  downloadFile(id: number, fileName: string): void {
    this.http.get('http://localhost:8080/api/designer/download/' + id, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).subscribe((response: ArrayBuffer) => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = fileName;
      downloadLink.click();
    });
}
}