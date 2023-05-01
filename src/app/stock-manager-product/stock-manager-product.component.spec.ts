import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerProductComponent } from './stock-manager-product.component';

describe('StockManagerProductComponent', () => {
  let component: StockManagerProductComponent;
  let fixture: ComponentFixture<StockManagerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
