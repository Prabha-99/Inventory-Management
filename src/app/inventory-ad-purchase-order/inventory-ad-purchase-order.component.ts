import { Component } from '@angular/core';
import { InventoryAdPurchaseOrderService } from './inventory-ad-purchase-order.service';

@Component({
  selector: 'app-inventory-ad-purchase-order',
  templateUrl: './inventory-ad-purchase-order.component.html',
  styleUrls: ['./inventory-ad-purchase-order.component.css']
})
export class InventoryAdPurchaseOrderComponent {
  
  constructor(private productService: InventoryAdPurchaseOrderService) {}
  
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
