import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { StockManagerProductService } from './stock-manager-product.service';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent implements OnInit {

  products: any[] = [];

  constructor(private _dialog: MatDialog, private productService: StockManagerProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product;
    });

    
  }

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(StockManagerProductPopupComponent);
    }
    
  
  }
}
