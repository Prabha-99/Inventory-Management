import { Component } from '@angular/core';
import { InventoryAdSellOrderService } from './inventory-ad-sell-order.service';

@Component({
  selector: 'app-inventory-ad-sell-order',
  templateUrl: './inventory-ad-sell-order.component.html',
  styleUrls: ['./inventory-ad-sell-order.component.css']
})
export class InventoryAdSellOrderComponent {

  constructor(private productService: InventoryAdSellOrderService) {}
  
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
