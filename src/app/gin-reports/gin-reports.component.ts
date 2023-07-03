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
        if (error.status === 401) {
          this.error = 'Error downloading file..!!!';
        } else {
          this.error = 'Error downloading file..!!!';
        }
      }
    );
  }

  searchUsers(): void {
    this.filteredReports = this.files.filter(report => {
      const fullName = `${report.date} ${report.report_name}`;
      return fullName.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredReports = this.files;
  }

}
