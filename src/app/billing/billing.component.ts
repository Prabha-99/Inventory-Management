import { Component,  } from '@angular/core';
import { Router } from '@angular/router';




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
  rows = [{id:1, name: '', qty: null, up:null, discount: null, amount: 0}];

  addRow() {
    this.rowCount++;
    this.rows.push({id:this.rowCount , name: '', qty: null ,up:null, discount:null, amount: 0 });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }


  //cal amounts

  calAmount(row: any, index: number) {
    const qty = parseInt(row.qty);
    const discount = parseInt(row.discount);
    const amount = qty -( qty * (discount/100));
    this.rows[index].amount = amount;
  }

  calculateTotalAmount() {
    let total = 0;
    this.rows.forEach((row, index) => {
      this.calAmount(row, index);
      total += row.amount;
    });
    return total;
 

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
 



  }
  
}



