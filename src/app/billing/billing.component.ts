import { Component,  } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from './billing.component.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

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
  constructor(private productService: ProductService , dialog: MatDialog) { }

  Billingsend() {
    window.open('/billingsend', '_self',);
  }

  Billingview() {
    window.open('/billingview', '_self');
  }

  rowCount=1;
  rows = [{id:1, name: '', qty: null, product_price:null, discount: null, amount: 0}];

  addRow() {
    this.rowCount++;
    this.rows.push({id:this.rowCount , name: '', qty: null ,product_price:null, discount:null, amount: 0 });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }



  //cal Total amounts
  calAmount(row: any, index: number) {
    const product_price =parseFloat(row.product_price);
    const qty = parseFloat(row.qty);
    const discount = parseFloat(row.discount);
    const amount = (qty*product_price) - ( qty * product_price)*(discount/100);
    this.rows[index].amount = amount;

  }



   calcTotalDiscount(rows: any[]): number {
    let totalDiscount = 0;
    for (let i = 0; i < rows.length; i++) {
      const product_price = parseFloat(rows[i].product_price);
      const qty = parseFloat(rows[i].qty);
      const discount = parseFloat(rows[i].discount);
      const discountAmount = (qty * product_price) * (discount / 100);
      
      totalDiscount += discountAmount;

    }
    return totalDiscount;
  }


  calSubTotal(rows: any[]): number {
    let subtotal = 0;
    for (let i = 0; i < rows.length; i++) {
      const product_price = parseFloat(rows[i].product_price);
      const qty = parseFloat(rows[i].qty);
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

  //uuid generator
  generateUuid(): string {
    const uuid = uuidv4().substr(0, 6);
    return uuid;
  }
  

  product_name: string[]=[];
  product_price: any;

  ngOnInit() {
    this.productService.getproduct_name().subscribe(pnames => {
      this.product_name = pnames;
    });

    this.productService.getproduct_price().subscribe(price => {
      this.product_price = price;
    });


  }

  // onProductNameSelect() {
  //   this.productService.getProductPrice(this.name).subscribe(price => {
  //     this.productPrice = price;
  //   });
  // }


    

  exportToPDF() {
    const printSection = document.getElementById('print-section')!;

  // Create a new jsPDF instance
  const doc = new jsPDF();

  html2canvas(printSection).then((canvas) => {

    // Add the canvas to the jsPDF document
    const imgData = canvas.toDataURL('image/jpeg', 0.5); // Decrease the quality of the image
    doc.addImage(imgData, 'JPEG', 10, 10, 180, 240);


    // Convert the HTML element to a PDF using html2pdf library
    const options = {
      margin: 0.5,
      filename: 'html2pdf-document.pdf',
      image: { type: 'jpeg', quality: 0.5 }, // Decrease the quality of the image
      html2canvas: { scale:7},
      jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
    };


    html2pdf().set(options).from(printSection).output('blob').then((html2pdfFile) => {

      // Create a new FormData instance and append the PDF files
      const fData = new FormData();
   //   fData.append('jsPDF-file', jsPDFFile, 'jsPDF-document.pdf');
      fData.append('html2pdf-file', html2pdfFile, 'html2pdf-document.pdf');

      // Send the files to the productService
      this.productService.uploadFile(fData).subscribe(response => {
        console.log(response);
        alert("PDF Successfully Saved!!");
      });
    });
  }); 
  }

 



//////////////////////save bill details

formData = {
  qu_no:'QN-'+this.generateUuid(),
  st_date: '',
  end_date: '',
  cu_name: '',
  cu_address: '',
  cu_tele: '',
  other: '',
  total_amount:0,
  discount:0,
  subtotal:0,
  note:'',
};




updateFormData(field: string, value: any) {
  this.formData[field] = value;
  if (field === 'total_amount') {
    this.calculateTotalAmount();
  }
  if(field === "subtotal"){
      this.calSubTotal;
  }
  if(field === "discount"){
    this.calcTotalDiscount;
}
}

updateTotalAmount() {
  this.formData.total_amount = this.calculateTotalAmount();
  
  const sub = this.calSubTotal(this.rows);
  this.formData.subtotal= sub;

  const dis = this.calcTotalDiscount(this.rows);
  this.formData.discount=dis;
}


// updateFormData(field: string, value: number) {
//   const tempValue = value;
//   this.formData = {
//     ...this.formData,
//     [field]: tempValue
//   };
// }

//error handling
emailerror='';
tele_error='';
tele_error_fix='';
emailerror_fix='';


//submit form
onSubmit() {
  if (!this.isValidFormData())  {
    alert('Please Enter Required Fields!!');
    return;
  }
  
  //mobile validate
  if (!this.isValidPhoneNumber(this.formData.cu_tele)) {
    this.tele_error='Invalid Telephone Number!';
    this.tele_error_fix='';
    return;
  }else{
    this.tele_error='';
    this.tele_error_fix='OK!';
  }
  this.tele_error_fix='';


  //email validate
  if (this.formData.other) {
    if (!this.isValidEmail(this.formData.other)) {
      this.emailerror='Invalid Email Address!';
      this.emailerror_fix='';
      return;
    } else {
      this.emailerror='';
      this.emailerror_fix='OK!';
    }
  } 
    this.emailerror='';
    this.emailerror_fix='';
  
this.updateTotalAmount();
// save bill data to database
  this.productService.saveBill(this.formData).subscribe({
    next: (data: any) => {
      console.log(data);
      this.exportToPDF();
      alert('Data saved successfully!');
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

//requred validation
isValidFormData(): boolean {
  return !!this.formData.qu_no && !!this.formData.st_date && !!this.formData.end_date && !!this.formData.cu_name && !!this.formData.cu_address
  && !!this.formData.cu_tele;
}

//email validation
isValidEmail(other: string): boolean {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return emailRegex.test(other);
}

//phone number validation
 isValidPhoneNumber(cu_tele) {
  const regexPattern = /^0\d{9}$/;
  return regexPattern.test(cu_tele);
}


confirmRefresh(): void {
  if (confirm('Are you sure you want to clear?')) {
    location.reload();
  }
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



