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

  pdfList!: any[];
  bills: any[] = [];


  ngOnInit() {
    this.billService.getAllBills().subscribe(bill => {
      this.bills = bill;
    });


    // this.getAllPDFs();
   
  }

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
 


  // private extractPDFList(response: HttpResponse<Blob>): any[] {
  //   const pdfList = [];

  //   const contentDisposition = response.headers.get('content-disposition');
  //   const filename = contentDisposition.split(';')[1].trim().split('=')[1].replace(/"/g, '');

  //   const pdf = {
  //     name: filename,
  //     content: response.body
  //   };

  //   pdfList.push(pdf);

  //   return pdfList;
  // }

  

}





