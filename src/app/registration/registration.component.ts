import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ro } from 'date-fns/locale';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  regData = {

  firstname: '',
  lastname: '',
  email: '',
  password: '',
  role : '',
  };

  constructor(private registrationService: RegistrationService) { }

  register(): void {
    // Call the registration service to register the user
    this.registrationService.registerUser(this.regData)
      .subscribe(response => {
        // Handle the response from the server
        console.log(response);
      });
  }
  clear(): void {
    this.regData = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: ''
    };
  }
  

}
