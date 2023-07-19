import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';
  searchValue: string = '';
  dialog: any;

  userUpdate = {
    id:"",
    firstname:"",
    lastname:"",
    email:"",
    role:""
  }

  constructor(private userService: GetUserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  openUpdateForm(user: any): void {
    this.userUpdate = user;
  }

  cancelUpdate(user: any): void {
    // Perform any necessary actions when canceling the update
  }

  searchUsers(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.firstname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.lastname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  clearSearch(): void {
    this.searchValue = '';
    this.filteredUsers = this.users;
  }

  updateUser(): void {
    this.userService.updateUser(this.userUpdate).subscribe(
      (response) => {
        console.log('User updated successfully!');
        this.getUsers(); // Refresh the user list after successful update
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
  
}
