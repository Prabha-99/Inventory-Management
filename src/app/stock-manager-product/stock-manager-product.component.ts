import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { StockManagerProductComponentService } from './stock-manager-product.component.service';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent implements OnInit {
  stockManagerProductComponentService: any;

  constructor(private _dialog: MatDialog){}

  products: any[] = [];

  openStockEditProductForm(){
    this._dialog.open(StockManagerProductPopupComponent);
  }

  ngOnInit(){
    this.stockManagerProductComponentService.getAllProducts().subscribe(product => {
      this.products = product;
    });
  }

  
}
