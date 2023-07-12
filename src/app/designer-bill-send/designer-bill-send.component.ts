import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerProduct } from '../designer-product';
import { DesignerService } from '../designer.service';

@Component({
  selector: 'app-designer-bill-send',
  templateUrl: './designer-bill-send.component.html',
  styleUrls: ['./designer-bill-send.component.css']
})
export class DesignerBillSendComponent {
  //billsend
filename:string = "";
file:any;

  constructor(private http: HttpClient, private designerService: DesignerService) { }

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
}






