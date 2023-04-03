import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-billing-send',
  templateUrl: './billing-send.component.html',
  styleUrls: ['./billing-send.component.css'],
  

})


export class BillingSendComponent {

  to!: string;
  subject!: string;
  bodyMsg!: string;
  file: any;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  
  sendMail() {
   
    
    let formData = new FormData();
    formData.append('To', this.to);
    formData.append('subject', this.subject);
    formData.append('bodyMsg', this.bodyMsg);
    formData.append('file', this.file);

    this.http.post('http://localhost:8080/api/send', formData).subscribe(
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

  isValidEmail(to:string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(to);
  
  }
  
  }



