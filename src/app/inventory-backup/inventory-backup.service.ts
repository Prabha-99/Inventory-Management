import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryBackupService {

  private backupUrl = 'http://localhost:8080/api/backup/back';

  constructor(private http: HttpClient) { }

  createBackup() {
    return this.http.post(this.backupUrl, {});
  }
}
