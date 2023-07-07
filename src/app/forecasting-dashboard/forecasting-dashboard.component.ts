import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';


import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-forecasting-dashboard',
  templateUrl: './forecasting-dashboard.component.html',
  styleUrls: ['./forecasting-dashboard.component.css']
})


export class ForecastingDashboardComponent implements OnInit{
  ngOnInit(): void {
    
  }
}