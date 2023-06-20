import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupComponent } from '../stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-manager-product',
  templateUrl: './stock-manager-product.component.html',
  styleUrls: ['./stock-manager-product.component.css']
})
export class StockManagerProductComponent implements OnInit {

  ProductArray : any[] = [];
  
  constructor(private _dialog: MatDialog, private http: HttpClient){
    this.getAllProducts();
  }

  ngOnInit(): void {
    this.getAllProducts();  
  }

  getAllProducts(){
    this.http.get("http://localhost:8080/api/product/getAllProduct").subscribe((resultData: any)=>
    {

      console.log(resultData);
      this.ProductArray = resultData;
    });
  }

  openAddEditProductForm(author: any, operation: String) {
    var dialogRef = null as any;
    if (operation === 'add') {
      dialogRef = this._dialog.open(StockManagerProductPopupComponent);
    }
  }
}
