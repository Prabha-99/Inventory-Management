import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorProfileComponent } from './purchase-coordinator-profile.component';

describe('PurchaseCoordinatorProfileComponent', () => {
  let component: PurchaseCoordinatorProfileComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
