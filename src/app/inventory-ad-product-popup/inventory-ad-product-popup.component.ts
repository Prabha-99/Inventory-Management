import { Component } from '@angular/core';
import { InventoryAdProductPopupService } from './inventory-ad-product-popup.service';

@Component({
  selector: 'app-inventory-ad-product-popup',
  templateUrl: './inventory-ad-product-popup.component.html',
  styleUrls: ['./inventory-ad-product-popup.component.css']
})
export class InventoryAdProductPopupComponent {
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  disableQuantityField = true;

  constructor(private inventoryAdProductPopupService: InventoryAdProductPopupService) {}

  updateQuantityField() {
    this.disableQuantityField = this.product.category_id !== "c1";
  }

  addProduct() {
    this.inventoryAdProductPopupService.addProduct(this.product).subscribe(
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

    this.disableQuantityField = true;
  }
}
