import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerService } from '../designer.service';
import { DatePipe } from '@angular/common';


interface ShowroomFile {
  id: number;
  filename: string;
  date: string;
}

@Component({
  selector: 'app-desiger-view-files',
  templateUrl: './desiger-view-files.component.html',
  styleUrls: ['./desiger-view-files.component.css']
})

export class DesigerViewFilesComponent implements OnInit{

  files: ShowroomFile[] = [];

  constructor(private http: HttpClient, private designerService: DesignerService,private datePipe: DatePipe) { }


  ngOnInit() {
    this.getFiles();
  }
  formatDate(date: string): string {
    // Convert the date string to a JavaScript Date object
    const parsedDate = new Date(date);
    // Format the date using the DatePipe
    const formattedDate = this.datePipe.transform(parsedDate, 'yyyy-MM-dd');
    return formattedDate || '';
  }

  getFiles() {
    this.http.get<ShowroomFile[]>('http://localhost:8080/api/designer/files')
      .subscribe(files => this.files = files);
  }

  downloadFile(id: number, filename: string) {

    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Send a GET request to the backend endpoint
    this.http.get('http://localhost:8080/api/designer/download?id=' + id, httpOptions)
    .subscribe((response: any) => {

        // Create a blob from the response data
        const blob = new Blob([response], { type: 'application/octet-stream' });

        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);

        // Trigger the file download
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
      }, error => {
        console.error('Error occurred while downloading the file:', error);
      });
  }
}



