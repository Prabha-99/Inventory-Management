import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ForecastingChartComponentService {
  constructor() { }
  
  getData = async () => {
    const response = await axios.post(
      `http://localhost:8080/api/forecasting/grn`,
      {
        timeDuration: "monthly",
        category: "",
        status: ""
      }
    );
    
    return response;
  }
}
