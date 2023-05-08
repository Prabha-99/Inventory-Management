import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { count } from 'rxjs';



@Component({
  selector: 'app-inventory-ad-dash',
  templateUrl: './inventory-ad-dash.component.html',
  styleUrls: ['./inventory-ad-dash.component.css'],
  
})
export class InventoryAdDashComponent implements OnInit{

  count:any;
  count2:any;

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.count = count);
    this.http.get<any>("http://localhost:8080/api/v1/category/categoryCount").subscribe(count2 =>this.count2 = count2);
  }
  
}
