import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorPurchaseOrderComponent } from './purchase-coordinator-purchase-order.component';

describe('PurchaseCoordinatorPurchaseOrderComponent', () => {
  let component: PurchaseCoordinatorPurchaseOrderComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
