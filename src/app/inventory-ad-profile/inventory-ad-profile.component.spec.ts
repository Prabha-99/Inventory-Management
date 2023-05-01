import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdProfileComponent } from './inventory-ad-profile.component';

describe('InventoryAdProfileComponent', () => {
  let component: InventoryAdProfileComponent;
  let fixture: ComponentFixture<InventoryAdProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
