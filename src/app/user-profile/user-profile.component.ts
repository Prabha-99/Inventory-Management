import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: any;
  editing: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getUserProfile().subscribe(
      (response: any) => {
        this.user = response;
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
    this.loadUserProfile();
  }

  updateUser() {
    this.authService.updateUserProfile(this.user).subscribe(
      (response: any) => {
        console.log('User profile updated successfully:', response);
        this.editing = false;
      },
      (error: any) => {
        console.log('Error updating user profile:', error);
      }
    );
  }
}
