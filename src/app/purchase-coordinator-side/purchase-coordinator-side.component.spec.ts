import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorSideComponent } from './purchase-coordinator-side.component';

describe('PurchaseCoordinatorSideComponent', () => {
  let component: PurchaseCoordinatorSideComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
