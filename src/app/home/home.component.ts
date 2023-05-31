import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  category:any;
  products:any;
  sales:any;

  constructor(private http:HttpClient){}
  
  ngOnInit() {
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.category = count);
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.products = count);
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.sales = count);
    
  }
}
