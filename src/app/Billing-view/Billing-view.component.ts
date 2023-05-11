import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.css']
})
export class BillingViewComponent {

  pdfs!: any[];

  constructor(private http: HttpClient) { }

  data!: any[];
  
  items!: any[];

  ngOnInit() {
    this.getAllDetails();

    this.http.get<any[]>('http://localhost:8080/api/bill/view').subscribe(
      data => this.pdfs = data,
      error => console.log(error)
    );

    this.http.get<any[]>('/api/items').subscribe((data) => {
      this.items = data;
    });
  }

  

  getPDFContent(id:any) {
    this.http.get('http://localhost:8080/api/bill/view' + id, { responseType: 'arraybuffer' }).subscribe(
      data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => console.log(error)
    );
  }

  getAllDetails() {
    this.http.get<any[]>('/api/view').subscribe(data => {
      this.data = data;
    });
  }




  }


