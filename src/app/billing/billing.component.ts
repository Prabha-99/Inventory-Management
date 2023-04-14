import { HttpClient } from '@angular/common/http';
import { Component, Input,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  template: ``

})


export class BillingComponent {
  


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
    let total!: number;
    this.rows.forEach((row, index) => {
      this.calAmount(row, index);
       total += row.amount;
      
    });
   return total;
  }


/*
  rows: Rows[] = [];
  rowCount =0;
  addRow() {
    this.rowCount++;
    const id = this.rowCount;
    
    this.rows.push({ id,name:'', qty:null , up:null ,discount:null ,amount:null});
  }

  removeRow(row: Rows) {
    this.rows = this.rows.filter(r => r !== row);
  }

    
  }
  */

    private baseUrl = 'http://localhost:8080/api/material';

    constructor(private http: HttpClient) { }
  
    getProductPrice(product_name: string): Observable<number> {
      const url = `${this.baseUrl}/price?name=${product_name}`;
      return this.http.get<number>(url);
    }

  }


  




