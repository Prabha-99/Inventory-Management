import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperDashComponent } from './stock-keeper-dash.component';

describe('StockKeeperDashComponent', () => {
  let component: StockKeeperDashComponent;
  let fixture: ComponentFixture<StockKeeperDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
