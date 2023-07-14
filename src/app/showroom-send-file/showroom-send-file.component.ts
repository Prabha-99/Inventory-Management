import { Component, OnInit , } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-showroom-send-file',
  templateUrl: './showroom-send-file.component.html',
  styleUrls: ['./showroom-send-file.component.css']
})

export class ShowroomSendFileComponent  {
name:string = "";
file:any;

getFile(event:any){
  this.file=event.target.files[0];
  console.log("file",this.file);
}

files: any;
  constructor(private http:HttpClient) {}

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
}



