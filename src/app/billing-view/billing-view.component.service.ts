import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class BillService {

 // pdfList!: any[];

  constructor(private http: HttpClient) { }

  getAllBills() {
    return this.http.get<any[]>('http://localhost:8080/api/billdata/view'); //get bill details
  }

  private apiUrl = 'http://localhost:8080/api/billdata/delete';
  deleteBill(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }



 private baseUrl = 'http://localhost:8080/api/bill';

 getAllPdf(): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/all`);
}

getPdfFileById(bill_id: number): Observable<any> {
  return this.http.get(`files/${bill_id}`, { responseType: 'blob' });
}

// private apiDUrl = 'http://localhost:8080/api/delete/';
// deletePdf(bill_id: number): Observable<void> {
//   const url = `${this.apiDUrl}/${bill_id}`;
//   return this.http.delete<void>(url);
// }



  }
