import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportsComponent } from './order-reports.component';

describe('OrderReportsComponent', () => {
  let component: OrderReportsComponent;
  let fixture: ComponentFixture<OrderReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
