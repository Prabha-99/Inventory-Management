import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/authenticate';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{ token: string }> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<{ token: string }>(`${this.apiUrl}`, body);
  }
  

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}