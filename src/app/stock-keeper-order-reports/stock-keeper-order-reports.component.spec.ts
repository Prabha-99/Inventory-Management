import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperOrderReportsComponent } from './stock-keeper-order-reports.component';

describe('StockKeeperOrderReportsComponent', () => {
  let component: StockKeeperOrderReportsComponent;
  let fixture: ComponentFixture<StockKeeperOrderReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperOrderReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperOrderReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
