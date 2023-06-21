import { Component } from '@angular/core';
import { PurchaseCoordinatorProductPopupService } from './purchase-coordinator-product-popup.service';



@Component({
  selector: 'app-purchase-coordinator-product-popup',
  templateUrl: './purchase-coordinator-product-popup.component.html',
  styleUrls: ['./purchase-coordinator-product-popup.component.css']
})
export class PurchaseCoordinatorProductPopupComponent {
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  constructor(private purchaseCoordinatorProductPopupService: PurchaseCoordinatorProductPopupService) {}

  addProduct() {
    this.purchaseCoordinatorProductPopupService.addProduct(this.product).subscribe(
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
}
