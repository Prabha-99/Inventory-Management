import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl1 = 'http://localhost:8080/api/auth/authenticate';
  private apiUrl2 = 'http://localhost:8080/api/user/CurrentUser';

  constructor(private http: HttpClient) { }

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
    return this.http.get<string>(`${this.apiUrl2}/username`);
  }
}