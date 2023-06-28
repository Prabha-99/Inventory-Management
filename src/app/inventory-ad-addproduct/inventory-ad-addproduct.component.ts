import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryAdAddproductService } from './inventory-ad-addproduct.service';
import { InventoryAdProductPopupComponent } from '../inventory-ad-product-popup/inventory-ad-product-popup.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { InventoryAdEditComponent } from '../inventory-ad-edit/inventory-ad-edit.component';



@Component({
  selector: 'app-inventory-ad-addproduct',
  templateUrl: './inventory-ad-addproduct.component.html',
  styleUrls: ['./inventory-ad-addproduct.component.css']
})
export class InventoryAdAddproductComponent implements OnInit{

  products: any[] = [];
  
  constructor(private _dialog: MatDialog,  private productService: InventoryAdAddproductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products = product;
  });
  }

  deleteProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'delete') {
      dialogRef = this._dialog.open(DeleteProductComponent);
    }
    
  
  }

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(InventoryAdProductPopupComponent);
    }
  
  }

  openEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'edit') {
      dialogRef = this._dialog.open(InventoryAdEditComponent);
    }
    
  
  }

  onDelete(product_id: number) {
    if (confirm("Are you sure you want to delete this Product?")) {

      this.productService.deleteProduct(product_id).subscribe(() => {
        this.products = this.products.filter(product => product.product_id !== product_id);
       
      }, () => {
        alert("Product Deleted Successfully!"); // Display error message
        location.reload();
      });
    }
    
  }



}
