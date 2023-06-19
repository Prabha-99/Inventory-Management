import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorOrderComponent } from './purchase-coordinator-order.component';

describe('PurchaseCoordinatorOrderComponent', () => {
  let component: PurchaseCoordinatorOrderComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
