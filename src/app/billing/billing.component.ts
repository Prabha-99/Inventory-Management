import { Component,  } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from './billing.component.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  
  template: `<div id="overlay">
  <div id="alert-box">
    <h2>Refresh</h2>
    <p>Are you sure you want to refresh?</p>
    <button onclick="location.reload()">OK</button>
    <button onclick="closeAlert()">Cancel</button>
  </div>
</div>`

})



export class BillingComponent implements OnInit{
  constructor(private productService: ProductService) { }

  Billingsend() {
    window.open('/billingsend', '_blank','width=800,height=500');
  }

  Billingview() {
    window.open('/billingview', '_blank');
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



  //cal Total amounts
  calAmount(row: any, index: number) {
    const product_price =parseInt(row.product_price);
    const qty = parseInt(row.qty);
    const discount = parseInt(row.discount);
    const amount = (qty*product_price) - ( qty * product_price)*(discount/100);
    this.rows[index].amount = amount;

  }



   calcTotalDiscount(rows: any[]): number {
    let totalDiscount = 0;
    for (let i = 0; i < rows.length; i++) {
      const product_price = parseInt(rows[i].product_price);
      const qty = parseInt(rows[i].qty);
      const discount = parseInt(rows[i].discount);
      const discountAmount = (qty * product_price) * (discount / 100);
      
      totalDiscount += discountAmount;

    }
    return totalDiscount;
  }


  calSubTotal(rows: any[]): number {
    let subtotal = 0;
    for (let i = 0; i < rows.length; i++) {
      const product_price = parseInt(rows[i].product_price);
      const qty = parseInt(rows[i].qty);
      const subtotalamount = (qty * product_price);
      
      subtotal += subtotalamount;
    }
    return subtotal;
  }



  calculateTotalAmount() {
    let total = 0;
  for (let i = 0; i < this.rows.length; i++) {
    total += this.rows[i].amount;
  }
  return total;
  }


  

  productNames: string[] = [];

  ngOnInit() {
    this.productService.getProductNames().subscribe(names => {
      this.productNames = names;
    });
  }
    



  exportToPDF() {
    const printSection = document.getElementById('print-section')!;

  // Create a new jsPDF instance
  const doc = new jsPDF();

  html2canvas(printSection).then((canvas) => {

    // Add the canvas to the jsPDF document
    const imgData = canvas.toDataURL('image/jpeg', 0.5); // Decrease the quality of the image
    doc.addImage(imgData, 'JPEG', 10, 10, 180, 240);

    // Save the jsPDF document
   // const jsPDFFile = doc.output('blob');

    // Convert the HTML element to a PDF using html2pdf library
    const options = {
      margin: 0.2,
      filename: 'html2pdf-document.pdf',
      image: { type: 'jpeg', quality: 0.5 }, // Decrease the quality of the image
      html2canvas: { scale:9},
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };


    html2pdf().set(options).from(printSection).output('blob').then((html2pdfFile) => {

      // Create a new FormData instance and append the PDF files
      const fData = new FormData();
   //   fData.append('jsPDF-file', jsPDFFile, 'jsPDF-document.pdf');
      fData.append('html2pdf-file', html2pdfFile, 'html2pdf-document.pdf');

      // Send the files to the productService
      this.productService.uploadFile(fData).subscribe(response => {
        console.log(response);
        alert("PDF File Successfully Saved!!");
      });
    });
  }); 
  }

 

  confirmRefresh(): void {
    if (confirm('Are you sure you want to clear?')) {
      location.reload();
    }
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
  total_amount:null,
  discount:null,
  subtotal:null,
  note:'',

};


onSubmit() {
  if (!this.isValidFormData()) {
    alert('Please fill  required fields.');
    return;
  }

  this.productService.saveBill(this.formData).subscribe({
    next: (data: any) => {
      console.log(data);

      this.exportToPDF();
      alert('Bill saved successfully!');
    },
    error: (error: any) => {
      console.error(error);

      let errorMessage = 'An error occurred while saving the data.';
      if (error.status === 400) {
        errorMessage = error.error.message;
      } else if (error.status === 500) {
        errorMessage = 'An internal server error occurred.';
      }

      alert(errorMessage);
    }
  });
}


isValidFormData(): boolean {
  return !!this.formData.qu_no && !!this.formData.st_date && !!this.formData.end_date && !!this.formData.cu_name;
}


}

export interface Product {
  id: number;
  name: string;
  price: number;
  brand:string;
  total_amount:number;
  discount:number;
  subtotal:number;
}



