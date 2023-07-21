import { Component, OnInit } from '@angular/core';
import { GRNService } from './grn.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grn-reports',
  templateUrl: './grn-reports.component.html',
  styleUrls: ['./grn-reports.component.css']
})
export class GRNReportsComponent implements OnInit{

  files!: any[];
  originalFiles!: any[]; // Store the original files before filtering
  reports: any[] = [];
  filteredReports: any[] = [];
  searchValue: Date | null | undefined;
  dialog: any;
  router: any;
  error='';

  constructor(private grnService: GRNService) { }

  ngOnInit(): void {
    this.grnService.getAllFiles().subscribe(
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
