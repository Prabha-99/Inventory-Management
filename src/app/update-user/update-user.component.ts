import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetUserService} from '../get-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  users: any[] | undefined;

  constructor(private userService: GetUserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (users: any[]) => {
        this.users = users;
      },
      (error: any) => {
        console.error(error);
        // Handle the error and display an appropriate message
      }
    );
  }

  openUpdateForm(user: any): void {
    this.router.navigate(['/update-user', user.id]);
  }

}
