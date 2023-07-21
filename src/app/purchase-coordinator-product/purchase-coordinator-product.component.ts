import { Component ,OnInit} from '@angular/core';
import { PurchaseCoordinatorProductPopupComponent } from '../purchase-coordinator-product-popup/purchase-coordinator-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseCoordinatorProductService } from './purchase-coordinator-product.service';
import { PurchaseCoordinatorEditComponent } from '../purchase-coordinator-edit/purchase-coordinator-edit.component';


@Component({
  selector: 'app-purchase-coordinator-product',
  templateUrl: './purchase-coordinator-product.component.html',
  styleUrls: ['./purchase-coordinator-product.component.css']
})
export class PurchaseCoordinatorProductComponent implements OnInit{

  products: any[] = [];
  filteredProducts: any[] = [];
  fillProducts: any[] = [];
  searchValue: string = '';


  constructor(private _dialog: MatDialog, private productService: PurchaseCoordinatorProductService){}

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
      return product.category_id === 'cat_accessories' || product.category_id === 'cat_appliances';
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
      dialogRef = this._dialog.open(PurchaseCoordinatorProductPopupComponent);
    }
    
  
  }

  openEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'edit') {
      dialogRef = this._dialog.open(PurchaseCoordinatorEditComponent);
    }
    
  
  }
}