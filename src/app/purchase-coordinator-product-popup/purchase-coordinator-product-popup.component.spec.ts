import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorProductPopupComponent } from './purchase-coordinator-product-popup.component';

describe('PurchaseCoordinatorProductPopupComponent', () => {
  let component: PurchaseCoordinatorProductPopupComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorProductPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
