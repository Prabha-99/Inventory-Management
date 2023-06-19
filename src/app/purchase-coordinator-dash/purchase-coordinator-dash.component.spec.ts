import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorDashComponent } from './purchase-coordinator-dash.component';

describe('PurchaseCoordinatorDashComponent', () => {
  let component: PurchaseCoordinatorDashComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
