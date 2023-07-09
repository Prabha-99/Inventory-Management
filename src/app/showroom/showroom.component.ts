import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit , } from '@angular/core';



interface DesignerBillSend {
  id: number;
  name: string;
}

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {
name:string = "";
file:any;

showFileList: boolean = false;
showFileUpload: boolean = false;

files: any;
  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.http.get<DesignerBillSend[]>('http://localhost:8080/api/showroom/viewBill')
      .subscribe(files => this.files = files);
  }

  getName(name:string){
    this.name = name;
  }

  getFile(event:any){
    this.file=event.target.files[0];
    console.log("file",this.file);
  }

  toggleFileList() {
    this.showFileList = !this.showFileList;
    this.showFileUpload = false;

  }

  toggleFileUpload() {
    this.showFileUpload = !this.showFileUpload;
    this.showFileList = false;

  }

  submitData(){
    //create formData object
    let formData = new FormData();
    formData.append("name",this.name)
    formData.append("file",this.file)

    alert('Successfully submitted!');

    //submit data in API
    this.http.post("http://localhost:8080/api/showroom/add",formData)
    .subscribe((response) =>{
    console.log(response);

  });
 }

 downloadFile(id: number, fileName: string) {

  const httpOptions = {
    responseType: 'blob' as 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Send a GET request to the backend endpoint
  this.http.get('http://localhost:8080/api/showroom/download?id=' + id, httpOptions)
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





