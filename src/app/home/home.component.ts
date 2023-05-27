import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
// import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
// implements OnInit
{

//   data: any;
//   chart: any;

//   constructor(private dashboardService: DashboardService) { }
  
//   ngOnInit() {
//     this.dashboardService.getData().subscribe((data: any) => {
//       this.data = data;

//       // Format data for chart.js
//       const chartData = {
//         labels: ['Red', 'Blue', 'Green'],
//         datasets: [{
//           data: [this.data.red, this.data.blue, this.data.green],
//           backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'rgb(75, 192, 192)'
//           ]
//         }]
//       };

//       // Create the chart
//       this.chart = new Chart('canvas', {
//         type: 'pie',
//         data: chartData
//       });
//     });
//   }
}
