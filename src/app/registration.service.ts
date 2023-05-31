import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/api/auth/register';

  constructor(private http: HttpClient) { }

  registerUser(regData : any){
    // Send the registration request to the server
    const url = `${this.apiUrl}`
    return this.http.post(url , regData);
  }
}
