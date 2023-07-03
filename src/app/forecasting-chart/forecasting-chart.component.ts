import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ForecastingChartComponentService } from './forecasting-chart.service';
import { isThisSecond } from 'date-fns';
Chart.register(...registerables);

@Component({
  selector: 'app-forecasting-chart',
  templateUrl: './forecasting-chart.component.html',
  styleUrls: ['./forecasting-chart.component.css'],
})
export class ForecastingChartComponent implements OnInit {
  // data: object | undefined;
  data:{ content: [ { id: number, purchase_year: number, purchase_month: number, total_purchases: number } ] } | undefined;
  // data:{ code: string, message: string, content: Array<{ id: number, purchase_year: number, purchase_month: number, total_purchases: number }>} | undefined ;
  constructor(private forecastingChartComponentService: ForecastingChartComponentService) {}

  async getData(){
    const jsonData = await this.forecastingChartComponentService.getData();
    this.data = jsonData.data;
  }

  async ngOnInit(): Promise<void> {
    await this.getData();
    const dataArray = this.data?.content.map(i => i.total_purchases );
    console.log(dataArray);
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: dataArray,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
