import { Component, OnInit } from '@angular/core';
import { GINService } from './gin.service';

@Component({
  selector: 'app-gin-reports',
  templateUrl: './gin-reports.component.html',
  styleUrls: ['./gin-reports.component.css']
})
export class GINReportsComponent implements OnInit{

  files!: any[];
  reports: any[] = [];
  filteredReports: any[] = [];
  searchValue: string = '';
  dialog: any;
  router: any;
  error='';

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

  filterReports(): void {
    if (this.searchValue) {
      this.filteredReports = this.files.filter((file) => {
        // Compare the date value with the selected search date (without time)
        const fileDate = new Date(file.date);
        const searchDate = new Date(this.searchValue);
        return (
          fileDate.getFullYear() === searchDate.getFullYear() &&
          fileDate.getMonth() === searchDate.getMonth() &&
          fileDate.getDate() === searchDate.getDate()
        );
      });
    } else {
      this.filteredReports = this.files; // If no search date is selected, show all files
    }
  }
  

  downloadFile(report_id: number, report_name: string): void {
    this.ginService.downloadFile(report_id).subscribe(
      (response) => {
        // Create a temporary link and trigger the file download
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = report_name;
        link.click();
        link.remove();
      },
      (error) => {
        if (error.status === 401) {
          this.error = 'Error downloading file..!!!';
        } else {
          this.error = 'Error downloading file..!!!';
        }
      }
    );
  }
  


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
























  // searchUsers(): void {
  //   this.filteredReports = this.files.filter(report => {
  //     const fullName = `${report.date} ${report.report_name}`;
  //     return fullName.toLowerCase().includes(this.searchValue.toLowerCase());
  //   });
  // }

  // clearSearch(): void {
  //   this.searchValue = '';
  //   this.filteredReports = this.files;
  // }

}
