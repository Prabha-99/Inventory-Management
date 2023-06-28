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
