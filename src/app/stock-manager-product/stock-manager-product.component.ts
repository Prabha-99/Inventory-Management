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
  fillProducts: any[] = [];
  searchValue: string = '';

  constructor(private _dialog: MatDialog, private productService: StockManagerProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product;
      this.filterProducts();
      this.filteredProducts = this.fillProducts;
    
    });

    
  }

  filterProducts() {
    this.fillProducts = this.products.filter(product => {
      // Filter products based on category_id
      return product.category_id === 'cat_edge' || product.category_id === 'cat_melamine';
    });
  }

  searchProducts(): void {
    this.filteredProducts = this.fillProducts.filter(product => {
      const searchDet = `${product.product_name} ${product.category_id}`;
      return searchDet.toLowerCase().includes(this.searchValue.toLowerCase());
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
