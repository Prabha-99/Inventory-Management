import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../billing/billing.component';
import { ProductService } from '../billing/billing.component.service';
import { StockManagerProductService } from './stock-manager-product.service';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private _dialog: MatDialog, private stockManagerProductService: StockManagerProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.stockManagerProductService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: any) => {
        console.error('Error retrieving products:', error);
      }
    );
  }

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(StockManagerProductPopupComponent);
    }
   /* if (operation === 'edit') {
      dialogRef = this.dialog.open(EditAuthorModalComponent, {
        data: author // passing author data to the dialog component
      });
    }*/
   /* dialogRef.afterClosed().subscribe(() => {
      this.onGetProducts();
    });*/
  }
}
