import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenerateGINService } from './generate-gin.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-generate-gin',
  templateUrl: './generate-gin.component.html',
  styleUrls: ['./generate-gin.component.css']
})
export class GenerateGINComponent implements OnInit{

  products: any[] = [];
  filteredProducts: any[] = [];
  searchValue: string = '';
  gin:any ={
    address:'',
    contact_nu:'',
    customer_name:'',
    date:null,
    category_id:null,
    invoiced_quantity:null,
    issued_quantity:null,
    item_description:'',
    remarks:'',

   
};
tele_error='';
tele_error_fix='';

constructor(private _dialog: MatDialog, private generateGINService: GenerateGINService) {}
  ngOnInit(): void {
    this.generateGINService.getProducts().subscribe(product => {
      this.products = product;
      this.filteredProducts = product;
  });
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const searchDet = `${product.product_name} ${product.category_id}`;
      return searchDet.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredProducts = this.products;
  }


submit() {
    if (!this.isValidFormData())  {
      alert('Please Enter Required Fields!!');
      return;
    }
    

  this.generateGINService.submit(this.gin).subscribe(
    (response) => {
      console.log('GIN added successfully',response);
      alert('GIN created successfully');
      // Reset the form
      this.reset();
    },
    (error) => {
      console.error('GIN added Fail!',error);
      alert('Failed to create GIN');
    }
  );

}

isValidFormData(): boolean {
  return !!this.gin.address && !!this.gin.contact_nu && !!this.gin.customer_name && !!this.gin. date && !!this.gin.category_id
  && !!this.gin.invoiced_quantity && !!this.gin.issued_quantity ;
}


Cancel(): void {
  if (confirm('Are you sure you want to Cancel?')) {
    location.reload();
  }
}

reset() {
  this.gin = {
    address:'',
    contact_nu:'',
    customer_name:'',
    date:null,
    category_id:null,
    invoiced_quantity:null,
    issued_quantity:null,
    item_description:'',
    remarks:'',
  };
}

}
