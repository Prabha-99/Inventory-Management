import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-stock-manager-product-popup',
  templateUrl: './stock-manager-product-popup.component.html',
  styleUrls: ['./stock-manager-product-popup.component.css']
})
export class StockManagerProductPopupComponent {

  selectedCategory: string="";
  productName: string="";
  productBrand: string="";
  productPrice: number= 0;
  productQuantity: number= 0;

  constructor(private http: HttpClient) { }

  saveProduct() {
    const product = {
      category: this.selectedCategory,
      productName: this.productName,
      productBrand: this.productBrand,
      productPrice: this.productPrice,
      productQuantity: this.productQuantity
    };

    this.http.post<any>('/api/product/saveProduct', product).subscribe(
      (response) => {
        console.log('Product saved successfully:', response);
        // Handle success scenario
      },
      (error) => {
        console.error('Error occurred while saving product:', error);
        // Handle error scenario
      }
    );
  }

  

}
