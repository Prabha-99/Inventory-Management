import { TestBed } from '@angular/core/testing';

import { ForecastingChartService } from './forecasting-chart.service';

describe('ForecastingChartService', () => {
  let service: ForecastingChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastingChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
