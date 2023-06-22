import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorNavComponent } from './purchase-coordinator-nav.component';

describe('PurchaseCoordinatorNavComponent', () => {
  let component: PurchaseCoordinatorNavComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
