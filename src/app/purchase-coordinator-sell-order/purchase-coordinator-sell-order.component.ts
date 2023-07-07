import { Component } from '@angular/core';
import { PurchaseCoordinatorSellOrderService } from './purchase-coordinator-sell-order.service';

@Component({
  selector: 'app-purchase-coordinator-sell-order',
  templateUrl: './purchase-coordinator-sell-order.component.html',
  styleUrls: ['./purchase-coordinator-sell-order.component.css']
})
export class PurchaseCoordinatorSellOrderComponent {
  constructor(private productService: PurchaseCoordinatorSellOrderService) {}
  
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
