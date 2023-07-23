import { Component} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-showroom-send-file',
  templateUrl: './showroom-send-file.component.html',
  styleUrls: ['./showroom-send-file.component.css']
})



export class ShowroomSendFileComponent  {
name:string = "";
file:any;


  constructor(private http:HttpClient) {}



  getFile(event:any){
    this.file=event.target.files[0];
    console.log("file",this.file);
  }

  submitData(){

    if (!this.file) {
       alert('Please select a file.');
      return;
    }

    //create formData object
    let formData = new FormData();
    formData.append("name",this.name)
    formData.append("file",this.file)

    alert('File send successfully!');
      this.refreshPage();

    //submit data in API

    this.http.post("http://localhost:8080/api/showroom/add",formData)
    .subscribe((response) =>{



      this.name = "";
      this.file = null;

    },
      (error:HttpErrorResponse) => {

  });
 }

 refreshPage() {
  window.location.reload();
}

}



