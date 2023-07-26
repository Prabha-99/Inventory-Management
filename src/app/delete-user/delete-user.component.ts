import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchValue: string = '';

  constructor(private userService: GetUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users; // Initialize filteredUsers with all users
    });
  }

  deleteUser(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.userService.deleteUser(id).subscribe(() => {
        // Show a success message
        alert('User deleted successfully');

        // Refresh the user list and apply filtering again
        this.getUsers();
        this.searchUsers();
      });
    }
  }

  searchUsers(): void {
    if (this.searchValue.trim() === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.firstname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.lastname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredUsers = this.users;
  }
}
