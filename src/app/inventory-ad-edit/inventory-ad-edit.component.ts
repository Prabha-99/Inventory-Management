import { Component, OnInit } from '@angular/core';
import { InventoryAdEditService } from './inventory-ad-edit.service';

@Component({
  selector: 'app-inventory-ad-edit',
  templateUrl: './inventory-ad-edit.component.html',
  styleUrls: ['./inventory-ad-edit.component.css']
})
export class InventoryAdEditComponent implements OnInit{

  product: Product = new Product();

  constructor(private inventoryAdEditService : InventoryAdEditService) {}
  ngOnInit(): void {}

  openEditProductForm(product: Product) {
    // Assign the selected product to the component's product property
    this.product = Object.assign({}, product);
  }

  updateProduct() {
    // Call the service method to update the product
    this.inventoryAdEditService.updateProduct(this.product.product_id, this.product)
      .subscribe(
        updatedProduct => {
          // Handle the response or perform any additional actions
          console.log('Product updated successfully:', updatedProduct);
        },
        error => {
          // Handle error responses
          console.error('Error updating product:', error);
        }
      );
  }

}

export class Product {
  product_id: any;
  category_id: any;
  product_brand: any;
  product_name: any;
  product_price: any;
  product_quantity: any;
}
