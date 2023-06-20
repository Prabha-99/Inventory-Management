import { Component, OnInit } from '@angular/core';
import {GetUserService} from '../get-user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit{
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
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.filteredUsers = users;
      });
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
