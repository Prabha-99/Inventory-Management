import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})

export class BillService {

  pdfList!: any[];

  constructor(private http: HttpClient) { }

  getAllBills() {
    return this.http.get<any[]>('http://localhost:8080/api/billdata/view'); //get bill details
  }

  private apiUrl = 'http://localhost:8080/api/billdata/delete';
  deleteBill(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }


  // private pdfUrl = 'http://localhost:8080/api/pdf'; // Replace with your API URL

  // getAllPDFs(): Observable<any[]> {
  //   return this.http.get<any[]>(this.pdfUrl, { responseType: 'blob' })
  //     .pipe(
  //       map(this.extractPDFList)
  //     );
  // }

  }
