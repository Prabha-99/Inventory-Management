import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-designer-dash',
  templateUrl: './designer-dash.component.html',
  styleUrls: ['./designer-dash.component.css']
})
export class DesignerDashComponent {
  category:any;
  products:any;
  sales:any;


  constructor(private http:HttpClient){}

  ngOnInit() {
    this.http.get<any>("http://localhost:8080/api/v1/category/categoryCount").subscribe(count =>this.category = count);
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.products = count);
    this.http.get<any>("").subscribe(count =>this.sales = count);

  }
}
