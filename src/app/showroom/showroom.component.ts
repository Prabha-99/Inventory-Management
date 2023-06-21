import { HttpClient } from '@angular/common/http';
import { Component , } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent {

  constructor(
    private http:HttpClient
  ) {

  }

  name:string = ""
  file:any;

  getName(name:string){
    this.name = name;
  }

  getFile(event:any){
    this.file=event.target.files[0];
    console.log("file",this.file);
  }

  submitData(){
    //create formData object
    let formData = new FormData();
    formData.set("name",this.name)
    formData.set("file",this.file)

    //submit data in API
    this.http.post("http://localhost:8080/api/showroom/add",formData)
    .subscribe((Response) =>{});
  }


  }


