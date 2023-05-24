import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manager-dash',
  templateUrl: './stock-manager-dash.component.html',
  styleUrls: ['./stock-manager-dash.component.css']
})
export class StockManagerDashComponent implements OnInit {

  count:any;
  count2:any;

   constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.count = count);
    this.http.get<any>("http://localhost:8080/api/v1/category/categoryCount").subscribe(count2 =>this.count2 = count2);
  }
  

}

