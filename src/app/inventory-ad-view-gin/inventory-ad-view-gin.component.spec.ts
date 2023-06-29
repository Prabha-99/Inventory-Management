import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdViewGINComponent } from './inventory-ad-view-gin.component';

describe('InventoryAdViewGINComponent', () => {
  let component: InventoryAdViewGINComponent;
  let fixture: ComponentFixture<InventoryAdViewGINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdViewGINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdViewGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
