import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerUpdatePopupComponent } from './stock-manager-update-popup.component';

describe('StockManagerUpdatePopupComponent', () => {
  let component: StockManagerUpdatePopupComponent;
  let fixture: ComponentFixture<StockManagerUpdatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerUpdatePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerUpdatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
