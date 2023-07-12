import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerService } from '../designer.service';


interface ShowroomFile {
  id: number;
  name: string;
}

@Component({
  selector: 'app-desiger-view-files',
  templateUrl: './desiger-view-files.component.html',
  styleUrls: ['./desiger-view-files.component.css']
})

export class DesigerViewFilesComponent implements OnInit{

  files: ShowroomFile[] = [];

  constructor(private http: HttpClient, private designerService: DesignerService) { }


  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.http.get<ShowroomFile[]>('http://localhost:8080/api/designer/files')
      .subscribe(files => this.files = files);
  }

  downloadFile(id: number, fileName: string) {

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
        link.download = fileName;
        link.click();
      }, error => {
        console.error('Error occurred while downloading the file:', error);
      });
  }
}



