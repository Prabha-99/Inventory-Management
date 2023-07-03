import { Component } from '@angular/core';
import { StockManagerPurchaseOrderService } from './stock-manager-purchase-order.service';

@Component({
  selector: 'app-stock-manager-purchase-order',
  templateUrl: './stock-manager-purchase-order.component.html',
  styleUrls: ['./stock-manager-purchase-order.component.css']
})
export class StockManagerPurchaseOrderComponent {

  constructor(private productService: StockManagerPurchaseOrderService) {}
  
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
