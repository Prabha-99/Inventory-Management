import { Component, Input, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchValue: string = '';
  showModal: boolean = false;
  userUpdate: any = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    role: ''
  };
  successMessage: string = '';

  constructor(private userService: GetUserService) { }

  ngOnInit(): void {
    this.getUsers();
    
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }
  
  updateUser(): void {
    const id = this.userUpdate.id;
    const updatedUser = {
      firstname: this.userUpdate.firstname,
      lastname: this.userUpdate.lastname,
      role: this.userUpdate.role
    };

    this.userService.updateUser(id, updatedUser).subscribe(
      (updatedUserEntity) => {
        this.successMessage = 'User updated successfully!';
        this.userUpdate = updatedUserEntity;
        // If the backend returns the updatedUser object, you can use it to update the user list in the frontend
        // this.users = this.users.map(user => user.id === updatedUserEntity.id ? updatedUserEntity : user);
        setTimeout(() => {
          this.successMessage = '';
          this.closeUpdateForm();
          this.getUsers();
        }, 2000); // Hide the success message and close the modal after 2 seconds
      },
      (error) => {
        console.error('Error updating user:', error);
        // You can display an error message to the user if desired
      }
    );
  }


  openUpdateForm(user: any): void {
    this.userUpdate = { ...user }; // Create a copy of the user object to prevent direct updates
    this.showModal = true;
  }

  closeUpdateForm(): void {
    this.showModal = false;
    this.userUpdate = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      role: ''
    };
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
