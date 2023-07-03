import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorSellOrderComponent } from './purchase-coordinator-sell-order.component';

describe('PurchaseCoordinatorSellOrderComponent', () => {
  let component: PurchaseCoordinatorSellOrderComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorSellOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorSellOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorSellOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
