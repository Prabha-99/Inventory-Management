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
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

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

          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000); // Adjust the time (in milliseconds)

          // Clear the input fields
        this.product = {
          product_id: null,
          product_quantity: null
        };
        },
        error => {
          console.error('Failed to deduct product:', error);

          this.showErrorMessage = true;

          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        }
      );
  }
}








