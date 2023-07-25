import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: any;
  editing: boolean = false;
  originalUser: any; // To store the original user profile

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getUserProfile().subscribe(
      (response: any) => {
        this.user = response;
        this.originalUser = { ...response }; // Create a copy of the user profile for tracking changes
      },
      (error: any) => {
        console.log('Error retrieving user profile:', error);
      }
    );
  }

  editProfile() {
    this.editing = true;
  }

  cancelUpdate() {
    this.editing = false;
    this.user = { ...this.originalUser }; // Reset the form to the original user profile data
  }

  updateUser() {
    this.authService.updateUserProfile(this.user).subscribe(
      (response: any) => {
        console.log('User profile updated successfully:', response);
        this.editing = false;
        this.originalUser = { ...this.user }; // Update the original user profile with the changes
      },
      (error: any) => {
        console.log('Error updating user profile:', error);
      }
    );
  }
}
