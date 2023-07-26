import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerForecatingChartComponent } from './stock-manager-forecating-chart.component';

describe('StockManagerForecatingChartComponent', () => {
  let component: StockManagerForecatingChartComponent;
  let fixture: ComponentFixture<StockManagerForecatingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerForecatingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerForecatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
