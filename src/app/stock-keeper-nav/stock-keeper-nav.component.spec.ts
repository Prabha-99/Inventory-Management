import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperNavComponent } from './stock-keeper-nav.component';

describe('StockKeeperNavComponent', () => {
  let component: StockKeeperNavComponent;
  let fixture: ComponentFixture<StockKeeperNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
