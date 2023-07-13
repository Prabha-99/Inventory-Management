import { Component, OnInit } from '@angular/core';
import { BillService } from './billing-view.component.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.css'],
  template: ``
 
})

export class BillingViewComponent implements OnInit{

  constructor(private billService: BillService, private sanitizer: DomSanitizer) { }

  // pdfList!: any[];
  bills: any[] = [];
  fileURL: any[] = [];
  pdfUrl!: SafeUrl;

  filepath!: string;
  fileContent!: ArrayBuffer;
  fileUrl!: string;
  filename!:string;


  ngOnInit() {
    this.billService.getAllBills().subscribe(bill => {
      this.bills = bill;
    });

    // this.billService.getImage().subscribe((imageUrls: any[]) => {
    //   this.imageUrls = imageUrls;
    // });

    this.loadPdfList();

   
  }

  openPdf(filename: string): void {
    this.billService.getPdf(filename).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  }


  //delete bill data function
  onDelete(bill_id: number) {
    if (confirm("Are you sure you want to delete this bill?")) {

      this.billService.deleteBill(bill_id).subscribe(() => {
        this.bills = this.bills.filter(bill => bill.id !== bill_id);
       // alert("Bill deleted successfully.");
       // location.reload(); // Refresh the page



      }, () => {
        alert("Bill Deleted Successfully!"); // Display success message
        location.reload();
      });
    }
    
  }



  //delete pdf function
  onDeletepdf(bill_id: number) {
    if (confirm("Are you sure you want to delete this bill?")) {
      this.billService.deleteBillpdf(bill_id).subscribe(() => {
        this.pdfList = this.pdfList.filter(pdf => pdf.pdf_id !== bill_id);
       // alert("Bill deleted successfully.");
       // location.reload(); // Refresh the page



      }, () => {
        alert("Bill Deleted Successfully!"); // Display success message
        location.reload();
      });
    }
  }

  pdfList: any[]=[];


  loadPdfList(): void {
    this.billService.getAllPdf().subscribe(
      (data: any[]) => {
        this.pdfList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  onSend(bill_id: number) {
    if (confirm("Are you sure you want to Send this bill?")) {

      this.billService.sendBillPdfByEmail(bill_id).subscribe(() => {
        this.bills = this.bills.filter(bill => bill.id !== bill_id);
        alert("Bill Send Successfully!"); 

      }, () => {
        alert("Bill Send Fail!"); 
      });
    }

  }

}



