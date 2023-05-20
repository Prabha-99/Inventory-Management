import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


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




private apiEndpoint = 'http://localhost:8080/api/bill/view';

 getImage(): Observable<any> {
   return this.http.get(this.apiEndpoint, { responseType: 'blob' }).pipe(
     map((blob: Blob) => {
       const reader = new FileReader();
       reader.readAsDataURL(blob);
       return reader.result as any;
     })
   );
 }




  }
