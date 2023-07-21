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
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          const token = response.token;
        localStorage.setItem('token', token);
          
          // Getting the user role
          this.authService.getUserRole().subscribe(
            (role) => {

              // Navigate to specific dashboard based on the role
              switch (role) {
                case 'ADMIN':
                  this.router.navigate(['/system-admin-dash']);
                  break;
                case 'PURCHASE_COORDINATOR':
                  this.router.navigate(['/purchase-coordinator-dash']);
                  break;
                case 'INVENTORY_ADMIN':
                  this.router.navigate(['/inventory-ad-dash']);
                  break;
                case 'STOCK_MANAGER':
                  this.router.navigate(['/stock-manager-dash']);
                  break;
                case 'STOCK_KEEPER':
                  this.router.navigate(['/stock-keeper-dash']);
                  break;
                case 'DESIGNER':
                  this.router.navigate(['/designer']);
                  break;
                case 'SHOWROOM_MANAGER':
                  this.router.navigate(['/showroom']);
                  break;
                default:
                  this.router.navigate(['/']);
                  break;
              }
            }
          );
        },
        (error) => {
          if (error.status === 401) {
            this.error = 'Please enter valid credentials.';
          } else {
            this.error = 'Invalid email or password.';
          }
        }
      );
  }


  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}