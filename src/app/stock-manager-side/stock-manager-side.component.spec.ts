import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerSideComponent } from './stock-manager-side.component';

describe('StockManagerSideComponent', () => {
  let component: StockManagerSideComponent;
  let fixture: ComponentFixture<StockManagerSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
