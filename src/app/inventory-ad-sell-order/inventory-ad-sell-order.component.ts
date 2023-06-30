import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-ad-sell-order',
  templateUrl: './inventory-ad-sell-order.component.html',
  styleUrls: ['./inventory-ad-sell-order.component.css']
})
export class InventoryAdSellOrderComponent {
  
  product: any = {

    product_name: '',
    product_brand: '',
    product_quantity: null
  };

  reduceQuantity() {

    if(!this.isRequired()){
      alert("Pleace fill all Fields!!");
      return;
    }

  }

  isRequired(): boolean{
    return !!this.product.product_name && !!this.product.product_brand && !!this.product.quantity;
  }
}
