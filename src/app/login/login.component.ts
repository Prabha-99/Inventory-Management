import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password='';
  error='';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response['token']);
  
        this.authService.getUserRole().subscribe(
          (role) => {
            this.redirectToDashboard(role);
          },
          (error) => {
            console.error('Error getting user role:', error);
            this.error = 'Failed to get user role';
          }
        );
      },
      (error) => {
        if (error.status === 401) {
          this.error = 'Please Enter Credentials!!!';
        } else {
          this.error = 'Invalid email or password..!!!';
        }
      }
    );
  }
  

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  redirectToDashboard(role: string) {
    switch (role) {
      case 'ADMIN':
        this.router.navigate(['/system-admin-dash']);
        break;
      case 'INVENTORY_ADMIN':
        this.router.navigate(['/inventory-ad-dash']);
        break;
      case 'STOCK_MANAGER':
        this.router.navigate(['/stock-manager-dash']);
        break;
      default:
        // Redirect to a default dashboard or handle unknown roles
        this.router.navigate(['/home']);
        break;
    }
  }
}