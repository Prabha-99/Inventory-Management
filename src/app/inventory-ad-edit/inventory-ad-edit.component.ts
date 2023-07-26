import { Component, OnInit } from '@angular/core';
import { InventoryAdEditService } from './inventory-ad-edit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-ad-edit',
  templateUrl: './inventory-ad-edit.component.html',
  styleUrls: ['./inventory-ad-edit.component.css']
})
export class InventoryAdEditComponent implements OnInit {
  categories: any[] = [];
  isQuantityEnabled: boolean = false;
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  constructor(
    private route: ActivatedRoute,
    //private router: Router,  
    private inventoryAdEditService: InventoryAdEditService
  ) {}

  ngOnInit(): void {
    this.inventoryAdEditService.getCategory().subscribe(category => {
      this.categories = category;
  });

  const idParam = this.route.snapshot.paramMap.get('product_id');
  if (idParam) {
    const product_id = +idParam;
    this.getProduct(product_id);
  }
  }

  getProduct(product_id: number): void {
    this.inventoryAdEditService.getProduct(product_id).subscribe(product => {
      this.product = product;
    });
  }


  updateProduct(): void {
    if (this.validateForm()) {
      this.inventoryAdEditService.updateProduct(this.product.product_id, this.product).subscribe(
        () => {
          console.log('Product details updated successfully');
        },
        error => {
          // Error
          console.error('Error updating product:', error);
        }
      );
    }
  }

  onCategoryChange() {
    // Check if the selected category is cat_staron (category_id = cat_staron)
    if (this.product.category_id === 'cat_staron') {
      this.isQuantityEnabled = true; // Enable quantity field
    } else {
      this.isQuantityEnabled = false; // Disable quantity field
      this.product.product_quantity = null; // Clear the value in case it was entered previously
    }
  }

  validateForm(): boolean{
    return !!this.product.category_id && !!this.product.product_name && !!this.product.product_brand && !!this.product.product_price
    && !!this.product.product_quantity;
  }
    

}
