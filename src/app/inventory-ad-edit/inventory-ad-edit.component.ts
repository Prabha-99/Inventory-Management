import { Component, OnInit } from '@angular/core';
import { InventoryAdEditService } from './inventory-ad-edit.service';

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

  constructor(private inventoryAdEditService: InventoryAdEditService) {}
  ngOnInit(): void {
    this.inventoryAdEditService.getCategory().subscribe(category => {
      this.categories = category;
  });
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

}
