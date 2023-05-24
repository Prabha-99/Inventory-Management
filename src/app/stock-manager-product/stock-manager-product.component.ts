import { Component } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent {

  constructor(private _dialog: MatDialog){}

  openStockEditProductForm(){
    this._dialog.open(StockManagerProductPopupComponent);
  }
}
