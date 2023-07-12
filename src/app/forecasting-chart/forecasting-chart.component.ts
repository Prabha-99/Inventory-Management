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
  selectedChartType = 'line';
  
  myChart: Chart<"line" | "bar" | "pie", number[] | undefined, string> | undefined;

  data:{ content: [ { id: number, purchase_year: number, purchase_month: number, total: number } ] } | undefined;
  constructor(private forecastingChartComponentService: ForecastingChartComponentService) {}

  async getData(){
    const jsonData = await this.forecastingChartComponentService.getData(this.selectedCategory, this.selectedStatus);
    this.data = jsonData.data;
  }

  async ngOnInit(): Promise<void> {
    await this.drawChart();
  }

  async drawChart() {
    enum Charts {
      Line = "line",
      Bar = "bar",
      Pie = "pie"
    }
    this.myChart?.destroy();
    await this.getData();
    const dataArray = this.data?.content.map(i => i.total );
    console.log(dataArray);
    this.myChart = new Chart('myChart', {
      type: this.selectedChartType === 'line' ? Charts.Line :
      this.selectedChartType === 'bar' ? Charts.Bar :
      this.selectedChartType === 'pie' ? Charts.Pie : Charts.Line,
      data: {
        labels: this.data?.content.map(i => `${i.purchase_year}/${i.purchase_month}` ),
        datasets: [
          {
            label:  this.selectedStatus === 'grn' ? "Purchases" : "Sales",
            data: dataArray,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: this.selectedChartType !== 'pie', // Hide Y-axis for non-pie charts
            beginAtZero: true,
            title: {
              display: true,
              text: 'Quantity' // Y-axis label
            }
          },
          x: {
            display: this.selectedChartType !== 'pie', // Hide X-axis for non-pie charts
            title: {
              display: true,
              text: 'Month' // X-axis label
            }
          }
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

  onSelectedChartType(value:string): void {
		this. selectedChartType = value;
	}

}
