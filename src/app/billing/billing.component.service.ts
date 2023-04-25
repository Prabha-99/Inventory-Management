import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
 
 

  getProductNames() {
    return this.http.get<string[]>('http://localhost:8080/api/bill/getnames');
  }
  constructor(private http: HttpClient) { }

  generatePdf(data: any) {
    const doc = new jsPDF('p', 'mm', 'a4');
    html2canvas(data).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 0, 0, 210, 297);
      const pdfData = doc.output('blob');
      const formData = new FormData();
      formData.append('pdfData', pdfData, 'file.pdf');
      this.http.post('http://localhost:8080/api/bill/save', formData).subscribe(
        () => {
          alert('PDF saved to database');
        },
        error => {
          console.error(error);
          alert('Error saving PDF to database');
        }
      );
    });
  }

  
}
