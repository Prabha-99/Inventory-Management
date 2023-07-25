import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit , } from '@angular/core';
import { DatePipe } from '@angular/common';



interface DesignerBillSend {
  id: number;
  name: string;
}

@Component({
  selector: 'app-showroom-bill-view',
  templateUrl: './showroom-bill-view.component.html',
  styleUrls: ['./showroom-bill-view.component.css']
})
export class ShowroomBillViewComponent implements OnInit {
  name:string = "";
file:any;

showFileList: boolean = false;
showFileUpload: boolean = false;

files: any[] = [];;
  constructor(private http:HttpClient,private datePipe: DatePipe) {
    this.getFiles();
  }

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

  formatDate(date: string): string {
    // Convert the date string to a JavaScript Date object
    const parsedDate = new Date(date);
    // Format the date using the DatePipe
    const formattedDate = this.datePipe.transform(parsedDate, 'yyyy-MM-dd'); // Adjust the format as per your preference
    return formattedDate || '';
  }

  getFile(event:any){
    this.file=event.target.files[0];
    console.log("file",this.file);
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












