import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GenerateGINService } from './generate-gin.service';

@Component({
  selector: 'app-generate-gin',
  templateUrl: './generate-gin.component.html',
  styleUrls: ['./generate-gin.component.css']
})
export class GenerateGINComponent {
  gin:any ={
    address:'',
    contact_nu:'',
    customer_name:'',
    date:null,
    invoice_no:null,
    invoiced_quantity:null,
    issued_quantity:null,
    item_description:'',
    remarks:'',

   
};
tele_error='';
tele_error_fix='';

constructor(private generateGINService: GenerateGINService) {}

submit() {
    if (!this.isValidFormData())  {
      alert('Please Enter Required Fields!!');
      return;
    }
    
    if (!this.isValidPhoneNumber(this.gin.contact_nu)) {
      this.tele_error='Invalid Telephone Number!';
      this.tele_error_fix='';
      return;
    }else{
      this.tele_error='';
      this.tele_error_fix='OK!';
    }
  

  this.generateGINService.submit(this.gin).subscribe(
    (response) => {
      console.log('Product added successfully');
      // Reset the form
      this.reset();
    },
    (error) => {
      console.error('Failed to add product:', error);
    }
  );

}

isValidFormData(): boolean {
  return !!this.gin.address && !!this.gin.contact_nu && !!this.gin.customer_name && !!this.gin. date && !!this.gin. invoice_no
  && !!this.gin.invoiced_quantity && !!this.gin.issued_quantity && !!this.gin.item_description;
}

isValidPhoneNumber(contact_nu) {
  const regexPattern = /^0\d{9}$/;
  return regexPattern.test(contact_nu);
}




Cancel(): void {
  if (confirm('Are you sure you want to Cancel?')) {
    location.reload();
  }
}

reset() {
  this.gin = {
    address:'',
    contact_nu:null,
    name:'',
    date:null,
    invoice_no:null,
    quantity:null,
    invoiced_quantity:null,
    ides:'',
    remarks:'',
  };
}

}
