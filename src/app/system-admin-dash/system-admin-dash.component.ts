import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-system-admin-dash',
  templateUrl: './system-admin-dash.component.html',
  styleUrls: ['./system-admin-dash.component.css']
})
export class SystemAdminDashComponent {
  category:any;
  products:any;
  users:any;

  constructor(private http:HttpClient){}
  
  ngOnInit() {
    this.http.get<any>("http://localhost:8080/api/v1/category/categoryCount").subscribe(count =>this.category = count);
    this.http.get<any>("http://localhost:8080/api/product/productCount").subscribe(count =>this.products = count);
    this.http.get<any>("http://localhost:8080/api/admin/userCount").subscribe(count =>this.users = count);
  }

}
