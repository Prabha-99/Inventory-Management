import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './billing.component.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  template: ``

})


export class BillingComponent implements OnInit{
[x: string]: any;
  

  Billingsend() {
    window.open('/billingsend', '_blank','width=800,height=500');
  }

  Billingview() {
    window.open('billingview', '_blank','width=800,height=500');
  }

  rowCount=1;
  rows = [{id:1, product_name: '', qty: null, product_price:null, discount: null, amount: 0}];

  addRow() {
    this.rowCount++;
    this.rows.push({id:this.rowCount , product_name: '', qty: null ,product_price:null, discount:null, amount: 0 });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }



 
  //cal amounts

  calAmount(row: any, index: number) {
    const product_price =parseInt(row.product_price);
    const qty = parseInt(row.qty);
    const discount = parseInt(row.discount);
    const amount = (qty*product_price) - ( qty * product_price)*(discount/100);
    this.rows[index].amount = amount;
   
   
  }

  calculateTotalAmount() {
    let total = 0;
  for (let i = 0; i < this.rows.length; i++) {
    total += this.rows[i].amount;
  }
  return total;
  }

  



  constructor(private productService: ProductService) { }

 
  productNames: string[] = [];
  ngOnInit() {
    this.productService.getProductNames().subscribe(names => {
      this.productNames = names;
    });
  }


  
 // @ViewChild('pdfContent') pdfContentRef!: ElementRef;

  exportToPDF() {
    const printSection = document.getElementById('print-section')!;

  // Create a new jsPDF instance
  const doc = new jsPDF();

  html2canvas(printSection).then((canvas) => {
    // Add the canvas to the jsPDF document

    const imgData = canvas.toDataURL('image/jpeg', 10); // Decrease the quality of the image
    doc.addImage(imgData, 'JPEG', 10, 10, 180, 240);

    // Save the jsPDF document
    const jsPDFFile = doc.output('blob');

    // Convert the HTML element to a PDF using html2pdf library
    const options = {
      margin: 1,
      filename: 'html2pdf-document.pdf',
      image: { type: 'jpeg', quality: 10 }, // Decrease the quality of the image
      html2canvas: { scale:10 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(printSection).output('blob').then((html2pdfFile) => {

      // Create a new FormData instance and append the PDF files
      const formData = new FormData();
      formData.append('jsPDF-file', jsPDFFile, 'jsPDF-document.pdf');
      formData.append('html2pdf-file', html2pdfFile, 'html2pdf-document.pdf');

      // Send the files to the productService
      this.productService.uploadFile(formData).subscribe(response => {
        console.log(response);
        alert("Successfully Saved!!");
      });
    });
  });
    
  }






//////////////////////save bill details

formData = {
  qu_no: '',
  st_date: '',
  end_date: '',
  cu_name: '',
  cu_address: '',
  cu_tele: '',
  other: '',
  material: '',
  quantity:null,
  unit_price:null,
  discount:null,
  subamount:null,
  total_amount:null,
  note: '',
  vat:null,
};

onSubmit() {
  this.productService.saveBill(this.formData).subscribe({
    next: (data: any) => {
      console.log(data);
      alert('Data saved successfully!');
    },
    error: (error: string) => {
      console.error(error);
      alert('Error occurred: ' + error);
    }
  });
}
}
 

export interface Product {
  id: number;
  name: string;
  price: number;
  brand:string;

}





