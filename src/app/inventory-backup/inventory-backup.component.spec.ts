import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBackupComponent } from './inventory-backup.component';

describe('InventoryBackupComponent', () => {
  let component: InventoryBackupComponent;
  let fixture: ComponentFixture<InventoryBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBackupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
