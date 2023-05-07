import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerDashComponent } from './stock-manager-dash.component';

describe('StockManagerDashComponent', () => {
  let component: StockManagerDashComponent;
  let fixture: ComponentFixture<StockManagerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
