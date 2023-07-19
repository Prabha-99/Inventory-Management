import { Component } from '@angular/core';
import { InventoryBackupService } from './inventory-backup.service';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-inventory-backup',
  templateUrl: './inventory-backup.component.html',
  styleUrls: ['./inventory-backup.component.css']
})
export class InventoryBackupComponent {
  
  showProgress: boolean = false;
  progressValue: number = 0;
  backupCompleted: boolean = false;

  constructor(private backupService: InventoryBackupService) {}

  createBackup() {
    this.showProgress = true;
    this.progressValue = 0;
    this.backupCompleted = false;

    this.backupService.createBackup().subscribe(
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total as number;
          this.progressValue = Math.round((100 * event.loaded) / total);
        } else if (event instanceof HttpResponse) {
          console.log(event.body);
          this.showProgress = false;
          this.progressValue = 0;
          this.backupCompleted = true;
        }
      },
      error => {
        console.error(error);
        this.showProgress = false;
        this.progressValue = 0;
        this.backupCompleted = false;
      }
    );
  }
}
