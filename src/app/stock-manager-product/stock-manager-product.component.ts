import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { StockManagerProductService } from '../stock-manager-product.service';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent implements OnInit {

  productStock!: ProductStock[];

  constructor(private _dialog: MatDialog, private stockManagerProductService: StockManagerProductService){}
  ngOnInit(): void {
    this.loadStockProducts();
    throw new Error('Method not implemented.');
  }

  loadStockProducts(){
    this.stockManagerProductService.getStockProducts().subscribe(
      data => {
        this.productStock = data;
    },
    error => {
        // Handle error
    }

    );
  }

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(StockManagerProductPopupComponent);
    }
  }
}

export interface ProductStock {
  product_id : any;
  category_id : any;
  product_brand : any;
  product_name : any;
  product_price : any;
  product_quantity : any;
}
