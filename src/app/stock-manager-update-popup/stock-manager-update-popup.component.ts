import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-manager-update-popup',
  templateUrl: './stock-manager-update-popup.component.html',
  styleUrls: ['./stock-manager-update-popup.component.css']
})
export class StockManagerUpdatePopupComponent {
  category_id: string="";
  product_name: string="";
  product_brand: string="";
  product_price: number= 0;
  product_quantity: number= 0;

  constructor(private http: HttpClient) { }

  saveProduct() {
    const product = {
      category_id: this.category_id,
      product_name: this.product_name,
      product_brand: this.product_brand,
      product_price: this.product_price,
      product_quantity: this.product_quantity
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
