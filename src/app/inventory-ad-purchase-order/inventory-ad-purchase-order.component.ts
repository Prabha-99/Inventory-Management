import { Component, OnInit } from '@angular/core';
import { InventoryAdPurchaseOrderService } from './inventory-ad-purchase-order.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inventory-ad-purchase-order',
  templateUrl: './inventory-ad-purchase-order.component.html',
  styleUrls: ['./inventory-ad-purchase-order.component.css']
})
export class InventoryAdPurchaseOrderComponent implements OnInit {

  grns: any[] = [];
  filteredGrns: any[] = [];
  fillGrns: any[] = [];
  searchValue: string = '';
  productNames: string[] = [];
  productBrands: string[] = [];
  selectedProductName: string = '';
  selectedProductBrand: string = '';
  filteredProductNames: string[] = [];
  filteredProductBrands: string[] = [];
  
  constructor(private _dialog: MatDialog, private productService: InventoryAdPurchaseOrderService) {}
  ngOnInit(): void {
    this.productService.getGrn().subscribe(gin => {
      this.grns = gin;
      this.filterGrns();
      this.filteredGrns = this.fillGrns;
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

   filterGrns() {
    this.fillGrns = this.grns.filter(grn => {
      // Filter grn based on category_id
      return grn.category_id === 'cat_staron';
    });
  }

  searchGrns(): void {
    this.filteredGrns = this.fillGrns.filter(grn => {
      const searchDet = `${grn.date}`;
      return searchDet.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }
  
  increaseQuantity(product_name: string, product_brand: string, product_quantity: number): void {
    this.productService.increaseProductQuantity(product_name, product_brand, product_quantity).subscribe(() => {
      alert('Product quantity updated successfully');
    }, error => {
      alert('Error updating product quantity');
      console.error(error);
    });
  }

  onSubmit(formValue: any,productForm: NgForm): void {
    this.increaseQuantity(formValue.product_name, formValue.product_brand, formValue.product_quantity);
    
    productForm.resetForm();
  }

  searchProductNames(): void {
    this.filteredProductNames = this.productNames.filter(name => name.toLowerCase().includes(this.selectedProductName.toLowerCase()));
  }

  searchProductBrands(): void {
    this.filteredProductBrands = this.productBrands.filter(brand => brand.toLowerCase().includes(this.selectedProductBrand.toLowerCase()));
  }

}
