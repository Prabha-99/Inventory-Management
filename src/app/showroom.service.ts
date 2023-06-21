import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  baseURL = 'http://localhost:8080/api/showroom/add';
  HttpClient: any;
  constructor(private Http: HttpClient) { }

  submitData(file : File):Observable<any>{
    console.log(file);
    return this.HttpClient.post('$ {this.baseURL}/file',file);
  }
}
