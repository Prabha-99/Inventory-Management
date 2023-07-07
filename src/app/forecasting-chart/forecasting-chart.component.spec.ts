import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastingChartComponent } from './forecasting-chart.component';

describe('ForecastingChartComponent', () => {
  let component: ForecastingChartComponent;
  let fixture: ComponentFixture<ForecastingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
