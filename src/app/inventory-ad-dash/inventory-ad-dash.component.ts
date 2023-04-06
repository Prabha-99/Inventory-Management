import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { count } from 'rxjs';



@Component({
  selector: 'app-inventory-ad-dash',
  templateUrl: './inventory-ad-dash.component.html',
  styleUrls: ['./inventory-ad-dash.component.css']
})
export class InventoryAdDashComponent implements OnInit {
  productCount!: number;

  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.http.get<number>('http://localhost:8080/api/v1/product/productCount').subscribe(count =>{
        console.log('Product count:',count);
        this.productCount = count;
      });
  }
}
