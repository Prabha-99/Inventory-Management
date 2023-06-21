import { Component, OnInit } from '@angular/core';
import { GINService } from './gin.service';

@Component({
  selector: 'app-gin-reports',
  templateUrl: './gin-reports.component.html',
  styleUrls: ['./gin-reports.component.css']
})
export class GINReportsComponent implements OnInit{

  files!: any[];

  constructor(private ginService: GINService) { }

  ngOnInit(): void {
    this.ginService.getAllFiles().subscribe(
      (response) => {
        this.files = response;
      },
      (error) => {
        console.log('Error retrieving files:', error);
      }
    );
  }

  downloadFile(report_id: number, report_name: string): void {
    this.ginService.downloadFile(report_id).subscribe(
      (response) => {
        // Create a temporary link and trigger the file download
        const blob = new Blob([response], { type: 'pdf' });
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

}
