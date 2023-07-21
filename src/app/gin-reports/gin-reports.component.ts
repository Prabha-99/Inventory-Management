import { Component, OnInit } from '@angular/core';
import { GINService } from './gin.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gin-reports',
  templateUrl: './gin-reports.component.html',
  styleUrls: ['./gin-reports.component.css']
  
})
export class GINReportsComponent implements OnInit{

  files!: any[];
  originalFiles!: any[]; // Store the original files before filtering
  reports: any[] = [];
  filteredReports: any[] = [];
  searchValue: Date | null | undefined;
  dialog: any;
  router: any;
  error='';

  filepath!: string;          //New
  fileContent!: ArrayBuffer;
  fileUrl!: string;
  filename!:string;

  constructor(private ginService: GINService ) { }


  ngOnInit(): void {
    this.ginService.getAllFiles().subscribe(
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

  resetFilter() {
    this.searchValue = null; // Clear the selected date
    this.files = this.files; // Reset files to the original list
  }


  

  // downloadFile(report_id: number, report_name: string): void {
  //   this.ginService.downloadFile(report_id).subscribe(
  //     (response) => {
  //       // Create a temporary link and trigger the file download
  //       const blob = new Blob([response], { type: 'application/pdf' });
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = report_name;
  //       link.click();
  //       link.remove();
  //     },
  //     (error) => {
  //       if (error.status === 401) {
  //         this.error = 'Error downloading file..!!!';
  //       } else {
  //         this.error = 'Error downloading file..!!!';
  //       }
  //     }
  //   );
  // }
  


  // download() {
  //   const filePath = '/api/files/135'; // Replace with the appropriate file path or ID
  //   this.ginService.downloadFile(filePath)
  //     .subscribe(response => {
  //       const blob = new Blob([response], { type: 'application/pdf' });
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'file.pdf'; // Set the desired file name
  //       link.click();
  //     });
  // }

  openPdf(report_name: string): void {             //New
    this.ginService.getPdf(report_name).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  }
}
