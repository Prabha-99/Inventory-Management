import { Component, OnInit } from '@angular/core';
import {GetUserService} from '../get-user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{
  users: any[] = [];
  filteredUsers: any[] = [];
  searchValue: string = '';
  dialog: any;
  router: any;

  constructor(private userService: GetUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.userService.deleteUser(id).subscribe(() => {
        // Show a success message
        alert('User deleted successfully');

        // Refresh the user list
        this.getUsers();
      });
    }
  }
  searchUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const fullName = `${user.firstname} ${user.lastname}`;
      return fullName.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredUsers = this.users;
  }
}
