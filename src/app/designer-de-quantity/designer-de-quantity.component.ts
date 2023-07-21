
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFiles();
  }


  getFiles() {
    this.http.get<Product[]>('http://localhost:8080/api/product/getAllProduct')
      .subscribe(products => this.products = products);
  }






}










