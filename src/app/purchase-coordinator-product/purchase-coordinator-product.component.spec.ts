import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorProductComponent } from './purchase-coordinator-product.component';

describe('PurchaseCoordinatorProductComponent', () => {
  let component: PurchaseCoordinatorProductComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
