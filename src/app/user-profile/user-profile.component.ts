import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userProfile: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(
      (data: any) => {
        this.userProfile = data;
      },
      (error: any) => {
        console.error('Failed to fetch user profile:', error);
      }
    );
  }
}
