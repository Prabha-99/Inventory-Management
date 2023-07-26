import { Component, OnInit } from '@angular/core';
import { InventoryAdEditService } from './inventory-ad-edit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-ad-edit',
  templateUrl: './inventory-ad-edit.component.html',
  styleUrls: ['./inventory-ad-edit.component.css']
})
export class InventoryAdEditComponent implements OnInit {

  // isQuantityEnabled: boolean = false;
  // categories: any[] = [];
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventroryEditService: InventoryAdEditService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('product_id');
    if (idParam) {
      const product_id = +idParam;
      this.getProduct(product_id);
    }
 
  }



  getProduct(product_id: number) {
    this.inventroryEditService.getProducts(product_id).subscribe(product => {
      this.product = product;
    });
  }


  updateProduct(): void {
  if(this.validateForm()){
      this.inventroryEditService.updateProducts(this.product.product_id, this.product).subscribe(
        () => {
          // Success
          alert('product details updated successfully');
        },
        error => {
          // Error
          console.error('Error updating product:', error);
          alert("Unsuccessful!!");
          // Handle the error (display error message, etc.)
        }
      );
      }
  }

 
  //   onCategoryChange() {
  //     if (this.product.category_id === 'cat_staron') {
  //       this.isQuantityEnabled = true; // Enable quantity field
  //     } else {
  //       this.isQuantityEnabled = false; // Disable quantity field
  //       this.product.product_quantity = null; // Clear the value in case it was entered previously
  //     }
  
  // }
  
    // validateForm(): boolean{
    //   return !!this.product.category_id && !!this.product.product_name && !!this.product.product_brand && !!this.product.product_price
    //   && !!this.product.product_quantity;
    // }
    validateForm(): boolean {
      // Perform front-end validation
      if (
        this.product.product_name.trim() === '' ||
        this.product.product_brand.trim() === '' ||
        this.product.product_quantity.trim() === '' ||
        this.product.product_price.trim() === '' ||
        this.product.category_id.trim() === ''
      ) {
        // Show an error message or perform any other desired actions
        alert('All fields are required');
        return false;
      }
  
      // Additional validation rules can be added here if needed
  
      return true; // Form is valid
    }
 

    
  }

