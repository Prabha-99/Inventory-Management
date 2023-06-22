import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { StockManagerProductService } from './stock-manager-product.service';
import { StockManagerEditComponent } from '../stock-manager-edit/stock-manager-edit.component';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private _dialog: MatDialog, private productService: StockManagerProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product;
      this.filterProducts();
    });

    
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      // Filter products based on category_id
      return product.category_id === 'c2' || product.category_id === 'c3';
    });
  }

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(StockManagerProductPopupComponent);
    }
    
  
  }

  openEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'edit') {
      dialogRef = this._dialog.open(StockManagerEditComponent);
    }
    
  
  }
}
