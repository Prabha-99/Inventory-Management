import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperGinComponent } from './stock-keeper-gin.component';

describe('StockKeeperGinComponent', () => {
  let component: StockKeeperGinComponent;
  let fixture: ComponentFixture<StockKeeperGinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperGinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperGinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
