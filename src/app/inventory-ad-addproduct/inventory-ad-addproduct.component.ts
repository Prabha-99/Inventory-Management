import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryAdProductPopupComponent } from '../inventory-ad-product-popup/inventory-ad-product-popup.component';



@Component({
  selector: 'app-inventory-ad-addproduct',
  templateUrl: './inventory-ad-addproduct.component.html',
  styleUrls: ['./inventory-ad-addproduct.component.css']
})
export class InventoryAdAddproductComponent {
  constructor(private _dialog: MatDialog){}

  openAddEditProductForm(){
    this._dialog.open(InventoryAdProductPopupComponent);
  }
}
