import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  [x: string]: any;
 
 

  getProductNames() {
    return this.http.get<string[]>('http://localhost:8080/api/bill/getnames');
  }
  constructor(private http: HttpClient) { }



  saveBill(formData: any): Observable<any> {
    const url = 'http://localhost:8080/api/bill/save';
    return this.http.post(url, formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
  

}
