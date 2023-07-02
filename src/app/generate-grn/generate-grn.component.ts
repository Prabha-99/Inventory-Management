import { Component } from '@angular/core';
import { GenerateGRNService } from './generate-grn.service';

@Component({
  selector: 'app-generate-grn',
  templateUrl: './generate-grn.component.html',
  styleUrls: ['./generate-grn.component.css']
})
export class GenerateGRNComponent {
  grn:any={
    supplier_name:'',
    address:'',
    contact_nu:'',
    date:'',
    invoice_number:'',
    item_description:'',
    ordered_quantity:'',
    received_quantity:'',
    
    remarks:'',

};
tele_error='';
tele_error_fix='';

constructor(private generateGRNService: GenerateGRNService) {}

submit() {

  if (!this.isValidFormData())  {
    alert('Please Enter Required Fields!!');
    return;
  }
  
  if (!this.isValidPhoneNumber(this.grn.contact_nu)) {
    this.tele_error='Invalid Telephone Number!';
    this.tele_error_fix='';
    return;
  }else{
    this.tele_error='';
    this.tele_error_fix='OK!';
  }



  this.generateGRNService.submit(this.grn).subscribe(
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
  return !!this.grn.supplier_name && !!this.grn.address && !!this.grn.contact_nu && !!this.grn.date && !!this.grn. invoice_number
  && !!this.grn.item_description && !!this.grn.ordered_quantity && !!this.grn. received_quantity && !!this.grn.remarks
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
  this.grn = {
    supplier_name:'',
    address:'',
    contact_nu:'',
    date:null,
    invoice_number:null,
    item_description:null,
    ordered_quantity:null,
    received_quantity:null,
    
    remarks:'',

  };
}

}
