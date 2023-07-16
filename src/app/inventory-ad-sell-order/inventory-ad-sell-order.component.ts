import { Component, OnInit } from '@angular/core';
import { InventoryAdSellOrderService } from './inventory-ad-sell-order.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-ad-sell-order',
  templateUrl: './inventory-ad-sell-order.component.html',
  styleUrls: ['./inventory-ad-sell-order.component.css']
})
export class InventoryAdSellOrderComponent implements OnInit{

  gins: any[] = [];
  filteredGins: any[] = [];
  fillGins: any[] = [];
  searchValue: string = '';


  constructor(private _dialog: MatDialog, private productService: InventoryAdSellOrderService) {}

  ngOnInit(): void {
    this.productService.getGin().subscribe(gin => {
      this.gins = gin;
      this.filterGins();
      this.filteredGins = this.fillGins;
    });
  }

  filterGins() {
    this.fillGins = this.gins.filter(gin => {
      // Filter gin based on category_id
      return gin.category_id === 'edge band';
    });
  }

  searchGins(): void {
    this.filteredGins = this.fillGins.filter(gin => {
      const searchDet = `${gin.date}`;
      return searchDet.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }
  
  reduceQuantity(product_name: string, product_brand: string, product_quantity: number): void {
    this.productService.reduceProductQuantity(product_name, product_brand, product_quantity).subscribe(() => {
      alert('Product quantity updated successfully');
    }, error => {
      alert('Error updating product quantity');
      console.error(error);
    });
  }

  onSubmit(formValue: any): void {
    this.reduceQuantity(formValue.product_name, formValue.product_brand, formValue.product_quantity);
  }
}
