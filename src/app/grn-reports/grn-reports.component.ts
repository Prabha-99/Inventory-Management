import { Component, OnInit } from '@angular/core';
import { GRNService } from './grn.service';

@Component({
  selector: 'app-grn-reports',
  templateUrl: './grn-reports.component.html',
  styleUrls: ['./grn-reports.component.css']
})
export class GRNReportsComponent implements OnInit{

  files!: any[];
  reports: any[] = [];
  filteredReports: any[] = [];
  searchValue: string = '';
  dialog: any;
  router: any;
  error='';

  constructor(private grnService: GRNService) { }

  ngOnInit(): void {
    this.grnService.getAllFiles().subscribe(
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
    this.grnService.downloadFile(report_id).subscribe(
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



}
