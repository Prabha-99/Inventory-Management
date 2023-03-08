import { Component } from '@angular/core';

@Component({
  
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']

})

export class BillingComponent {

 
  rmRow(id: string): void {
    document.getElementById(id)?.remove();
  }
  
  addRow(): void {
    const table = document.getElementById("tobody") as HTMLTableElement;
    // GET TOTAL NUMBER OF ROWS 
    const x = table.rows.length;
    const id = "tbl" + x;
    const row = table.insertRow(x);
    row.id = id;

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);

    cell1.outerHTML = `<th> ${x+1}</th>`;
    cell2.innerHTML = `<select id="select_product" name="product" class="form-control"><option id="Melamaine">Melamaine</option><option id="H.Band">H-Band</option><option id="M1">material 1</option><option id="M2">material 2</option></select>`;
    cell3.innerHTML = ` <input type="text" name="quantity" maxlength="5" size="5" id="qty" class="form-control" required />`;
    cell4.innerHTML = `<p name="unit_price" class="form-control" >.00</p>`;
    cell5.innerHTML = ` <input type="text" name="discont" maxlength="5" size="5" id="discount"  class="form-control" />`;
    cell6.innerHTML = `<p name="amount" class="form-control" >.00</p>`
    
    

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Del";
    deleteButton.className = "btn btn-block btn-default";
    deleteButton.addEventListener("click", () => {
      this.rmRow(id);});
    cell7.appendChild(deleteButton);
  }



   r4mRow(): void{
    const table = document.getElementById("tobody") as HTMLTableElement; // get reference to table element
    const rowCount = table.rows.length; // get number of rows in table
    table.deleteRow(rowCount - 1);

   }
 
 


  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean{
    const charCode = (event.which)?event.which: event.keyCode;

    if(charCode > 31 && (charCode < 48 || charCode > 57 )){
      console.log('charCode restricted is' + charCode )
      return false;
    }


    return true;
  }
  
}



