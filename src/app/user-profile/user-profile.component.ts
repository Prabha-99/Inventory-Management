import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  editing: boolean = false;
  originalUser: any;
  userUpdate: any = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.authService.getUserProfile().subscribe(
      (response: any) => {
        this.user = response;
        this.originalUser = { ...response };
        this.userUpdate = { ...response };
      },
      (error: any) => {
        console.log('Error retrieving user profile:', error);
      }
    );
  }

  editProfile(): void {
    this.editing = true;
  }

  cancelUpdate(): void {
    this.editing = false;
    this.userUpdate = { ...this.originalUser };
  }

  updateUser(): void {
    const updatedUser = {
      id: this.userUpdate.id,
      firstname: this.userUpdate.firstname,
      lastname: this.userUpdate.lastname,
      email: this.userUpdate.email,
      password: this.userUpdate.password,
      role: this.userUpdate.role
    };

    if (this.validateForm()) {

    this.authService.updateUserProfile(updatedUser).subscribe(
      (response: any) => {
        alert('User profile updated successfully');
        // console.log('User profile updated successfully:', response);
        this.editing = false;
        this.user = { ...this.userUpdate };
        this.originalUser = { ...this.userUpdate };
      },
      (error: any) => {
        console.log('Error updating user profile:', error);
      }
    );
    }
  }

  validateForm(): boolean {
    // Perform front-end validation
    if (
      this.userUpdate.firstname.trim() === '' ||
      this.userUpdate.lastname.trim() === '' ||
      this.userUpdate.email.trim() === '' ||
      this.userUpdate.password.trim() === '' ||
      this.userUpdate.role.trim() === ''
    ) {
      // Show an error message or perform any other desired actions
      alert('All fields are required');
      return false;
    }
    


    if (!this.validateEmail(this.userUpdate.email)) {
      // Show an error message or perform any other desired actions
      alert('Invalid email');
      return false;
    }

    if (!this.validatePassword(this.userUpdate.password)) {
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
