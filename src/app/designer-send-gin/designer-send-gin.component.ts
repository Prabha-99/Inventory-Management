import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerProduct } from '../designer-product';
import { DesignerService } from '../designer.service';

@Component({
  selector: 'app-designer-send-gin',
  templateUrl: './designer-send-gin.component.html',
  styleUrls: ['./designer-send-gin.component.css']
})
export class DesignerSendGINComponent {
     //GINsend
filename:string = "";
file:any;

  constructor(private http: HttpClient, private designerService: DesignerService) { }


    //ginsend
    ginSend(event:any){
      this.file=event.target.files[0];
    }

     //Upload GIN
  uploadGIN(){
    //create formData object
    let formData = new FormData();
    formData.append("filename",this.filename)
    formData.append("file",this.file)

    alert('Successfully submitted!');

    //submit data in API
    this.http.post("http://localhost:8080/api/designer/ginSend",formData)
    .subscribe((response) =>{
    console.log(response);
    });
  }


}










