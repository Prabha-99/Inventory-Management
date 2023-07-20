import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface Product {

  product_id:any;
  category_id:any;
  product_brand:string;
  product_name:string;
  product_price:any;
  product_quantity:any;
  cat_id:string;
}

@Component({
  selector: 'app-designer-de-quantity',
  templateUrl: './designer-de-quantity.component.html',
  styleUrls: ['./designer-de-quantity.component.css']
})
export class DesignerDeQuantityComponent{

  products: Product[]=[];

  constructor(private http: HttpClient) { }



  getFiles() {
    this.http.get<Product[]>('http://localhost:8080/api/designer/getAllProduct')
      .subscribe(products => this.products = products);
  }

}









