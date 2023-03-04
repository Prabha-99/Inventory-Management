import { Component } from '@angular/core';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']

})

export class BillingComponent {
    addRow(): void {
     
 const table = document.getElementById("itemTable") as HTMLTableElement;
 const row = table.insertRow(2);
 const cell1 = row.insertCell(0);
 const cell2 = row.insertCell(1);
 const cell3 = row.insertCell(2);
 const cell4 = row.insertCell(3);
 const cell5 = row.insertCell(4);
 const cell6 = row.insertCell(5);

 var i=1;
 i+=1;
 cell1.innerHTML = ""+i;
 
 cell2.innerHTML = "NEW CELL2";
 cell3.innerHTML = "NEW CELL3";
 cell4.innerHTML = "NEW CELL4";
 cell5.innerHTML = "NEW CELL5";
 cell6.innerHTML = "NEW CELL6";

}
}


