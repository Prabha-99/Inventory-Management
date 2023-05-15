import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdProductPopupComponent } from './inventory-ad-product-popup.component';

describe('InventoryAdProductPopupComponent', () => {
  let component: InventoryAdProductPopupComponent;
  let fixture: ComponentFixture<InventoryAdProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdProductPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
