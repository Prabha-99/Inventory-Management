import { Component, OnInit } from '@angular/core';
import { StockManagerProductPopupService } from './stock-manager-product-popup.service';


@Component({
  selector: 'app-stock-manager-product-popup',
  templateUrl: './stock-manager-product-popup.component.html',
  styleUrls: ['./stock-manager-product-popup.component.css']
})
export class StockManagerProductPopupComponent implements OnInit{

  categories: any[] = [];
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };

  constructor(private stockManagerProductPopupService: StockManagerProductPopupService) {}
  
  ngOnInit(): void {
    this.stockManagerProductPopupService.getCategory().subscribe(category => {
      this.categories = category;
  });
  }

  // Inside StockManagerProductPopupComponent class
  filterCategories(category: any): boolean {
    return category.category_id === 'cat_edge' || category.category_id === 'cat_melamine';
  }


  addProduct() {

    if(!this.isRequired()){
      alert("Pleace fill all Fields!!");
      return;
    }
    this.stockManagerProductPopupService.addProduct(this.product).subscribe(
      (response) => {
        console.log('Product added successfully');
        alert("Product Added Successfully!");
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
