import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstname:string ='';
  lastname:string='';
  email:string='';
  password:string='';
  role:string='';
}
