import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  private apiUrl = 'http://localhost:8080/api/admin/all';
  private adminUrl = 'http://localhost:8080/api/admin';
  private adminUrlupdate = 'http://localhost:8080/api/admin'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.adminUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  getUser(id: number): Observable<any> {
    const url = `${this.adminUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // updateUser(user: any){
  //   return this.http.put<any>(this.adminUrlupdate, user);
  // }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.adminUrl}/${id}`);
  }

  // updateUserS(User: any): Observable<any> {
  //   return this.http.put<any>(`${this.adminUrlupdate}`, User);
  // }

  updateUser(id: number, updatedUser: any): Observable<any> {
    return this.http.put<any>(`${this.adminUrl}/update/${id}`, updatedUser);
  }


}
