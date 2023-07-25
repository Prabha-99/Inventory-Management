import { Component, OnInit } from '@angular/core';
import { InventoryAdProductPopupService } from './inventory-ad-product-popup.service';
import { InventoryAdAddproductComponent } from '../inventory-ad-addproduct/inventory-ad-addproduct.component';

@Component({
  selector: 'app-inventory-ad-product-popup',
  templateUrl: './inventory-ad-product-popup.component.html',
  styleUrls: ['./inventory-ad-product-popup.component.css']
})
export class InventoryAdProductPopupComponent implements OnInit{
  categories: any[] = [];
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  disableQuantityField = true;

  constructor(private inventoryAdProductPopupService: InventoryAdProductPopupService) {}

  ngOnInit(): void {
    this.inventoryAdProductPopupService.getCategory().subscribe(category => {
      this.categories = category;
  });
  }

  updateQuantityField() {
    this.disableQuantityField = this.product.category_id !== "cat_staron";
  }

  addProduct() {
    this.inventoryAdProductPopupService.addProduct(this.product).subscribe(
      (response) => {
        console.log('Product added successfully');
        alert("Product Added Successfully!");
        // Reset the form
        this.resetForm();
        location.reload();
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
