import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-order-reports',
  templateUrl: './order-reports.component.html',
  styleUrls: ['./order-reports.component.css']
})
export class OrderReportsComponent implements OnInit {

  files!: any[];

  constructor(private reportService: ReportService) {}

  // ngOnInit(): void {
  //   this.getDocuments();
  // }


  // getDocuments(): void {
  //   this.reportService.getDocuments()
  //     .then(response => {
  //       this.documents = response;
  //     })
  //     .catch(error => {
  //       console.error('Error retrieving documents:', error);
  //     });
  // }

  // downloadDocument(filename: string): void {
  //   this.reportService.downloadDocument(filename);
  // }




  
  ngOnInit(): void {
    this.reportService.getFiles().subscribe(
      (response) => {
        this.files = response;
      },
      (error) => {
        console.log('Error occurred while fetching files:', error);
      }
    );
  }

  downloadFile(fileId: number): void {
    this.reportService.downloadFile(fileId).subscribe(
      (blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'file_name.pdf'; // Set the desired file name
        link.click();
      },
      (error) => {
        console.log('Error occurred while downloading file:', error);
      }
    );
  }

}
