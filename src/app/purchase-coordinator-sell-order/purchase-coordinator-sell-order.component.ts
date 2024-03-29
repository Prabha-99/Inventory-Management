import { Component, OnInit } from '@angular/core';
import { PurchaseCoordinatorSellOrderService } from './purchase-coordinator-sell-order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase-coordinator-sell-order',
  templateUrl: './purchase-coordinator-sell-order.component.html',
  styleUrls: ['./purchase-coordinator-sell-order.component.css']
})
export class PurchaseCoordinatorSellOrderComponent implements OnInit{

  gins: any[] = [];
  filteredGins: any[] = [];
  fillGins: any[] = [];
  searchValue: string = '';
  productNames: string[] = [];
  productBrands: string[] = [];
  selectedProductName: string = '';
  selectedProductBrand: string = '';
  filteredProductNames: string[] = [];
  filteredProductBrands: string[] = [];

  constructor(private productService: PurchaseCoordinatorSellOrderService) {}
  
  ngOnInit(): void {
    this.productService.getGin().subscribe(gin => {
      this.gins = gin;
      this.filterGins();
      this.filteredGins = this.fillGins;
    });

    this.productService.getProductNames().subscribe(productNames => {
      this.productNames = productNames;
      this.filteredProductNames = productNames;
    });

    this.productService.getProductBrands().subscribe(productBrands => {
      this.productBrands = productBrands;
      this.filteredProductBrands = productBrands;
    });
  }

  
  filterGins() {
    this.fillGins = this.gins.filter(gin => {
      // Filter gin based on category_id
      return gin.category_id === 'cat_accessories' || gin.category_id === 'cat_appliances';
    });
  }

  searchGins(): void {
    this.filteredGins = this.gins.filter(gin => {
      const searchDet = `${gin.date}`;
      return searchDet.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  searchProductNames(): void {
    this.filteredProductNames = this.productNames.filter(name => name.toLowerCase().includes(this.selectedProductName.toLowerCase()));
  }

  searchProductBrands(): void {
    this.filteredProductBrands = this.productBrands.filter(brand => brand.toLowerCase().includes(this.selectedProductBrand.toLowerCase()));
  }

  reduceQuantity(product_name: string, product_brand: string, product_quantity: number): void {
    this.productService.reduceProductQuantity(product_name, product_brand, product_quantity).subscribe(() => {
      alert('Product quantity updated successfully');
    }, error => {
      alert('Error updating product quantity');
      console.error(error);
    });
  }

  onSubmit(formValue: any,productForm:NgForm): void {
    this.reduceQuantity(formValue.product_name, formValue.product_brand, formValue.product_quantity);
    productForm.resetForm();
  }
}
