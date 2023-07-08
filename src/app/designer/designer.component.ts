import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerProduct } from '../designer-product';
import { DesignerService } from '../designer.service';


interface ShowroomFile {
  id: number;
  name: string;
}

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})

export class DesignerComponent implements OnInit  {


  showFileUpload: boolean = false;
  showProductManagement: boolean = false;
  showFileList: boolean = false;

  toggleFileUpload() {
    this.showFileUpload = !this.showFileUpload;
    this.showProductManagement = false;
    this.showFileList = false;
  }

  toggleProductManagement() {
    this.showProductManagement = !this.showProductManagement;
    this.showFileUpload = false;
    this.showFileList = false;
  }

  toggleFileList() {
    this.showFileList = !this.showFileList;
    this.showFileUpload = false;
    this.showProductManagement = false;
  }


//billsend
filename:string = "";
file:any;

productService: any;

product: DesignerProduct = {
  product_id: 0,
  product_quantity: 0
};


  files: ShowroomFile[] = [];

  constructor(private http: HttpClient, private designerService: DesignerService) { }


  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.http.get<ShowroomFile[]>('http://localhost:8080/api/designer/files')
      .subscribe(files => this.files = files);
  }

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

  downloadFile(id: number,fileName: string) {
    this.http.get('http://localhost:8080/api/designer/download/' + id, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).subscribe((response: ArrayBuffer) => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = fileName;
      downloadLink.click();
    });
  }

  deductProduct(): void {
    this.designerService.deductProduct(this.product)
      .subscribe(
        updatedProduct => {
          console.log('Product deducted successfully:', updatedProduct);
          alert('Product deduct successfully');

          // Clear the input fields
        this.product = {
          product_id: null,
          product_quantity: 0
        };
        },
        error => {
          console.error('Failed to deduct product:', error);
          alert('Error deduct product quantity');

        }
      );
  }
}





