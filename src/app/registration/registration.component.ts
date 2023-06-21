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
    // Perform validation before submitting the registration data
    if (this.validateForm()) {
      // Call the registration service to register the user
      this.registrationService.registerUser(this.regData)
        .subscribe(response => {
          // Handle the response from the server
          console.log(response);
          alert('Registration successful');
          this.clear();
        },
        error => {
          // Handle the error response from the server
          console.log(error);
          alert('Registration failed. Please try again.');
          
        }

        );
    }
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
  validateForm(): boolean {
    // Perform front-end validation
    if (
      this.regData.firstname.trim() === '' ||
      this.regData.lastname.trim() === '' ||
      this.regData.email.trim() === '' ||
      this.regData.password.trim() === '' ||
      this.regData.role.trim() === ''
    ) {
      // Show an error message or perform any other desired actions
      alert('All fields are required');
      return false;
    }

    if (!this.validateEmail(this.regData.email)) {
      // Show an error message or perform any other desired actions
      alert('Invalid email');
      return false;
    }

    // Additional validation rules can be added here if needed

    return true; // Form is valid
  }
  validateEmail(email: string): boolean {
    // Email validation logic
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  

}
