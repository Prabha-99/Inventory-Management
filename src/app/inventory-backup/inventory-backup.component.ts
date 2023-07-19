import { Component } from '@angular/core';
import { InventoryBackupService } from './inventory-backup.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-inventory-backup',
  templateUrl: './inventory-backup.component.html',
  styleUrls: ['./inventory-backup.component.css']
})
export class InventoryBackupComponent {
  showProgress: boolean = false;
  progressValue: number = 0;

  constructor(private backupService: InventoryBackupService) {}

  createBackup() {
    this.showProgress = true;
    this.progressValue = 0;

    this.backupService.createBackup().subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // Now TypeScript knows the type of the 'event' object
          this.progressValue = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          console.log(event.body); // This will log the response after the backup is complete
          this.showProgress = false;
        }
      },
      error => {
        console.error(error);
        this.showProgress = false;
      }
    );
  }
}
