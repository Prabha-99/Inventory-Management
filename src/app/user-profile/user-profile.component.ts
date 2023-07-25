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
    this.authService.updateUserProfile(this.userUpdate).subscribe(
      (response: any) => {
        console.log('User profile updated successfully:', response);
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
