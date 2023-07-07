import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastingDashboardComponent } from './forecasting-dashboard.component';

describe('ForecastingDashboardComponent', () => {
  let component: ForecastingDashboardComponent;
  let fixture: ComponentFixture<ForecastingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
