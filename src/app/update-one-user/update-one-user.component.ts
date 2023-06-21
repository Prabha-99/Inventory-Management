import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-update-one-user',
  templateUrl: './update-one-user.component.html',
  styleUrls: ['./update-one-user.component.css']
})
export class UpdateOneUserComponent implements OnInit {
  user: any = {}; // Initialize the user object

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: GetUserService
  ) {}

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

  cancelUpdate(): void {
    // Redirect to user list or perform any other action
    this.router.navigate(['/users']);
  }

  updateUser(): void {
    console.log('Updating user:', this.user); // Check if the user object is populated correctly
    if (this.validateForm()) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        // Navigate to the user list or perform any other action
        this.router.navigate(['/users']);
      });
    }
  }

  validateForm(): boolean {
    // Perform front-end validation
    if (
      this.user.firstname.trim() === '' ||
      this.user.lastname.trim() === '' ||
      this.user.email.trim() === '' ||
      this.user.password.trim() === '' ||
      this.user.role.trim() === ''
    ) {
      // Show an error message or perform any other desired actions
      alert('All fields are required');
      return false;
    }

    if (!this.validateEmail(this.user.email)) {
      // Show an error message or perform any other desired actions
      alert('Invalid email');
      return false;
    }

    // Additional validation rules can be added here if needed

    return true; // Form is valid
  }

  validateEmail(email: string): boolean {
    // Email validation logic
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
