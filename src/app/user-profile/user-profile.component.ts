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
  originalUser: any; // To store the original user profile
  userUpdate: any = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
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
        this.originalUser = { ...response }; // Create a copy of the user profile for tracking changes
        this.userUpdate = { ...response }; // Initialize the userUpdate array with the current user profile data
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
    this.userUpdate = { ...this.originalUser }; // Reset the userUpdate array to the original user profile data
  }

  updateUser(): void {
    this.authService.updateUserProfile(this.userUpdate).subscribe(
      (response: any) => {
        console.log('User profile updated successfully:', response);
        this.editing = false;
        this.user = { ...this.userUpdate }; // Update the displayed user profile with the changes
        this.originalUser = { ...this.userUpdate }; // Update the original user profile with the changes
      },
      (error: any) => {
        console.log('Error updating user profile:', error);
      }
    );
  }
}
