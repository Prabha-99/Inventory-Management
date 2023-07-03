import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerSellOrderComponent } from './stock-manager-sell-order.component';

describe('StockManagerSellOrderComponent', () => {
  let component: StockManagerSellOrderComponent;
  let fixture: ComponentFixture<StockManagerSellOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerSellOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerSellOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
