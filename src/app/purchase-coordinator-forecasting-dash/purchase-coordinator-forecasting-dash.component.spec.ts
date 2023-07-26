import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorForecastingDashComponent } from './purchase-coordinator-forecasting-dash.component';

describe('PurchaseCoordinatorForecastingDashComponent', () => {
  let component: PurchaseCoordinatorForecastingDashComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorForecastingDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorForecastingDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorForecastingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
