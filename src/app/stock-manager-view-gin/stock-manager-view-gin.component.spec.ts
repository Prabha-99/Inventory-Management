import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerViewGINComponent } from './stock-manager-view-gin.component';

describe('StockManagerViewGINComponent', () => {
  let component: StockManagerViewGINComponent;
  let fixture: ComponentFixture<StockManagerViewGINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerViewGINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerViewGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
