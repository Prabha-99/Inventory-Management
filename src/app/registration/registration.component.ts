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
  firstName: '',
  lastName: '',
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
          alert('Email is Already Registered! Please Check Your Email!');
          
        }

        );
    }
  }
  clear(): void {
    this.regData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    };
  }
  validateForm(): boolean {
    // Perform front-end validation
    if (
      this.regData.firstName.trim() === '' ||
      this.regData.lastName.trim() === '' ||
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

    if (!this.validatePassword(this.regData.password)) {
      // Show an error message or perform any other desired actions
      alert('Invalid password. It should contain at least one lowercase letter, one uppercase letter, one special character, one number, and be at least 8 characters long.  Example - @Example8');
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
  validatePassword(password: string): boolean {
    // Password validation logic
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

}
