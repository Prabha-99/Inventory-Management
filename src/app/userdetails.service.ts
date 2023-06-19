import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/user';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private apiUrl = 'http://localhost:8080/api/product/getAllProduct';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
}

}
