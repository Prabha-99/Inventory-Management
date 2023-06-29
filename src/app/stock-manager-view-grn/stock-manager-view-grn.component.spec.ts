import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerViewGRNComponent } from './stock-manager-view-grn.component';

describe('StockManagerViewGRNComponent', () => {
  let component: StockManagerViewGRNComponent;
  let fixture: ComponentFixture<StockManagerViewGRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerViewGRNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerViewGRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
