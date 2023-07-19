import { Component } from '@angular/core';
import { InventoryBackupService } from './inventory-backup.service';

@Component({
  selector: 'app-inventory-backup',
  templateUrl: './inventory-backup.component.html',
  styleUrls: ['./inventory-backup.component.css']
})
export class InventoryBackupComponent {

  constructor(private backupService: InventoryBackupService) {}

  createBackup() {
    this.backupService.createBackup().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
