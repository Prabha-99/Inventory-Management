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
          console.log('Token:', response.token);
          localStorage.setItem('token', response['token']);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.error = error.error.message;
        }
      );
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}