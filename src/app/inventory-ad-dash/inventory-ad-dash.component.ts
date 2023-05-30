import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
// import { count } from 'rxjs';



@Component({
  selector: 'app-inventory-ad-dash',
  templateUrl: './inventory-ad-dash.component.html',
  styleUrls: ['./inventory-ad-dash.component.css'],
  
})
export class InventoryAdDashComponent implements OnInit{

  public books!: Book[];

  constructor(
    private bookServices: BookService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  
  ngOnInit(): void{
    this.onGetBooks();
  }

  public onGetBooks(): void {
    this.bookServices.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
        console.log(this.books);
      },
      (error: HttpErrorResponse) => {
        AlertMessages(this.snackBar, error.message);
      }
    );
  }

  public openAddModal(): void {
    const dialogRef = this.dialog.open(AddBookModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      AlertMessages(this.snackBar, 'Book has been added successfully :) ');
      this.onGetBooks();
    });
  }
  
}
