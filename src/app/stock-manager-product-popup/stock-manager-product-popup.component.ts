import { Component } from '@angular/core';
import { StockManagerProductPopupService } from './stock-manager-product-popup.service';


@Component({
  selector: 'app-stock-manager-product-popup',
  templateUrl: './stock-manager-product-popup.component.html',
  styleUrls: ['./stock-manager-product-popup.component.css']
})
export class StockManagerProductPopupComponent {
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  constructor(private stockManagerProductPopupService: StockManagerProductPopupService) {}

  addProduct() {

    if(!this.isRequired()){
      alert("Pleace fill all Fields!!");
      return;
    }
    this.stockManagerProductPopupService.addProduct(this.product).subscribe(
      (response) => {
        console.log('Product added successfully');
        // Reset the form
        this.resetForm();
      },
      (error) => {
        console.error('Failed to add product:', error);
      }
    );
  }

  resetForm() {
    this.product = {
      category_id: '',
      product_name: '',
      product_brand: '',
      product_quantity: null,
      product_price: null
    };
  }

  isRequired(): boolean{
    return !!this.product.category_id && !!this.product.product_name && !!this.product.product_brand && !!this.product.product_price
    && !!this.product.product_quantity;
  }
}
