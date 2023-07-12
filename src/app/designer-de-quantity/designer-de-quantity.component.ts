import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerProduct } from '../designer-product';
import { DesignerService } from '../designer.service';


@Component({
  selector: 'app-designer-de-quantity',
  templateUrl: './designer-de-quantity.component.html',
  styleUrls: ['./designer-de-quantity.component.css']
})
export class DesignerDeQuantityComponent {
  productService: any;

product: DesignerProduct = {
  product_id: 0,
  product_quantity: 0
};

  constructor(private http: HttpClient, private designerService: DesignerService) { }


  deductProduct(): void {
    this.designerService.deductProduct(this.product)
      .subscribe(
        updatedProduct => {
          console.log('Product deducted successfully:', updatedProduct);
          alert('Product deduct successfully');

          // Clear the input fields
        this.product = {
          product_id: null,
          product_quantity: 0
        };
        },
        error => {
          console.error('Failed to deduct product:', error);
          alert('Error deduct product quantity');

        }
      );
  }
}








