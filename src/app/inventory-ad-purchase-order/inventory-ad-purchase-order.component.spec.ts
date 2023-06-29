import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdPurchaseOrderComponent } from './inventory-ad-purchase-order.component';

describe('InventoryAdPurchaseOrderComponent', () => {
  let component: InventoryAdPurchaseOrderComponent;
  let fixture: ComponentFixture<InventoryAdPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
