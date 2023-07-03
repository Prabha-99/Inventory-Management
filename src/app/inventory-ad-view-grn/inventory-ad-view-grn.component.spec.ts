import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdViewGRNComponent } from './inventory-ad-view-grn.component';

describe('InventoryAdViewGRNComponent', () => {
  let component: InventoryAdViewGRNComponent;
  let fixture: ComponentFixture<InventoryAdViewGRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdViewGRNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdViewGRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
