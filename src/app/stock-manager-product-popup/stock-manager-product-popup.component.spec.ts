import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerProductPopupComponent } from './stock-manager-product-popup.component';

describe('StockManagerProductPopupComponent', () => {
  let component: StockManagerProductPopupComponent;
  let fixture: ComponentFixture<StockManagerProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerProductPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
