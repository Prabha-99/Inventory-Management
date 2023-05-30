import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryAdProductPopupComponent } from '../inventory-ad-product-popup/inventory-ad-product-popup.component';
import { Product } from '../billing/billing.component';



@Component({
  selector: 'app-inventory-ad-addproduct',
  templateUrl: './inventory-ad-addproduct.component.html',
  styleUrls: ['./inventory-ad-addproduct.component.css']
})
export class InventoryAdAddproductComponent{

  //public Products!: Product[];

  constructor(private _dialog: MatDialog){}
 /* ngOnInit(): void {
   this.onGetProducts.then(products => {
      this.Products = products;
      console.log(this.Products);
    }).catch(error => {
      alert(error);
    });
  }*/

 

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(InventoryAdProductPopupComponent);
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
