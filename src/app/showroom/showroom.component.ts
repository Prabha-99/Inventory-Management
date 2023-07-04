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
  showFileList: boolean | undefined;
  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getFiles();
  }

  toggleFileList() {
    this.showFileList = !this.showFileList;
  }

  getFiles() {
    this.http.get<DesignerBillSend[]>('http://localhost:8080/api/showroom/viewBill')
      .subscribe(files => this.file = files);
  }

  getName(name:string){
    this.name = name;
  }

  getFile(event:any){
    this.file=event.target.files[0];
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

 downloadFile(id: number,fileName: string) {
  // Your existing downloadFile method implementation
  const fileId = 30; // Replace with the actual file ID

  this.http.get('http://localhost:8080/api/showroom/viewBill' + id, {
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





