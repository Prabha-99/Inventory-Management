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

  selectedCategory = '';
  selectedStatus = '';
  myChart: Chart<"line", number[] | undefined, string> | undefined;

  // data: object | undefined;
  data:{ content: [ { id: number, purchase_year: number, purchase_month: number, total_purchases: number } ] } | undefined;
  // data:{ code: string, message: string, content: Array<{ id: number, purchase_year: number, purchase_month: number, total_purchases: number }>} | undefined ;
  constructor(private forecastingChartComponentService: ForecastingChartComponentService) {}

  async getData(){
    const jsonData = await this.forecastingChartComponentService.getData(this.selectedCategory, this.selectedStatus);
    this.data = jsonData.data;
  }

  async ngOnInit(): Promise<void> {
    await this.drawChart();
  }

  async drawChart() {
    this.myChart?.destroy();
    await this.getData();
    const dataArray = this.data?.content.map(i => i.total_purchases );
    console.log(dataArray);
    this.myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.data?.content.map(i => `${i.purchase_year}/${i.purchase_month}` ),
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

  onClickMe() {
      console.log(`Selected category: ${this.selectedCategory} and selected staus: ${this.selectedStatus}`);
      this.drawChart();
  }

  onSelectedCategory(value:string): void {
		this.selectedCategory = value;
	}

  onSelectedStatus(value:string): void {
		this.selectedStatus = value;
	}

}
