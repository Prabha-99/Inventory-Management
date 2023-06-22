import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-coordinator-profile',
  templateUrl: './purchase-coordinator-profile.component.html',
  styleUrls: ['./purchase-coordinator-profile.component.css'],
  template:``
})
export class PurchaseCoordinatorProfileComponent {
  profile={
    fname:'',
    lname:'',
    uname:'',
    email:'',
    password:'',

}
emailerror='';
  emailerror_fix='';

  onUpdate() {
    
    if (!this.isRequired()) {
      alert('Please fill  required fields.');
      return;
     
    }

      if (!this.isValidEmail(this.profile.email)) {
        this.emailerror='Invalid Email Address!';
        this.emailerror_fix='';
        return;
  
      }else{
        this.emailerror='';
        this.emailerror_fix='OK!';
        alert('Successfull!!!');
      } 
      
  }


isRequired(): boolean{
  return !!this.profile.fname && !!this.profile.lname && !!this.profile.email && !!this.profile.uname && !!this.profile.password ;
}

isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

Cancel(): void {
  if (confirm('Are you sure you want to Cancel?')) {
    location.reload();
  }
}

}

