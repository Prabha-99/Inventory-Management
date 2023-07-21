import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryBackupService {

  private backupUrl = 'http://localhost:8080/api/backup/back';

  constructor(private http: HttpClient) { }

  // Specify the return type as Observable<HttpEvent<any>>
  createBackup(): Observable<HttpEvent<any>> {
    return this.http.post(this.backupUrl, {}, { reportProgress: true, observe: 'events' });
  }
}
