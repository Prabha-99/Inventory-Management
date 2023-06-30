import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-gin',
  templateUrl: './generate-gin.component.html',
  styleUrls: ['./generate-gin.component.css']
})
export class GenerateGINComponent {
  profile={
    address:'',
    cnumber:'',
    name:'',
    date:'',
    inumber:'',
    quantity:'',
    iquantity:'',
    ides:'',
    remarks:'',

   
};

formData: any = {}; // Object to store form data

constructor(private http: HttpClient) { }

submitForm() {
  this.http.post('/api/submit', this.formData)
    .subscribe(response => {
      console.log('Form submitted successfully');
      // Reset the form after successful submission
      this.formData = {};
    }, error => {
      console.error('An error occurred while submitting the form:', error);
    });
}


// emailerror='';
// emailerror_fix='';

// onSubmit() {
  
//   if (!this.isRequired()) {
//     alert('Please fill  required fields.');
//     return;
   
//   }

    
    
// }


// isRequired(): boolean{
// return !!this.profile.address && !!this.profile.cnumber && !!this.profile.name && !!this.profile.date && !!this.profile.inumber && !!this.profile.quantity && !!this.profile.iquantity
// && !!this.profile.ides && !!this.profile.remarks;
// }

// isValidEmail(email: string): boolean {
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// return emailRegex.test(email);
// }

// Cancel(): void {
// if (confirm('Are you sure you want to Cancel?')) {
//   location.reload();
// }
// }
}
