import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { User } from '../user';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.css']
})
export class GetUserDetailsComponent implements OnInit{
  user!: User[];

  constructor(private userService: UserdetailsService) { }

  ngOnInit() {
      this.loadUsers();
  }

  loadUsers() {
      this.userService.getUsers().subscribe(
          data => {
              this.user = data;
          },
          error => {
              // Handle error
          }
      );
  }

}
