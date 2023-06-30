import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-manager-purchase-order',
  templateUrl: './stock-manager-purchase-order.component.html',
  styleUrls: ['./stock-manager-purchase-order.component.css']
})
export class StockManagerPurchaseOrderComponent {

  product: any = {

    product_name: '',
    product_brand: '',
    product_quantity: null
  };

  increaseQuantity() {

    if(!this.isRequired()){
      alert("Pleace fill all Fields!!");
      return;
    }

  }

  isRequired(): boolean{
    return !!this.product.product_name && !!this.product.product_brand && !!this.product.quantity;
  }

}
