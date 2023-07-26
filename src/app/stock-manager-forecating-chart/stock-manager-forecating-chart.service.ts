import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StockManagerForecatingChartService {

  constructor(private http: HttpClient) { }
  
  getData = async (category, status) => {
    
    if(status===""){
      status="grn";
    }
    const response = await axios.post(
      `http://localhost:8080/api/forecasting/${status}`,
      {
        timeDuration: "monthly",
        category: category,
      }
    );
    
    return response;
  }

  getCategory() {
    return this.http.get<any[]>('http://localhost:8080/api/v1/category/getAllCategory'); //get categories
  }
}
