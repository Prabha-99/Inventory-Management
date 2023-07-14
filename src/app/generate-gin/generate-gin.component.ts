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
    category_id:null,
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
      alert("Invalid Phone Number");
      this.tele_error_fix='';
      return;
    }else{
      this.tele_error='';
      this.tele_error_fix='';
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
