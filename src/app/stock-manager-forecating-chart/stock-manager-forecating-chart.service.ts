import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StockManagerForecatingChartService {

  constructor() { }
  
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
}
