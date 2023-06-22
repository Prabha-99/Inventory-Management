import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorEditComponent } from './purchase-coordinator-edit.component';

describe('PurchaseCoordinatorEditComponent', () => {
  let component: PurchaseCoordinatorEditComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
