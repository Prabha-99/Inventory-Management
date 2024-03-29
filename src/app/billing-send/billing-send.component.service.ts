import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class BillService2 {

 // pdfList!: any[];

  constructor(private http: HttpClient) { }

  getAllBills() {
    return this.http.get<any[]>('http://localhost:8080/api/billdata/view'); //get bill details
  }

  private apiUrl = 'http://localhost:8080/api/billdata/delete';
  deleteBill(bill_id: number): Observable<void> {
    const url = `${this.apiUrl}/${bill_id}`;
    return this.http.delete<void>(url);
  }

  private apipdfUrl = 'http://localhost:8080/api/bill/delete';
  deleteBillpdf(bill_id: number): Observable<void> {
    const url = `${this.apipdfUrl}/${bill_id}`;
    return this.http.delete<void>(url);
  }



 private baseUrl = 'http://localhost:8080/api/bill';

 getAllPdf(): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/all`);
}

// getPdfFileByPath(filepath: string): Observable<Blob> {
//   return this.http.get(`${this.baseUrl}/file/${filepath}`, { responseType: 'blob' });
// }

private getpdfUrl = 'http://localhost:8080/api/bill/files';


getPdf(filename: string): Observable<any> {
  return this.http.get(`${this.getpdfUrl}/${filename}`, { responseType: 'arraybuffer' });
}

private sendUrl='http://localhost:8080/api/billmail';

sendBillPdfByEmail(bill_id: number) {
  return this.http.post(`${this.sendUrl}/send/${bill_id}`, null, { responseType: 'text' });
}



  }
