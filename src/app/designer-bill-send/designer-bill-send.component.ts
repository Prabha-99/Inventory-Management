import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
customerName: string = '';

  constructor(private http: HttpClient, private designerService: DesignerService) { }

  //billsend
  billSend(event:any){
    this.file=event.target.files[0];
  }


  //billsend
  uploadBill(customerName: string){
    try{
    //create formData object
    let formData = new FormData();
    formData.append("filename",this.filename)
    formData.append("file",this.file)
    formData.append("customerName", customerName);


    alert("file send successfully!")
    this.refreshPage();

    //submit data in API
    this.http.post("http://localhost:8080/api/designer/billSend",formData)
    .subscribe((response) =>{
      console.log(response);

  });
  }catch(error){
      console.error("Error uploading bill:", error);

  }
}
refreshPage() {
  window.location.reload();
}


}








