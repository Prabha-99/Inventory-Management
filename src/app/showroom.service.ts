import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {



  baseURL = 'http://localhost:8080/api/showroom/add';

  constructor(private http: HttpClient) { }

  submitData(formData: FormData): Observable<any> {

    return this.http.post(this.baseURL, formData);

  }
}
