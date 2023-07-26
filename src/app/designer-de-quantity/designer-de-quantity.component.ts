
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DesignerService } from '../designer.service';

interface Product {

  product_id:any;
  category_id:string;
  product_brand:string;
  product_name:string;
  product_price:any;
  product_quantity:any;
}

@Component({
  selector: 'app-designer-de-quantity',
  templateUrl: './designer-de-quantity.component.html',
  styleUrls: ['./designer-de-quantity.component.css']
})
export class DesignerDeQuantityComponent implements OnInit{

  products: Product[]=[];
  selectedProductName: string ='';
  selectedProductBrand: string = '';


  constructor(private http: HttpClient,private productService: DesignerService) { }

  ngOnInit(): void {
    this.getFiles();
  }


  getFiles() {
    this.http.get<Product[]>('http://localhost:8080/api/product/getAllProduct')
      .subscribe(products => this.products = products);
  }


  reduceQuantity(product_name: string, product_brand: string, product_quantity: number): void {

    // Find the product in the products array based on product_name and product_brand
    const selectedProduct = this.products.find((product) => product.product_name === product_name && product.product_brand === product_brand);

    // Check if the requested product_quantity can be deducted from the existing quantity
    if (selectedProduct?.product_quantity >= product_quantity) {
      this.productService.reduceProductQuantity(product_name, product_brand, product_quantity).subscribe(
        () => {
          alert('Product quantity updated successfully!');
          this.refreshPage();
        },
        (error) => {
          alert('Error updating product quantity');
          this.refreshPage();
        }
      );
    } else {
      alert('Insufficient product quantity!');
      this.refreshPage();
    }

}

  onSubmit(formValue: any): void {
    this.reduceQuantity(formValue.product_name, formValue.product_brand, formValue.product_quantity);
  }
  refreshPage() {
    window.location.reload();
  }


}










