import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl1 = 'http://localhost:8080/api/auth/authenticate';
  private apiUrl2 = 'http://localhost:8080/api/auth/CurrentUser';
  private apiUrl3 = 'http://localhost:8080/api/auth/CurrentUserRole';

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
  getUserRole(): Observable<string> {
    const headers = this.getHeaders();
    return this.http.get<string>(`${this.apiUrl3}`, { headers }).pipe(
      catchError((error) => {
        console.error('Failed to get user role Auth', error);
        return throwError('Failed to get user role Auth');
      })
    );
  }
  
  

}