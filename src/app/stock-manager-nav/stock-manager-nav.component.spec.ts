import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerNavComponent } from './stock-manager-nav.component';

describe('StockManagerNavComponent', () => {
  let component: StockManagerNavComponent;
  let fixture: ComponentFixture<StockManagerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
