import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignerProductService } from './designer-product.service';
import { Product } from './Product';



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
product: any;
deductProduct(arg0: any) {
throw new Error('Method not implemented.');
}

//billsend
filename:string = "";
file:any;
showFileUpload: boolean = false;
showProductManagement: boolean = false;


//deduct product
toggleProductManagement() {
  this.showProductManagement = !this.showProductManagement;
}

toggleFileUpload(){
  this.showFileUpload = !this.showFileUpload;
}

toggleFileList() {
  this.showFileList = !this.showFileList;
}
  files: ShowroomFile[] = [];
showFileList: any;

  constructor(private http: HttpClient) { }

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
    // Your existing downloadFile method implementation
    const fileId = 30; // Replace with the actual file ID

    this.http.get('http://localhost:8080/api/designer/download/' + id, {
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


export class ProductManagementComponent {


  product: Product = new Product();


  constructor(private productService: DesignerProductService) {}


  /*deductProduct(productId: number) {
    this.productService.deductProduct(productId, this.product)
      .subscribe(updatedProduct => {
        // Handle the updated product as needed
        console.log('Product deducted successfully:', updatedProduct);
      }, error => {
        // Handle the error
        console.error('Error deducting product:', error);
      });
  }*/
  deductProduct() {
    this.productService.deductProduct(this.product).subscribe(
      (response) => {
        // Handle successful response
        console.log('Product deducted:', response);
        // You can perform any additional actions after deducting the product
      },
      (error) => {
        // Handle error response
        console.error('Error deducting product:', error);
        // You can display an error message to the user or perform other error handling
      }
    );
  }
}
export class Product {
  productID: number  ;
  productName: string;
  productQuantity: number ;
}





