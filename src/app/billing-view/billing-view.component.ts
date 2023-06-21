import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BillService } from './billing-view.component.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.css'],
  template: ``
 
})

export class BillingViewComponent implements OnInit{

  constructor(private billService: BillService) { }

  // pdfList!: any[];
  bills: any[] = [];
  fileURL: any[] = [];

  ngOnInit() {
    this.billService.getAllBills().subscribe(bill => {
      this.bills = bill;
    });

    // this.billService.getImage().subscribe((imageUrls: any[]) => {
    //   this.imageUrls = imageUrls;
    // });

    this.loadPdfList();


  }


  //delete function
  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this bill?")) {
      this.billService.deleteBill(id).subscribe(() => {
        this.bills = this.bills.filter(bill => bill.id !== id);
       // alert("Bill deleted successfully.");
       // location.reload(); // Refresh the page
      }, () => {
        alert("Bill Deleted Successfully!"); // Display error message
        location.reload();
      });
    }
  }

  onDeletepdf(bill_id: number) {
      this.billService.deleteBillpdf(bill_id).subscribe(() => {
        this.pdfList = this.pdfList.filter(pdf => pdf.bill_id !== bill_id);
       // alert("Bill deleted successfully.");
       // location.reload(); // Refresh the page
      }, () => {
        location.reload();
      });
    
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

  getPdfFile(filepath: string) {
    if (filepath == null || filepath.trim().length == 0) {
      alert(console.log("File path is null or empty"));
      return;
    }
    this.billService.getPdfFileByPath(filepath).subscribe(
      (data) => {
        const file = new Blob([data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },
      (error) => {
        alert(console.log(error));
      }
    );
  }

}





