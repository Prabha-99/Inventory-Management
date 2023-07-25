import { Component, OnInit } from '@angular/core';
import { PurchaseCoordinatorProductPopupService } from './purchase-coordinator-product-popup.service';


@Component({
  selector: 'app-purchase-coordinator-product-popup',
  templateUrl: './purchase-coordinator-product-popup.component.html',
  styleUrls: ['./purchase-coordinator-product-popup.component.css']
})
export class PurchaseCoordinatorProductPopupComponent implements OnInit{

  categories: any[] = [];
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  constructor(private  purchaseCoordinatorProductPopupService: PurchaseCoordinatorProductPopupService) {}

  ngOnInit(): void {
    this.purchaseCoordinatorProductPopupService.getCategory().subscribe(category => {
      this.categories = category;
  });
  }

  filterCategories(category: any): boolean {
    return category.category_id === 'cat_accessories' || category.category_id === 'cat_appliances';
  }

  addProduct() {

    if(!this.isRequired()){
      alert("Pleace fill all Fields!!");
      return;
    }
    this.purchaseCoordinatorProductPopupService.addProduct(this.product).subscribe(
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
  }

  isRequired(): boolean{
    return !!this.product.category_id && !!this.product.product_name && !!this.product.product_brand && !!this.product.product_price
    && !!this.product.product_quantity;
  }
}
