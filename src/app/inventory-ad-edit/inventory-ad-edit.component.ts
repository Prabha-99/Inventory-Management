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
    product_id: '',
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
    if (this.product.category_id === 'cat_staron') {
      this.isQuantityEnabled = true;
    } else {
      this.isQuantityEnabled = false;
      this.product.product_quantity = null;
    }
  }

  onSubmit() {
    this.inventoryAdEditService.updateProduct(this.product).subscribe(response => {
      alert('Product is successfully updated..');
      this.resetForm();
    }, error => {
      console.error(error);
      alert('An error occurred while updating the product.');
    });
  }

  resetForm() {
    this.product = {
      product_id: '',
      category_id: '',
      product_name: '',
      product_brand: '',
      product_quantity: null,
      product_price: null
    };
  }

}
