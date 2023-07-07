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
product: any = {};

//billsend
filename:string = "";
file:any;
showFileUpload: boolean = false;
showProductManagement: boolean = false;


//deduct product
toggleProductManagement() {
  this.showProductManagement = !this.showProductManagement;
}

toggleFileUpload(){
  this.showFileUpload = !this.showFileUpload;
}

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

  //billsend
  billSend(event:any){
    this.file=event.target.files[0];
  }

  //billsend
  uploadBill(){
    //create formData object
    let formData = new FormData();
    formData.append("filename",this.filename)
    formData.append("file",this.file)

    alert('Successfully submitted!');

    //submit data in API
    this.http.post("http://localhost:8080/api/designer/billSend",formData)
    .subscribe((response) =>{
    console.log(response);
    });
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

  deductProduct() {
    this.http.put('/deductProduct', this.product)
      .subscribe(
        (response: any) => {
          // Handle success response here
          console.log(response);
        },
        (error: any) => {
          // Handle error response here
          console.error(error);
        }
      );
  }
  }












