import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-manager-sell-order',
  templateUrl: './stock-manager-sell-order.component.html',
  styleUrls: ['./stock-manager-sell-order.component.css']
})
export class StockManagerSellOrderComponent {

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
