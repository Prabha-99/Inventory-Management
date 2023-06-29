import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerPurchaseOrderComponent } from './stock-manager-purchase-order.component';

describe('StockManagerPurchaseOrderComponent', () => {
  let component: StockManagerPurchaseOrderComponent;
  let fixture: ComponentFixture<StockManagerPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
