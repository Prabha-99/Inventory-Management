import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperGrnComponent } from './stock-keeper-grn.component';

describe('StockKeeperGrnComponent', () => {
  let component: StockKeeperGrnComponent;
  let fixture: ComponentFixture<StockKeeperGrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperGrnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
