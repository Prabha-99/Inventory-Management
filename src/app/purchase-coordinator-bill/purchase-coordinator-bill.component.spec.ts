import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorBillComponent } from './purchase-coordinator-bill.component';

describe('PurchaseCoordinatorBillComponent', () => {
  let component: PurchaseCoordinatorBillComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
