import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '..//app/user.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl1 = 'http://localhost:8080/api/auth/authenticate';
  private apiUrl2 = 'http://localhost:8080/api/user/CurrentUser';
  private apiUrl3 = 'http://localhost:8080/api/auth/register';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {    //Class that can be use to get stored JWT from browswer's local Storage for any Authorization purpose 
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  login(email: string, password: string): Observable<{ token: string }> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<{ token: string }>(`${this.apiUrl1}`, body);
  }
  

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getUsername(): Observable<string> {
    const headers = this.getHeaders();
    return this.http.get<string>(`${this.apiUrl2}`,{ headers }); //Using stored token 
  }
  register(user: UserService): Observable<any> {
    console.log(user);

    const  formData =  new FormData();

    formData.append('firstname',user.firstname);
    formData.append('secondname',user.lastname);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('role',user.role);

    return this.http.post(this.apiUrl3, formData );

  }

}