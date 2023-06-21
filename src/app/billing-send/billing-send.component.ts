import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-billing-send',
  templateUrl: './billing-send.component.html',
  styleUrls: ['./billing-send.component.css'],
  

})


export class BillingSendComponent {

  to!:'';
  subject!:'';
  bodyMsg!:'';
  file: any;
  formData: any;


  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  
//email validation
isValidEmailsend(to: any): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(to);
}

  emailerror='';
  emailerror_fix='';

  sendMail() {
    
    let formData = new FormData();
    formData.append('to', this.to);
    formData.append('subject', this.subject);
    formData.append('bodyMsg', this.bodyMsg);
    formData.append('file', this.file);

    if (!this.isValidEmailsend(this.to)) {
      this.emailerror='Invalid Email Address!';
      this.emailerror_fix='';
      return;

    }
    this.emailerror_fix='ok!';
      this.emailerror='';
    
   
      this.http.post('http://localhost:8080/api/mail/send', this.formData).subscribe(
        (response) => {
     
          window.alert('Email sent successfully!');
          console.log(response);
        },
        (error) => {
          window.alert('Error sending Mail');
          console.error(error);
        }
   
        );
  }


  
  }



