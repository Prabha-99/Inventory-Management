import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ShowroomFile {
  id: number;
  name: string;
}

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})

export class DesignerComponent implements OnInit  {

toggleFileList() {
  this.showFileList = !this.showFileList;
}
  files: ShowroomFile[] = [];
showFileList: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.http.get<ShowroomFile[]>('http://localhost:8080/api/designer/files')
      .subscribe(files => this.files = files);
  }

  downloadFile(id: number,fileName: string) {
    // Your existing downloadFile method implementation
    const fileId = 30; // Replace with the actual file ID

    this.http.get('http://localhost:8080/api/designer/download/' + id, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).subscribe((response: ArrayBuffer) => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = fileName; // Replace with the actual filename
      downloadLink.click();
    });
  }
  }



/*export class DesignerComponent {

  constructor(private http: HttpClient) { }

  downloadFile() {
    const fileId = 30; // Replace with the actual file ID

    this.http.get('http://localhost:8080/api/designer/download/' + fileId, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).subscribe((response: ArrayBuffer) => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'bill.jpeg '; // Replace with the actual filename
      downloadLink.click();
    });
  }
}*/
