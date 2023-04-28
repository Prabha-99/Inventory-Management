import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './billing.component.service';


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

///////////////////////////////////////////////////////
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





