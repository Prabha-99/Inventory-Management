import { Component } from '@angular/core';
import { PurchaseCoordinatorProductPopupComponent } from '../purchase-coordinator-product-popup/purchase-coordinator-product-popup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-purchase-coordinator-product',
  templateUrl: './purchase-coordinator-product.component.html',
  styleUrls: ['./purchase-coordinator-product.component.css']
})
export class PurchaseCoordinatorProductComponent {
  constructor(private _dialog: MatDialog){}

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(PurchaseCoordinatorProductPopupComponent);
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
