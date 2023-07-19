import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  username: string | undefined;


  constructor(private authService: AuthService, private router: Router) { }

  
    ngOnInit(): void {    //Getting the Current Username
      this.authService.getUsername().subscribe(
        (response: any) => {
          const email = response.firstname; // Email is returned in the response
          const atIndex = email.indexOf('@'); // Find the index of the '@' symbol
          this.username = email.substring(0, atIndex); // Extract the string before the '@' symbol
        },
        (error: any) => {
        }
      );
    }
    
    
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
