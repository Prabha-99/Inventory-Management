import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-stock-manager-product-popup',
  templateUrl: './stock-manager-product-popup.component.html',
  styleUrls: ['./stock-manager-product-popup.component.css']
})
export class StockManagerProductPopupComponent {

  category_id: string="";
  product_name: string="";
  product_brand: string="";
  product_price: number= 0;
  product_quantity: number= 0;

  constructor(private http: HttpClient) { }

  saveProduct() {
    const product = {
      category: this.category_id,
      productName: this.product_name,
      productBrand: this.product_brand,
      productPrice: this.product_price,
      productQuantity: this.product_quantity
    };

    this.http.post<any>('http://localhost:8080/api/product/saveProduct', product).subscribe(
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
