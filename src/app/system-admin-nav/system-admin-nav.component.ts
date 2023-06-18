import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-system-admin-nav',
  templateUrl: './system-admin-nav.component.html',
  styleUrls: ['./system-admin-nav.component.css']
})
export class SystemAdminNavComponent implements OnInit{
  username: string | undefined;


  constructor(private authService: AuthService, private router: Router) { }

  
    ngOnInit(): void {
      this.authService.getUsername().subscribe(
        (response: any) => {
          this.username = response.firstname.toString(); //Converting the Object that returning through the Endpoint as the response
        },
        (error: any) => {
          // Handle error
        }
      );
    }
    
  

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }


}
