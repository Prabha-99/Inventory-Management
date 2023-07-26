import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorForecatingChartComponent } from './purchase-coordinator-forecating-chart.component';

describe('PurchaseCoordinatorForecatingChartComponent', () => {
  let component: PurchaseCoordinatorForecatingChartComponent;
  let fixture: ComponentFixture<PurchaseCoordinatorForecatingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCoordinatorForecatingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCoordinatorForecatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
