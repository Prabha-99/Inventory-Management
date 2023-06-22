import { Component, OnInit } from '@angular/core';
import { StockKeeperGINService } from './stock-keeper-gin.service';

@Component({
  selector: 'app-stock-keeper-order-reports',
  templateUrl: './stock-keeper-order-reports.component.html',
  styleUrls: ['./stock-keeper-order-reports.component.css']
})


export class StockKeeperOrderReportsComponent implements OnInit{
  files!: any[];

  constructor(private stockKeeperGIN: StockKeeperGINService) { }

  ngOnInit(): void {
    this.stockKeeperGIN.getAllFiles().subscribe(
      (response) => {
        this.files = response;
      },
      (error) => {
        console.log('Error retrieving files:', error);
      }
    );
  }



  // Confirm(): void {
  //   if (confirm('Are you sure you want to Confirm?')) {
  //     location.reload();
  //   }
  // }
}
