import { Component } from '@angular/core';
import { InventoryAdSellingService } from './inventory-ad-selling.service';

@Component({
  selector: 'app-inventory-ad-selling',
  templateUrl: './inventory-ad-selling.component.html',
  styleUrls: ['./inventory-ad-selling.component.css']
})
export class InventoryAdSellingComponent {

  formData = {
    category_id: '',
    product_name: '',
    product_quantity: 0
  };

  constructor(private productService: InventoryAdSellingService) {}

  submitForm() {
    this.productService.reduceProductQuantity(this.formData)
      .subscribe(
        response => {
          // Handle successful response
          console.log('Product quantity reduced successfully');
          // Reset the form
          this.formData = {
            category_id: '',
            product_name: '',
            product_quantity: 0
          };
        },
        error => {
          // Handle error response
          console.error('Error reducing product quantity:', error);
        }
      );
  }
}
