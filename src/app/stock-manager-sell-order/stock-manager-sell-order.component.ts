import { Component } from '@angular/core';
import { StockManagerSellOrderService } from './stock-manager-sell-order.service';

@Component({
  selector: 'app-stock-manager-sell-order',
  templateUrl: './stock-manager-sell-order.component.html',
  styleUrls: ['./stock-manager-sell-order.component.css']
})
export class StockManagerSellOrderComponent {

  
  constructor(private productService: StockManagerSellOrderService) {}
  
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
