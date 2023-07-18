import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-manager-profile',
  templateUrl: './stock-manager-profile.component.html',
  styleUrls: ['./stock-manager-profile.component.css']
})
export class StockManagerProfileComponent {

  profile={
    fname:'',
    lname:'',
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
  return !!this.profile.fname && !!this.profile.lname && !!this.profile.email && !!this.profile.password ;
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
