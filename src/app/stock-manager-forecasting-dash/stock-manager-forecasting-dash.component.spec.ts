import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerForecastingDashComponent } from './stock-manager-forecasting-dash.component';

describe('StockManagerForecastingDashComponent', () => {
  let component: StockManagerForecastingDashComponent;
  let fixture: ComponentFixture<StockManagerForecastingDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerForecastingDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerForecastingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
