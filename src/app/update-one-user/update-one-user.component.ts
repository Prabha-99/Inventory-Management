import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GetUserService} from '../get-user.service';

@Component({
  selector: 'app-update-one-user',
  templateUrl: './update-one-user.component.html',
  styleUrls: ['./update-one-user.component.css']
})
export class UpdateOneUserComponent implements OnInit{
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: GetUserService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.getUser(id);
    }
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  updateUser(): void {
    if (this.validateForm()) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        // Navigate to the user list or perform any other action
        this.router.navigate(['/users']);
      });
    }
  }

  validateForm(): boolean {
    // Perform front-end validation
    // Implement your validation logic here
    // Return true if the form is valid, otherwise return false
    return true;
  }

}
