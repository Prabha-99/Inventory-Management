import { Component, OnInit } from '@angular/core';
import { StockManagerForecatingChartService } from './stock-manager-forecating-chart.service';
import { Chart, registerables } from 'chart.js';
import { isThisSecond } from 'date-fns';
Chart.register(...registerables);

@Component({
  selector: 'app-stock-manager-forecating-chart',
  templateUrl: './stock-manager-forecating-chart.component.html',
  styleUrls: ['./stock-manager-forecating-chart.component.css']
})
export class StockManagerForecatingChartComponent implements OnInit{

  categories: any[] = [];
  selectedCategory = '';
  selectedStatus = '';
  selectedChartType = 'line';
  product: any = {

    category_id: '',
    product_name: '',
    product_brand: '',
    product_quantity: null,
    product_price: null
  };
  
  myChart: Chart<"line" | "bar" | "pie", number[] | undefined, string> | undefined;

  data:{ content: [ { id: number, purchase_year: number, purchase_month: number, total: number } ] } | undefined;
  constructor(private stockmanagerforecastingchartservice : StockManagerForecatingChartService) {}

  async getData(){
    const jsonData = await this.stockmanagerforecastingchartservice.getData(this.selectedCategory, this.selectedStatus);
    this.data = jsonData.data;
  }

  async ngOnInit(): Promise<void> {
    await this.drawChart();

    this.stockmanagerforecastingchartservice.getCategory().subscribe(category => {
      this.categories = category;
  });
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

  filterCategories(category: any): boolean {
    return category.category_id === 'cat_edge' || category.category_id === 'cat_melamine';
  }
}
