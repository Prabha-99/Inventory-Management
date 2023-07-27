import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-stock-reports',
  templateUrl: './stock-reports.component.html',
  styleUrls: ['./stock-reports.component.css']
})
export class StockReportsComponent implements OnInit{

  files!: any[];
  originalFiles!: any[]; // Store the original files before filtering
  searchValue: Date | null | undefined;
  error='';



  constructor(private http: HttpClient,private stockService: StockService ) { }


  ngOnInit(): void {
    this.stockService.getAllFiles().subscribe(
      (response) => {
        this.files = response;
        this.originalFiles = response; // Assign the fetched files to originalFiles
      },
      (error) => {
        console.log('Error retrieving files:', error);
      }
    );
  }


  filterReports() {
    if (this.searchValue) {
      const datePipe = new DatePipe('en-US');
      const selectedDate = datePipe.transform(this.searchValue, 'MM/dd/yyyy');
      this.files = this.originalFiles.filter((file) => {
        const fileDate = file.date.substring(0, 10); // Extract the date part from the file date ('MM/dd/yyyy')

        console.log('Search Date:', selectedDate);
        console.log('File Date:', fileDate);

        return fileDate === selectedDate; // Filter files that have the same date as the selected date
      });
    } else {
      this.files = this.originalFiles; // Reset files to the original list
    }
  }


  downloadFile(report_id: number, report_name: string) {

    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Send a GET request to the backend endpoint
    this.http.get('http://localhost:8080/api/reports/download?id=' + report_id, httpOptions)
    .subscribe((response: any) => {

        // Create a blob from the response data
        const blob = new Blob([response], { type: 'application/octet-stream' });

        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);

        // Trigger the file download
        const link = document.createElement('a');
        link.href = url;
        link.download = report_name;
        link.click();
      }, error => {
        console.error('Error occurred while downloading the file:', error);
      });
  }

}
