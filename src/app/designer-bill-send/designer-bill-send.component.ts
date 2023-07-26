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
    if (!this.file || !customerName) {
      alert('Please select a file and customer name');
      return;
    }

    //create formData object
    let formData = new FormData();
    formData.append("filename",this.filename)
    formData.append("file",this.file)
    formData.append("customerName", customerName);

    //submit data in API
    this.http.post("http://localhost:8080/api/designer/billSend",formData)
    .subscribe(() =>{
      alert('An error occurred while sending the file.');
    },

    () => {
      this.filename = "";
      this.file = null;
      alert('File sent successfully!');
      this.refreshPage();
  });



}
refreshPage() {
  window.location.reload();
}


}








