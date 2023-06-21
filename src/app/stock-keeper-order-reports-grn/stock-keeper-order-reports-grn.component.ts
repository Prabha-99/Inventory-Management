import { Component, OnInit } from '@angular/core';
import { StockKeeperGRNService } from './stock-keeper-grn.service';

@Component({
  selector: 'app-stock-keeper-order-reports-grn',
  templateUrl: './stock-keeper-order-reports-grn.component.html',
  styleUrls: ['./stock-keeper-order-reports-grn.component.css']
})


export class StockKeeperOrderReportsGRNComponent implements OnInit{
  files!: any[];

  constructor(private stockKeeperGRN: StockKeeperGRNService) { }

  ngOnInit() {
    this.stockKeeperGRN.getAllFiles().subscribe(
      (response) => {
        this.files = response;
      },
      (error) => {
        console.log('Error retrieving files:', error);
      }
    );
  }

  confirmFile(report_id: number, report_name: string): void {
    this.stockKeeperGRN.confirmFile(report_id).subscribe(
      (response) => {
        // Create a temporary link and trigger the file download
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = report_name;
        link.click();
      },
      (error) => {
        console.log('Error downloading file:', error);
      }
    );
  }

  rejectFile(report_id: number, report_name: string): void {
    this.stockKeeperGRN.rejectFile(report_id).subscribe(
      (response) => {
        // Create a temporary link and trigger the file download
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = report_name;
        link.click();
      },
      (error) => {
        console.log('Error downloading file:', error);
      }
    );
  }



  // Confirm(): void {
  //   if (confirm('Are you sure you want to Confirm?')) {
  //     location.reload();
  //   }
  // }
}
