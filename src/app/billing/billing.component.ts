import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']

})

export class BillingComponent {

  calno():void{
    const table = document.getElementById("tobody") as HTMLTableElement; 
    for (var i = 1; i < table.rows.length; i++) { // iterate over rows
      const rown = table.rows[i];
      rown.cells[0].textContent = (i+1).toString(); 
    }
      }


  addRow(): void {
    const row = document.createElement('tr'); 

    const col = document.createElement('td'); 
    const col2 = document.createElement('td'); 
    const col3 = document.createElement('td'); 
    const col4 = document.createElement('td'); 
    const col5 = document.createElement('td'); 
    const col6 = document.createElement('td');
     
    row.appendChild(col);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5); 
    row.appendChild(col6); 
   
     
    col.innerHTML=''+this.calno();
    col2.innerHTML = '<select id="Select the product"><option id="Melamaine">Melamaine</option><option id="H.Band">H-Band</option><option id="M1">material 1</option><option id="M2">material 2</option></select>' ; 
    col3.innerHTML = '<input type="text"maxlength="4"size="4"id="qty">'; 
    col4.innerHTML="$$";
    col5.innerHTML = '<input type="text"maxlength="4"size="4"id="qty">'; 
    col6.innerHTML = "$$"; 

   const table = document.getElementById("tobody");
    table!.appendChild(row); 



  }


}


